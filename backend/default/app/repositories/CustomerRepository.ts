import CustomerModel from '../models/CustomerModel';
import BaseRepository from './BaseRepository';

class CustomerRepository extends BaseRepository {
  constructor() {
    super();
    this.model = CustomerModel;
    
  }
}

const customerRepository = new CustomerRepository();
export default CustomerRepository;
export { customerRepository };
