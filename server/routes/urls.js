const express = require('express');
const router = express.Router();
const shortId = require('shortid');
const Url = require('../models/Url');
const utils = require('../utils/utils');

// Gerar URL Reduzida:
router.post('/short', async (req, res) => {
  const { originalUrl, urlTitle } = req.body;
  const base = process.env.BASE;

  const urlId = shortId.generate();
  if (utils.validateUrl(originalUrl)) {
    try {
      let url = await Url.findOne({ originalUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          originalUrl,
          shortUrl,
          urlId,
          date: new Date(),
          urlTitle,
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Internal Server Error');
    }
  } else {
    res.status(400).json('Invalid URL');
  }
});

module.exports = router;
