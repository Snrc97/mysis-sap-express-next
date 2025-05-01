import BaseController from './BaseController';
import { orderRepository } from '../repositories/OrderRepository';
import CustomerModel from '../models/CustomerModel';
import MarketItemModel from '../models/MarketItemModel';
import ItemModel from '../models/ItemModel';
import ProductModel from '../models/ProductModel';
import { userRepository } from '../repositories/UserRepository';
import UserModel from '../models/UserModel';
import CustomerRepository, { customerRepository } from '../repositories/CustomerRepository';

class OrderController extends BaseController {
  constructor() {
    super(orderRepository);
    this.includes = {
      index: [
        { model: CustomerModel, as: 'customer', include:['address', 'user'] },
        {
          model: MarketItemModel,
          as: 'market_item',
          include: [
            {
              model: ItemModel,
              as: 'item',
              include: [
                {
                  model: ProductModel,
                  as: 'product',
                },
              ],
            },
          ],
        },
      ],
    };
  }

  async store(req, res) {
    const user_id = req.user.id;
    const customer_id = await customerRepository.findById(user_id).then((data) => data.id);

    req.body.customer_id = customer_id;
    
    await super.store(req, res);
  }

  async update(req, res) {
    await this.repo
      .update(req.params.id, req.body)
      .then((data) => res.customJson({ data }))
      .catch((err) =>
        res.status(400).customJson({ success: false, msg: err.message })
      );
  }


  async pluck(req, res) {
    await this.repo

      .findAll({ include: this.includes.index })
      .then((data) => {
        return data.map((x: any) => {

          const specs = [
            x.customer?.first_name + ' ' + x.customer?.last_name,
            x.market_item?.item?.product?.name,
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

const orderController = new OrderController();
export default OrderController;
export { orderController };
