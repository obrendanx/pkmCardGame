const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, {
  dbName: 'pkmcardgame',
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB cluster!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());
app.use(cors());

// Add the Access-Control-Allow-Credentials header to allow credentials in CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Use the authRoute middleware
app.use('/app', authRoute);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});