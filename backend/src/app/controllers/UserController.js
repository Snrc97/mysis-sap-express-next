const { BaseController } = require('./BaseController');
const userRepo = require('../repositories/UserRepository');
class UserController extends BaseController {
  constructor() {
    super(userRepo.repository);
  }
}

module.exports = new UserController();

