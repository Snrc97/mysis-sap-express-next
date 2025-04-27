import { validateLogin } from '../validation/AuthValidation';

import '../extensions/common';
import express from 'express';
import OrderController, {
  orderController,
} from '../controllers/OrderController';
import UserController, { userController } from '../controllers/UserController';
import { databaseManager, sequelize } from '../config/database';
import { customerController } from '../controllers/CustomerController';




  const router = express.Router();


    router.get(
      '/orderGet',
      async (req, res) => await orderController.index(req, res)
    );

    // const authController = new AuthController();
    router.resource('order', orderController);
    router.resource('customer', customerController);
    router.resource('user', userController);
    // router.post('/register', authController.register);
    // router.post('/login', [validateLogin, authController.login]);
    // router.post('/logout', [validateLogin, authController.logout]);
    // router.post('/forgot-password', authController.forgotPassword);
    // router.post('/verify-email', authController.verifyEmail);
    // router.post('/verify-phone-number', authController.verifyPhoneNumber);



  export default router;


