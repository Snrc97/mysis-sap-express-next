import OrderModel from '../models/OrderModel';
import BaseRepository from './BaseRepository';

class OrderRepository extends BaseRepository {
  constructor() {
    super();
    this.model = new OrderModel();
    
  }
}
export default OrderRepository;
