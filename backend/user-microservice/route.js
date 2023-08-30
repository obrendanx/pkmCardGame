const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.post('/userprofile', userController.userprofile);
router.get('/fetchprofileicon', userController.fetchProfileIcon);
router.get('/fetchbio', userController.fetchBio);
router.get('/fetchgender', userController.fetchGender);
router.get('/fetchdob', userController.fetchDateOfBirth);
router.get('/fetchinterests', userController.fetchInterests);
router.get('/fetchsocials', userController.fetchSocials);
router.get('/fetchpokemon', userController.fetchPokemon);
router.put('/updateprofile', userController.updateProfile);

module.exports = router;