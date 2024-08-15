const db = require('../config/dbConfig');

exports.getAllProducts = (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching product:', err);
      res.status(500).send('Server error');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Product not found');
      return;
    }
    res.json(results[0]);
  });
};

exports.addProduct = (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;
  const query = 'INSERT INTO products (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, description, price, category, imageUrl], (err, results) => {
    if (err) {
      console.error('Error adding product:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(201).send('Product added successfully');
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, imageUrl } = req.body;
  const query = 'UPDATE products SET name = ?, description = ?, price = ?, category = ?, image_url = ? WHERE id = ?';
  db.query(query, [name, description, price, category, imageUrl, id], (err, results) => {
    if (err) {
      console.error('Error updating product:', err);
      res.status(500).send('Server error');
      return;
    }
    res.send('Product updated successfully');
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting product:', err);
      res.status(500).send('Server error');
      return;
    }
    res.send('Product deleted successfully');
  });
};
