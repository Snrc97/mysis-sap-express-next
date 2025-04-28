import BaseController from './BaseController';
import { orderRepository } from '../repositories/OrderRepository';

class OrderController extends BaseController {
  constructor() {
    super(orderRepository);
  }
}

const orderController = new OrderController();
export default OrderController;
export { orderController };