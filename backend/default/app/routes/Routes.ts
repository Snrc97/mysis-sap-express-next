import { validateLogin } from '../validation/AuthValidation';

import '../extensions/common';
import { Router } from 'express';
import { orderController } from '../controllers/OrderController';
import { userController } from '../controllers/UserController';
import { customerController } from '../controllers/CustomerController';
import { authController } from '../controllers/AuthController';
import { marketController } from '../controllers/MarketController';
import { marketItemController } from '../controllers/MarketItemController';
import { userAuthentication } from '../middleware/user-authentication';

const router = Router();
router.get(
  '/orderGet',
  async (req, res) => await orderController.index(req, res)
);


router.group(
  '/',
  userAuthentication,
  (router) => {
    router.resource('user', userController);
    router.resource('order', orderController);
    router.resource('customer', customerController);
    router.resource('market', marketController);
    router.resource('market-item', marketItemController);
  }
);


router.group('auth', (router) => {
  router.post('/register', authController.register);
  router.post('/login', validateLogin, authController.login);
  router.post('/logout', authController.logout);
  router.post('/forgot-password', authController.forgotPassword);
  router.post('/verify-email', authController.verifyEmail);
  router.post('/verify-phone-number', authController.verifyPhoneNumber);
});



export default router;
