const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/signup', async (req, res) => axios.post('http://localhost:5001/signup', req.body)
  .then(response => res.json(response.data))
  .catch(error => res.status(500).json({ error: 'Signup failed' })));

router.post('/login', async (req, res) => axios.post('http://localhost:5001/login', req.body)
  .then(response => res.json(response.data))
  .catch(error => res.status(500).json({ error: 'Login failed' })));

module.exports = router;