const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Import your routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

app.use('/api/auth', authRoutes); // Use the routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
