const { BaseController } = require('./BaseController');

class OrderController extends BaseController {
  constructor() {
    super();
  }
}

const controller = new OrderController();

module.exports = { controller }

