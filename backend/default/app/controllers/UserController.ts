import BaseController from './BaseController';
import { userRepository } from '../repositories/UserRepository';

class UserController extends BaseController {
  constructor() {
    super(userRepository);
  }
}

const userController = new UserController();
export default UserController;
export { userController }