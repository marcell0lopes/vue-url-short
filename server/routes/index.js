const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

// Get top 100 URL (by clicks)
router.get('/top', async (req, res) => {
  try {
    const top100url = await Url.find().sort({ clicks: -1 }).limit(100);
    res.json(top100url);
  } catch (err) {
    console.log(err);
    res.status(500).json('Internal Server Error');
  }
});

// Redirect from short URL to original URL
router.get('/:urlId', async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });

    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.originalUrl);
    } else {
      res.status(404).json('Not Found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json('Internal Server Error');
  }
});

module.exports = router;
