import OrderModel from '../models/OrderModel';
import BaseRepository from './BaseRepository';

class OrderRepository extends BaseRepository {
  constructor() {
    super();
    this.model = OrderModel;
    
  }
}

const orderRepository = new OrderRepository();
export default OrderRepository;
export { orderRepository };