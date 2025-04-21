const { BaseController } = require('./BaseController');

class UserController extends BaseController {
  constructor() {
    super(UserRepository);
  }
}

module.exports = new UserController();

