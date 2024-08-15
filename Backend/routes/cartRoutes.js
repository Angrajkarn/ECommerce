const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Get all items in cart
router.get('/', cartController.getAllItems);

// Add item to cart
router.post('/add', cartController.addItem);

// Remove item from cart
router.delete('/remove/:id', cartController.removeItem);

// Update item quantity
router.put('/update/:id', cartController.updateItem);

module.exports = router;
