import BaseController from './BaseController';
import OrderRepository from '../repositories/OrderRepository';
import OrderModel from '../models/OrderModel';

class OrderController extends BaseController<OrderModel> {
  constructor() {
    super();
    this.repo = new OrderRepository();
    console.log(this.repo);
  }
}

export default OrderController;