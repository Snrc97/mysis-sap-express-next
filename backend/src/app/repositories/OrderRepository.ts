import BaseRepository from './BaseRepository';
import OrderModel from '../models/OrderModel';

namespace App.Repositories {
  export class OrderRepository extends BaseRepository<typeof OrderModel> {
    constructor() {
      super();
    }
  }
}
export default App.Repositories.OrderRepository;
