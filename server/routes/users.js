const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
  // post request
  // register user
});

router.post('/login', (req, res) => {
  // post request
  // login user
});

module.exports = router;
