const axios = require('axios');

// User profile icon retrieval service
const getProfileIconService = async (username) => {
  try {
    const response = await axios.get(`http://localhost:5002/fetchProfileIcon?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving profile icon');
  }
};

// User bio retrieval service
const getBioService = async (username) => {
  try {
    const response = await axios.get(`/bio?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving bio');
  }
};

// User gender retrieval service
const getGenderService = async (username) => {
  try {
    const response = await axios.get(`/gender?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving gender');
  }
};

// User interests retrieval service
const getInterestsService = async (username) => {
  try {
    const response = await axios.get(`/interests?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving interests');
  }
};

// User social media retrieval service
const getSocialMediaService = async (username) => {
  try {
    const response = await axios.get(`/social-media?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving social media profiles');
  }
};

// User favorite Pokémon retrieval service
const getFavoritePokemonService = async (username) => {
  try {
    const response = await axios.get(`/favorite-pokemon?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving favorite Pokémon');
  }
};

const saveProfileService = async (userData) => {
  try {
    const response = await axios.post('/saveuserprofile', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error saving user profile service');
  }
};

module.exports = {
  getProfileIconService,
  getBioService,
  getGenderService,
  getInterestsService,
  getSocialMediaService,
  getFavoritePokemonService,
  saveProfileService
};