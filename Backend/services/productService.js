const db = require('../config/dbConfig');

const getAllProducts = () => {
  const query = 'SELECT * FROM products';
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        return reject(new Error('Server error'));
      }
      resolve(results);
    });
  });
};

const getProductById = (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching product:', err);
        return reject(new Error('Server error'));
      }
      if (results.length === 0) {
        return reject(new Error('Product not found'));
      }
      resolve(results[0]);
    });
  });
};

module.exports = { getAllProducts, getProductById };
