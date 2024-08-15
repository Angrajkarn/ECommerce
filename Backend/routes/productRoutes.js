const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig'); // Import the database configuration

// Get all products
router.get('/', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

// Get product by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching product:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results[0]);
  });
});

module.exports = router;
