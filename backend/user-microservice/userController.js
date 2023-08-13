const profile = require('./models/profile');
const userService = require('./userService');

require('dotenv').config();

const userprofile = async (request, response) => {
  try {
    console.log('Request body:', request.body); // Add this line to check the request body

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

    console.log('New profile:', newProfile); // Add this line to check the new profile data

    const savedProfile = await newProfile.save();

    console.log('Saved profile:', savedProfile); // Add this line to check the saved profile data

    response.json(savedProfile);
  } catch (error) {
    console.error('Error in userprofile:', error.message); // Add this line to log the error message
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
    // Fetch profile data from the database
    const profileData = await profile.findOne({ username: request.body.username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    // Get the bio field from the fetched profile data
    const bio = profileData.bio;

    response.json({ bio });
  } catch (error) {
    console.error('Error in fetchBio:', error);
    response.status(500).json({ error: 'Failed to fetch bio' });
  }
};

const fetchGender = async (request, response) => {
  try {
    // Fetch profile data from the database
    const profileData = await profile.findOne({ username: request.body.username });

    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found' });
    }

    // Get the gender field from the fetched profile data
    const gender = profileData.gender;

    response.json({ gender });
  } catch (error) {
    console.error('Error in fetchGender:', error);
    response.status(500).json({ error: 'Failed to fetch gender' });
  }
};

module.exports = {
  userprofile,
  fetchProfileIcon,
  fetchBio,
  fetchGender,
};

