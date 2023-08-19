const mongoose = require('mongoose');
const express = require('express');
const { signup, login, updateAuthProfile } = require('./authController');
const cors = require('cors');

require('dotenv').config();

// Start the microservice
function startAuthMicroservice() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());

  // Routes
  app.post('/signup', signup);
  app.post('/login', login);
  app.put('./updateauthprofile', updateAuthProfile);

  // MongoDB connection options
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000, // Set the socket timeout to 30 seconds (adjust as needed)
  };

  // Connect to MongoDB
  mongoose.connect(process.env.DATABASE_ACCESS, {
    dbName: 'pkmcardgame',
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log('Auth microservice connected to MongoDB cluster!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

  // Start the server
  const port = process.env.PORT || 5001;
  app.listen(port, () => {
    console.log(`Auth microservice is running on port ${port}`);
  });
}

startAuthMicroservice(); // Add this line

module.exports = { startAuthMicroservice };