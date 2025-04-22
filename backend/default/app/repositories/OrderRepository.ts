import OrderModel from '../models/OrderModel';
import BaseRepository from './BaseRepository';

class OrderRepository extends BaseRepository {
  constructor() {
    super();
    this.model = OrderModel;
    
  }
}
export default OrderRepository;
