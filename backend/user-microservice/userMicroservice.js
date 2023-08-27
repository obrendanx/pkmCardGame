const mongoose = require('mongoose');
const express = require('express');
const { userprofile, fetchProfileIcon, fetchBio, fetchGender, updateProfile, fetchDateOfBirth, fetchInterests, fetchSocials, fetchPokemon } = require('./userController');
const cors = require('cors');

require('dotenv').config();

// Start the microservice
function startUserMicroservice() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());

  // Routes
  app.post('/userprofile', userprofile);
  app.get('/fetchprofileicon', fetchProfileIcon);
  app.get('/fetchbio', fetchBio);
  app.get('/fetchgender', fetchGender);
  app.get('/fetchdob', fetchDateOfBirth);
  app.get('/fetchinterests', fetchInterests);
  app.get('/fetchsocials', fetchSocials);
  app.get('/fetchpokemon', fetchPokemon);
  app.put('/updateprofile', updateProfile);

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
        console.log('User microservice connected to MongoDB cluster!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

  // Start the server
  const port = process.env.PORT || 5002;
  app.listen(port, () => {
    console.log(`User microservice is running on port ${port}`);
  });
}

startUserMicroservice(); // Add this line

module.exports = { startUserMicroservice };