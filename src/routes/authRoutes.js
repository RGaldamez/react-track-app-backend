const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  res.send('Sign up');
});

module.exports = router;
