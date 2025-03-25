// backend/src/validation/authValidation.js
const { body } = require('express-validator');

const validateLogin = [
  body('email')
    .isEmail()
    .withMessage('Geçerli bir e-posta adresi girin.'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Parola en az 6 karakter olmalıdır.')
];



module.exports = {
    validateLogin,
  validateRegister: [...validateLogin, body('name').notEmpty().withMessage('İsminiz boş bırakılamaz.')],
};

