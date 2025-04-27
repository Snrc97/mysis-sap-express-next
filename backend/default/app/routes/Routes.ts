import { validateLogin } from '../validation/AuthValidation';

import '../extensions/common';
import express from 'express';
import { orderController } from '../controllers/OrderController';
import { userController } from '../controllers/UserController';
import { customerController } from '../controllers/CustomerController';
import { authController } from '../controllers/AuthController';

const router = express.Router();

router.get(
  '/orderGet',
  async (req, res) => await orderController.index(req, res)
);

router.resource('auth', authController);
router.resource('user', userController);
router.resource('order', orderController);
router.resource('customer', customerController);

export default router;
