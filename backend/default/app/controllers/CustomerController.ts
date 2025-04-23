import BaseController from './BaseController';
import CustomerRepository from '../repositories/CustomerRepository';

class CustomerController extends BaseController {
  constructor() {
    super(new CustomerRepository());
  }
}

const customerController = new CustomerController();
export default CustomerController;
export { customerController };