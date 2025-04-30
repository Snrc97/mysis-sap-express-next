import { validateLogin } from '../validation/AuthValidation';

import '../extensions/common';
import { orderController } from '../controllers/OrderController';
import { userController } from '../controllers/UserController';
import { customerController } from '../controllers/CustomerController';
import { authController } from '../controllers/AuthController';
import { marketController } from '../controllers/MarketController';
import { marketItemController } from '../controllers/MarketItemController';
import { userAuthentication } from '../middleware/user-authentication';
import { Router } from 'express';
const router = Router();
router.get(
  '/orderGet',
  async (req, res) => await orderController.index(req, res)
);

router.group('public', (router) => {
  router.public('order', orderController);
  router.public('customer', customerController);
  router.public('market', marketController);
  router.public('market-item', marketItemController);
});

router.resource('user', userController, userAuthentication);
router.resource('order', orderController, userAuthentication);
router.resource('customer', customerController, userAuthentication);
router.resource('market', marketController, userAuthentication);
router.resource('market-item', marketItemController, userAuthentication);

router.group('auth', (router) => {
  router.post('/register', authController.register);
  router.post('/login', validateLogin, authController.login);
  router.post('/logout', authController.logout);
  router.post('/forgot-password', authController.forgotPassword);
  router.post('/verify-email', authController.verifyEmail);
  router.post('/verify-phone-number', authController.verifyPhoneNumber);
});

export default router;
