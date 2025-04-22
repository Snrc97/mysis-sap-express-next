import OrderController from '../controllers/OrderController';
import { validateLogin } from '../validation/AuthValidation';

import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import '../extensions/common';
import express from 'express';
const router = express.Router();


const authController = new AuthController();

  router.resource('/order', new OrderController());
  router.resource('/user', new UserController());
  router.post('/register', authController.register);
  router.post('/login', [validateLogin, authController.login]);
  router.post('/logout', [validateLogin, authController.logout]);
  router.post('/forgot-password', authController.forgotPassword);
  router.post('/verify-email', authController.verifyEmail);
  router.post('/verify-phone-number', authController.verifyPhoneNumber);

  export default router;
