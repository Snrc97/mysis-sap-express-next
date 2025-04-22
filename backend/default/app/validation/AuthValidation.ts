import { body } from 'express-validator';

namespace App.Validation {
  export const validateLogin = [
    body('email').isEmail().withMessage('Geçerli bir e-posta adresi girin.'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Parola en az 6 karakter olmalıdır.'),
  ];

  export const validateRegister = [
    ...validateLogin,
    body('name').notEmpty().withMessage('İsim alanı boş bırakılamaz.'),
  ];
}
const { validateLogin, validateRegister } = App.Validation;
export { validateLogin, validateRegister };
