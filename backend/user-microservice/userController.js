const profile = require('./models/profile');
const userService = require('./userService');

require('dotenv').config();

const userprofile = async (request, response) => {
  try {
    console.log('Request body:', request.body); 

    const newProfile = new profile({
      username: request.body.username,
      dateOfBirth: request.body.dob,
      profileIconColor: "#3F51B5",
      bio: "",
      gender: "NA",
      interests: [],
      socialMedia: {
        twitter: "",
        facebook: "",
        instagram: ""
      },
      favouritePokemon: ""
    });

    console.log('New profile:', newProfile); 

    const savedProfile = await newProfile.save();

    console.log('Saved profile:', savedProfile); 

    response.json(savedProfile);
  } catch (error) {
    console.error('Error in userprofile:', error.message); 
    response.status(500).json({ error: 'Failed to create profile controller' });
  }
};

const fetchProfileIcon = async (request, response) => {
  try {
    const username = request.query.username; 
    const profileData = await profile.findOne({ username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    const profileIconColor = profileData.profileIconColor;

    response.json({ profileIconColor });
  } catch (error) {
    console.error('Error in fetchProfileIconColor:', error);
    response.status(500).json({ error: 'Failed to fetch profile icon color' });
  }
};

const fetchBio = async (request, response) => {
  try {
    const username = request.query.username; 
    const profileData = await profile.findOne({ username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    const bio = profileData.bio;

    response.json({ bio });
  } catch (error) {
    console.error('Error in fetchBio:', error);
    response.status(500).json({ error: 'Failed to fetch bio' });
  }
};

const fetchGender = async (request, response) => {
  try {
    const username = request.query.username; 
    const profileData = await profile.findOne({ username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    const gender = profileData.gender;

    response.json({ gender });
  } catch (error) {
    console.error('Error in fetchGender:', error);
    response.status(500).json({ error: 'Failed to fetch gender' });
  }
};

const fetchDateOfBirth = async (request, response) => {
  try {
    const username = request.query.username; 
    const profileData = await profile.findOne({ username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    const dateOfBirth = profileData.dateOfBirth;

    response.json({ dateOfBirth });
  } catch (error) {
    console.error('Error in fetchDateOfBirth:', error);
    response.status(500).json({ error: 'Failed to fetch DOB' });
  }
};

const updateProfile = async (request, response) => {
  try {
    const { username } = request.body;
    const updates = {};

    if (request.body.profileIconColor) {
      updates.profileIconColor = request.body.profileIconColor;
    }

    if (request.body.bio) {
      updates.bio = request.body.bio;
    }

    if (request.body.gender) {
      updates.gender = request.body.gender;
    }

    const updatedProfile = await profile.findOneAndUpdate(
      { username },
      { $set: updates },
      { new: true }
    );

    response.json(updatedProfile);
    console.log(updatedProfile);
  } catch (error) {
    console.error('Error in updateProfile:', error);
    response.status(500).json({ error: 'Failed to update profile' });
  }
};

module.exports = {
  userprofile,
  fetchProfileIcon,
  fetchBio,
  fetchGender,
  updateProfile,
  fetchDateOfBirth
};
