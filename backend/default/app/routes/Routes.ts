import { validateLogin } from '../validation/AuthValidation';

import '../extensions/common';
import express from 'express';
import OrderController, {
  orderController,
} from '../controllers/OrderController';
import UserController, { userController } from '../controllers/UserController';
import { databaseManager, sequelize } from '../config/database';
import { customerController } from '../controllers/CustomerController';
import { authController } from '../controllers/AuthController';




  const router = express.Router();


    router.get(
      '/orderGet',
      async (req, res) => await orderController.index(req, res)
    );

    // const authController = new AuthController();
    router.resource('order', orderController);
    router.resource('customer', customerController);
    router.resource('user', userController);
    router.resource('auth', authController);

  export default router;


