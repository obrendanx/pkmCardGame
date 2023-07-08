const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recordUrl = require('./routes/userRecord');
const authRoute = require('./routes/authRoute')
const cors = require('cors');
const { startAuthMicroservice }  = require('./auth-microservice/authMicroservice')

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
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Add the Access-Control-Allow-Credentials header to allow credentials in CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/app', recordUrl);
app.use('/app', authRoute);

// start the Express server
app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});

// Start the auth microservice
startAuthMicroservice(process.env.DATABASE_ACCESS);