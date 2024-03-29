const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  urlTitle: {
    type: String,
    required: false,
    default: "Untitled",
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Url", UrlSchema);
