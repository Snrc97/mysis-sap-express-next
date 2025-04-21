import { authController } from '../controllers/AuthController';
import { validateLogin } from '../validation/authValidation';

import * as express from 'express';

  const router = express.Router();
  require('../extensions/common');

  router.resource('/order', new OrderController());
  router.resource('/user', UserController);

  router.post('/register', authController.register);
  router.post('/login', [validateLogin, authController.login]);
  router.post('/logout', [validateLogin, authController.logout]);
  router.post('/forgot-password', authController.forgotPassword);
  router.post('/verify-email', authController.verifyEmail);
  router.post('/verify-phone-number', authController.verifyPhoneNumber);

  export default router;
