const db = require('../config/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const serverConfig = require('../config/serverConfig');
const { validationResult } = require('express-validator'); // For validation

// Helper function to generate a random username
const generateUsername = (name) => {
  const randomSuffix = Math.floor(Math.random() * 10000);
  return name.substring(0, 6) + randomSuffix;
};

const register = async (name, email, password) => {
  const errors = validationResult(req); // Assuming you have validation in place
  if (!errors.isEmpty()) {
    throw new Error('Validation failed');
  }

  const username = generateUsername(name);
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (username, name, email, password) VALUES (?, ?, ?, ?)';
  return new Promise((resolve, reject) => {
    db.query(query, [username, name, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error registering user:', err);
        return reject(new Error('Server error'));
      }
      resolve('User registered successfully');
    });
  });
};

const login = async (email, password) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Error logging in user:', err);
        return reject(new Error('Server error'));
      }
      if (results.length === 0) {
        return reject(new Error('Invalid email or password'));
      }

      const user = results[0];
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return reject(new Error('Invalid email or password'));
      }

      const token = jwt.sign({ id: user.id }, serverConfig.jwtSecret, { expiresIn: '1h' });
      resolve({ token, user: { id: user.id, username: user.username, email: user.email } });
    });
  });
};

module.exports = { register, login };
