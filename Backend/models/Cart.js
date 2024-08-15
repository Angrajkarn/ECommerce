// models/Cart.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Adjust path as needed

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  // Additional fields can be added here if needed
});

// Associations
Cart.associate = (models) => {
  Cart.belongsTo(models.User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });
  Cart.belongsTo(models.Product, {
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
};

module.exports = Cart;
