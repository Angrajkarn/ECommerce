const jwt = require('jsonwebtoken');
const serverConfig = require('../config/serverConfig');

/**
 * Generates a JWT token for a given user ID.
 * @param {string} userId - The ID of the user.
 * @returns {string} - The generated JWT token.
 */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, serverConfig.jwtSecret, { expiresIn: '1h' });
};

/**
 * @param {string} token - The JWT token to verify.
 * @returns {object} - The decoded payload from the JWT token.
 * @throws {Error} - Throws an error if the token is invalid or expired.
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, serverConfig.jwtSecret);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = { generateToken, verifyToken };
