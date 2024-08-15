const db = require('../config/dbConfig');

const getAllItems = (userId) => {
  const query = 'SELECT * FROM cart WHERE user_id = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error('Error fetching cart items:', err);
        return reject(new Error('Server error'));
      }
      resolve(results);
    });
  });
};

const addItem = (userId, productId, quantity) => {
  const query = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)';
  return new Promise((resolve, reject) => {
    db.query(query, [userId, productId, quantity], (err, results) => {
      if (err) {
        console.error('Error adding item to cart:', err);
        return reject(new Error('Server error'));
      }
      resolve('Item added to cart successfully');
    });
  });
};

const removeItem = (userId, productId) => {
  const query = 'DELETE FROM cart WHERE user_id = ? AND product_id = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [userId, productId], (err, results) => {
      if (err) {
        console.error('Error removing item from cart:', err);
        return reject(new Error('Server error'));
      }
      resolve('Item removed from cart successfully');
    });
  });
};

const updateItem = (userId, productId, quantity) => {
  const query = 'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [quantity, userId, productId], (err, results) => {
      if (err) {
        console.error('Error updating item in cart:', err);
        return reject(new Error('Server error'));
      }
      resolve('Item updated in cart successfully');
    });
  });
};

module.exports = { getAllItems, addItem, removeItem, updateItem };
