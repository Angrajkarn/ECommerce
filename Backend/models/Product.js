// models/Product.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Adjust path as needed

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

// Associations
Product.associate = (models) => {
  Product.hasMany(models.Cart, {
    foreignKey: 'productId',
    onDelete: 'CASCADE',
  });
};

module.exports = Product;
