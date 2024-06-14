const axios = require('axios');

// User signup service
const signupService = async (userData) => {
  try {
    const response = await axios.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw new Error('Signup failed');
  }
};

// User login service
const loginService = async (credentials) => {
  try {
    const response = await axios.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Login failed service');
  }
};

// User profile icon retrieval service
const getProfileIconService = async (username) => {
  try {
    const response = await axios.get(`/profile-icon?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving profile icon');
  }
};

// isAdmin check service
const isAdminService = async (username) => {
  try {
    const response = await axios.get(`/is-admin?username=${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error checking admin status');
  }
};

const updateAuthProfileService = async (updateData) => {
  try {
    const response = await axios.post('/update-auth-profile', updateData);
    return response.data;
  } catch (error) {
    throw new Error('Update auth profile failed');
  }
};

module.exports = {
  signupService,
  loginService,
  getProfileIconService,
  isAdminService,
  updateAuthProfileService
};