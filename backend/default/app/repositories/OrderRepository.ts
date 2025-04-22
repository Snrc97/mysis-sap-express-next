import BaseRepository from './BaseRepository';
import OrderModel from '../models/OrderModel';

class OrderRepository extends BaseRepository<OrderModel> {
  constructor() {
    super();
    this.model = new OrderModel();
  }
}
export default OrderRepository;
