import BaseController from './BaseController';
import { customerRepository } from '../repositories/CustomerRepository';

class CustomerController extends BaseController {
  constructor() {
    super(customerRepository);
  }

  async pluck(req, res) {
    await this.repo

      .findAll({ include: this.includes.index })
      .then((data) => {
        return data.map((x: any) => {

          const specs = [
            x.first_name + ' ' + x.last_name,
          ]

          return {
            value: x.id,
            label: specs.join('   -   '),
          };
        });
      })
      .then((data) => res.customJson({ data: data }))
      .catch((err) =>
        res.status(500).customJson({ success: false, msg: err.message })
      );
  }
}

const customerController = new CustomerController();
export default CustomerController;
export { customerController };