// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Adjust path as needed
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  hooks: {
    beforeSave: async (user) => {
      if (user.password && user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
  },
});

// Associations
User.associate = (models) => {
  User.hasMany(models.Cart, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });
};

module.exports = User;
