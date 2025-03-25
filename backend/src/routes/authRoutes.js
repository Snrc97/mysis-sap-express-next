const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateLogin } = require('../validation/authValidation');

router.post('/register', authController.register);
router.post('/login', [validateLogin, authController.login]);
router.post('/logout', [validateLogin, authController.logout]);
router.post('/forgot-password', authController.forgotPassword);
router.post('/verify-email', authController.verifyEmail);
router.post('/verify-phone-number', authController.verifyPhoneNumber);

module.exports = router;
