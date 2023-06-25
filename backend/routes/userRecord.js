require("dotenv").config({ path: "./.env" });
const express = require("express");
const router = express.Router();
const signUp = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../middleware/errorHandling');
const dotenv = require('dotenv')

dotenv.config();


router.post('/signup', async (request, response, next) => {
  try {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(request.body.password, saltPassword);

    const signedUpUser = new signUp({
      fullName: request.body.fullName,
      username: request.body.username,
      email: request.body.email,
      password: securePassword,
      dateOfBirth: request.body.dob,
      announcements: request.body.announcements, 
      isGlobalAdmin: false
    });

    const savedUser = await signedUpUser.save();
    response.json(savedUser);
  } catch (error) {
    next(error);
  }
});

router.use(errorHandler);

module.exports = router