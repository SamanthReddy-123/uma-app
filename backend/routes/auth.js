const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: 'Login API hit' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register API hit' });
});

module.exports = router;