const { BaseController } = require('./BaseController');
const orderRepo = require('../repositories/OrderRepository');
class OrderController extends BaseController {
  constructor() {
    super(orderRepo.repository);
  }
}

const controller = new OrderController();

module.exports = { controller }

