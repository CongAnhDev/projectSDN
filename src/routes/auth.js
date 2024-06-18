const authController = require("../controllers/authController");
const express = require('express');
const middlewareController = require("../controllers/middlewareController");
const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/refresh',authController.requestRefreshToken);
router.post('/logout', middlewareController.verifyToken, authController.userLogout);

module.exports = router; 