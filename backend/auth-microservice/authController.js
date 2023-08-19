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

const updateAuthProfile = async (request, response) => {
  try {
    const { username } = request.body;
    const updates = {};

    if (request.body.updatedPassword) {
      // Validate and hash the updated password
      // Update the user's password
      updates.password = hashedPassword;
    }

    if (request.body.updateFullName) {
      // Validate and update the full name
      updates.fullName = request.body.updateFullName;
    }

    // Update the user profile
    const updatedUser = await signUp.findOneAndUpdate(
      { username },
      { $set: updates },
      { new: true }
    );

    response.json(updatedUser);
    console.log(updatedUser);
  } catch (error) {
    console.error('Error in updateAuthProfile:', error);
    response.status(500).json({ error: 'Failed to update profile' });
  }
};

const fetchFullName = async (request, response) => {
  try {
    // Fetch profile data from the database
    const username = request.query.username; 
    const profileData = await signUp.findOne({ username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    // Get the gender field from the fetched profile data
    const fullName = profileData.fullName;

    response.json({ fullName });
  } catch (error) {
    console.error('Error in fetchFullName:', error);
    response.status(500).json({ error: 'Failed to fetch fullname' });
  }
};

const fetchEmail = async (request, response) => {
  try {
    // Fetch profile data from the database
    const username = request.query.username; 
    const profileData = await signUp.findOne({ username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    // Get the gender field from the fetched profile data
    const email = profileData.email;

    response.json({ email });
  } catch (error) {
    console.error('Error in fetchEmail:', error);
    response.status(500).json({ error: 'Failed to fetch email' });
  }
};

module.exports = {
  signup,
  login,
  updateAuthProfile, 
  fetchFullName,
  fetchEmail
};