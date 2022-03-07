const express = require('express');
const router = express.Router();
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');

router.post(
  '/register',
  catchAsync(async (req, res) => {
    try {
      const { email, username, password } = req.body;
      const user = new User({ email, username });
      const registeredUser = await User.register(user, password);
      console.log(registeredUser);
    } catch (err) {
      console.log(err);
    }
  })
);

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('voce logou com sucesso');
});

module.exports = router;
