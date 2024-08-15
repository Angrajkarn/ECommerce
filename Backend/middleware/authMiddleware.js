const jwt = require('jsonwebtoken');
const serverConfig = require('../config/serverConfig');

const authMiddleware = (req, res, next) => {
  // Get token from headers
  const token = req.headers['authorization']?.split(' ')[1]; // Format: "Bearer <token>"

  if (!token) {
    return res.status(401).send('Access Denied. No token provided.');
  }

  jwt.verify(token, serverConfig.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token.');
    }
    
    // Attach user info to request object
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
