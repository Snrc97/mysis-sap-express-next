import CustomerModel from '../models/CustomerModel';
import BaseRepository from './BaseRepository';

class CustomerRepository extends BaseRepository {
  constructor() {
    super();
    this.model = CustomerModel;
    
  }
}
export default CustomerRepository;
