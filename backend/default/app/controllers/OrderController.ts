import BaseController from './BaseController';
import OrderRepository from '../repositories/OrderRepository';

class OrderController extends BaseController {
  constructor() {
    super(new OrderRepository());
  }
}

const orderController = new OrderController();
export default orderController;