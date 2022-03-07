function validateUrl(value) {
  const urlRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

  return urlRegex.test(value);
}

module.exports = { validateUrl };
