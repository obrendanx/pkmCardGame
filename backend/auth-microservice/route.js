const express = require('express');
const router = express.Router();
const authController = require('./authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/fetchemail', authController.fetchEmail);
router.get('/fetchfullname', authController.fetchFullName);
router.put('/updateauthprofile', authController.updateAuthProfile);

module.exports = router;