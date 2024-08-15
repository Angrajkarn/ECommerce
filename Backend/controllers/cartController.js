const db = require('../config/dbConfig');

exports.getCart = (req, res) => {
  const userId = req.user.id;
  const query = 'SELECT * FROM cart WHERE user_id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching cart:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
};

exports.addToCart = (req, res) => {
  const userId = req.user.id; // Assuming user ID is stored in req.user
  const { productId, quantity } = req.body;
  const query = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
  db.query(query, [userId, productId, quantity], (err, results) => {
    if (err) {
      console.error('Error adding to cart:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(201).send('Product added to cart');
  });
};

exports.removeFromCart = (req, res) => {
  const userId = req.user.id; // Assuming user ID is stored in req.user
  const { productId } = req.body;
  const query = 'DELETE FROM cart WHERE user_id = ? AND product_id = ?';
  db.query(query, [userId, productId], (err, results) => {
    if (err) {
      console.error('Error removing from cart:', err);
      res.status(500).send('Server error');
      return;
    }
    res.send('Product removed from cart');
  });
};
