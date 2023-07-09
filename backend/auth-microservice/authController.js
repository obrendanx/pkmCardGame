const signUp = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const signup = async (request, response) => {
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
    response.status(500).json({ error: 'Signup failed' });
  }
};

const login = async (request, response) => {
  try {
    console.log('Login function called'); // Add this line
    console.log('Request body:', request.body); // Add this line

    const user = await signUp.findOne({ username: request.body.username });

    console.log('User found:', user); // Add this line

    if (user) {
      const cmp = await bcrypt.compare(request.body.password, user.password);
      if (cmp) {
        const token = jwt.sign({
          username: user.username,
          email: user.email,
        }, process.env.SECRET_KEY);

        response.cookie('token', token, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: false,
          sameSite: 'Lax',
        });

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
      response.status(401).json({ error: 'Wrong username or password.' });
    }
  } catch (error) {
    console.error('Login error:', error); // Add this line
    response.status(500).json({ error: 'Login failed controller' });
  }
};

module.exports = {
  signup,
  login
};