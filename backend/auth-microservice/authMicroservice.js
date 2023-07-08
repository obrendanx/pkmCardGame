const express = require('express');
const { signup, login } = require('./authController');

require('dotenv').config();

// Start the microservice
function startAuthMicroservice() {
  const app = express();

  // Middleware
  app.use(express.json());

  // Routes
  app.post('/signup', (req, res) => signup(req, res, process.env.DATABASE_ACCESS));
  app.post('/login', (req, res) => login(req, res, process.env.DATABASE_ACCESS));

  // Start the server
  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    console.log(`Auth microservice is running on port ${port}`);
  });
}

module.exports = { startAuthMicroservice };