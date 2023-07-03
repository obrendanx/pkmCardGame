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

router.post('/login', async (request, response, next) => {
  try {
    const user = await signUp.findOne({ username: request.body.username });
    if (user) {
      const cmp = await bcrypt.compare(request.body.password, user.password);
      if (cmp) {
        const token = jwt.sign({
          username: user.username,
          email: user.email,
        }, process.env.SECRET_KEY);
        
        // Set the token as a cookie in the response
        response.cookie('token', token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Expires in 30 days
          httpOnly: true,
          secure: false, // Set to true if using HTTPS
          sameSite: 'Lax', // Set to 'None' when using HTTPS, 'Lax' when using HTTP
        });

        // Set the userId as a cookie in the response
        response.cookie('userId', user._id.toString(), {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: false,
          sameSite: 'Lax',
        });

        return response.json({ status: 'ok', user: { token, userId: user._id } });
      } else {
        return response.json({ status: 'error', user: false });
      }
    } else {
      return next(new Error('Wrong username or password.'));
    }
  } catch (error) {
    next(error);
  }
});

router.use(errorHandler);

module.exports = router