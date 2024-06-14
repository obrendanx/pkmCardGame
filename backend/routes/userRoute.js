const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/userprofile', async (req, res) => axios.post('http://localhost:5002/userprofile', req.body)
  .then(response => res.json(response.data))
  .catch(error => res.status(500).json({ error: 'Failed to fetch user profile userroute' })));

router.post('/fetchuserprofile', async (req, res) => axios.post('http://localhost:5002/fetchuserprofile', req.body)
  .then(response => res.json(response.data))
  .catch(error => res.status(500).json({ error: 'Failed to save user profile userroute' })));

module.exports = router;