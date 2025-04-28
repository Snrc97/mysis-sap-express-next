import BaseController from './BaseController';
import { customerRepository } from '../repositories/CustomerRepository';

class CustomerController extends BaseController {
  constructor() {
    super(customerRepository);
  }
}

const customerController = new CustomerController();
export default CustomerController;
export { customerController };