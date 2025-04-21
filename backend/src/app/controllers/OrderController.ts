import BaseController from './BaseController';
import OrderRepository from '../repositories/OrderRepository';

namespace App.Controllers {
  export class OrderController extends BaseController {
    constructor() {
      super(new OrderRepository());
    }
  }
}

export default App.Controllers.OrderController;