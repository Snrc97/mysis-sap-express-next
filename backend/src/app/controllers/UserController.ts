import BaseController from './BaseController';
import UserRepository from '../repositories/UserRepository';

namespace App.Controllers {
  export class UserController extends BaseController {
    constructor() {
      super(new UserRepository());
    }
  }
}

export default App.Controllers.UserController;