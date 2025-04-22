import OrderController from '../controllers/OrderController';
import { validateLogin } from '../validation/AuthValidation';

import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import '../extensions/common';
import express from 'express';
import { databaseManager } from '../config/database';
import orderController from '../controllers/OrderController';

await databaseManager.syncAll();

const router = express.Router();

router.get('/orderGet', async (req,res) => await orderController.index(req,res));

// const authController = new AuthController();
// router.resource('order', orderController);
// router.resource('/user', new UserController());
// router.post('/register', authController.register);
// router.post('/login', [validateLogin, authController.login]);
// router.post('/logout', [validateLogin, authController.logout]);
// router.post('/forgot-password', authController.forgotPassword);
// router.post('/verify-email', authController.verifyEmail);
// router.post('/verify-phone-number', authController.verifyPhoneNumber);

export default router;
