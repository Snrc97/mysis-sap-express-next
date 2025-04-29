import BaseController from './BaseController';
import { orderRepository } from '../repositories/OrderRepository';
import CustomerModel from '../models/CustomerModel';
import MarketItemModel from '../models/MarketItemModel';

class OrderController extends BaseController {
  constructor() {
    super(orderRepository);
    this.includes = {
      index: [CustomerModel, MarketItemModel],
    };
  }
}

const orderController = new OrderController();
export default OrderController;
export { orderController };