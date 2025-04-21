const express = require('express');
const router = express.Router();
const { authController } = require('../controllers/AuthController');
const { validateLogin } = require('../validation/authValidation');




module.exports = router;
