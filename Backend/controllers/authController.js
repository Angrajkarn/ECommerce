const db = require('../config/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const serverConfig = require('../config/serverConfig');

// Helper function to generate a random username
const generateUsername = (name) => {
  const randomSuffix = Math.floor(Math.random() * 10000);
  return name.substring(0, 6) + randomSuffix;
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const username = generateUsername(name);
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, name, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [username, name, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Server error');
        return;
      }
      res.status(201).send('User registered successfully');
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Error logging in user:', err);
      res.status(500).send('Server error');
      return;
    }
    if (results.length === 0) {
      res.status(400).send('Invalid email or password');
      return;
    }
    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(400).send('Invalid email or password');
      return;
    }
    const token = jwt.sign({ id: user.id }, serverConfig.jwtSecret, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  });
};
