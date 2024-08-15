const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const serverConfig = require('./config/serverConfig');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Optional, if you need to handle URL-encoded data
app.use(cors({
  origin: '*', // Adjust as necessary to restrict origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust methods as needed
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cart', authMiddleware, cartRoutes); 
app.use('/api/products', authMiddleware, productRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Database Synchronization (if using Sequelize)
const sequelize = require('./config/dbConfig'); // Adjust path as needed
sequelize.sync()
  .then(() => {
    // Start server
    const PORT = serverConfig.port || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
