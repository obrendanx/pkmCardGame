const profile = require('./models/profile');

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

const fetchuserprofile = async (request, response) => {
  try {
    const profileData = await profile.findOne({ username: request.body.username });
    if (!profileData) {
      return response.status(404).json({ error: 'Profile not found controller' });
    }

    // Fetch specific data from the userService using the fetched profileData
    const profileIcon = await userService.getProfileIconService(profileData.username);
    const bio = await userService.getBioService(profileData.username);
    const gender = await userService.getGenderService(profileData.username);
    const interests = await userService.getInterestsService(profileData.username);
    const socialMedia = await userService.getSocialMediaService(profileData.username);
    const favoritePokemon = await userService.getFavoritePokemonService(profileData.username);

    // Compose the complete user profile response
    const userProfile = {
      username: profileData.username,
      dateOfBirth: profileData.dateOfBirth,
      profileIcon,
      bio,
      gender,
      interests,
      socialMedia,
      favoritePokemon
    };

    return response.json(userProfile);
  } catch (error) {
    response.status(500).json({ error: 'Failed to fetch profile' });
  }
};

module.exports = {
  userprofile,
  fetchuserprofile
};