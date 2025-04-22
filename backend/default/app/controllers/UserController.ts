import BaseController from './BaseController';
import UserRepository from '../repositories/UserRepository';

class UserController extends BaseController {
  constructor() {
    super(new UserRepository());
  }
}

const userController = new UserController();
export default userController;