const express = require('express');
const { loginUser } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/login', loginUser); // Login route
router.get('/dashboard', protect, (req, res) => {
  res.json({ message: 'Welcome to the dashboard', user: req.user });
});

module.exports = router;
