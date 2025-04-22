import BaseController from './BaseController';
import UserRepository from '../repositories/UserRepository';
import UserModel from '../models/UserModel';

class UserController extends BaseController<UserModel> {
  constructor() {
    super();
    this.repo = new UserRepository();
  }
}

export default UserController;