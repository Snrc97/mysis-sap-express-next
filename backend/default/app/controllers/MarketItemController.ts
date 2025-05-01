import BaseController from './BaseController';
import { marketItemRepository } from '../repositories/MarketItemRepository';
import ItemModel from '../models/ItemModel';
import ProductModel from '../models/ProductModel';
import BrandModel from '../models/BrandModel';
import CategoryModel from '../models/CategoryModel';
import CurrencyModel from '../models/CurrencyModel';

class MarketItemController extends BaseController {
  constructor() {
    super(marketItemRepository);
    this.attributes = ['id', 'market_id', 'image', 'price', 'quantity', 'content', 'created_at'],
    this.includes = {
      index: [
        {
          model: CurrencyModel,
          as: 'currency',
          attributes: ['id', 'Symbol'],
        },
        { model: ItemModel,
          as: 'item',
          attributes: ['id', 'serial_number', 'sku', 'barcode','created_at', 'expiration_date'],
          include: [
            { 
              model: ProductModel, 
              as : 'product', 
              attributes: ['id', 'name', 'description'],
              include: [
                {
                  model: BrandModel,
                  as: 'brand',
                  attributes: ['id', 'title'],
                }, {
                  model: CategoryModel,
                  as: 'category',
                  attributes: ['id', 'title'],
                }
              ]
            },
          ]
        },
      ],
    };
  }

  async pluck(req, res) {
    await this.repo

      .findAll({ include: this.includes.index })
      .then((data) => {
        return data.map((x: any) => {

          return {
            value: x.id,
            label: x.item?.product?.name,
          };
        });
      })
      .then((data) => res.customJson({ data: data }))
      .catch((err) =>
        res.status(500).customJson({ success: false, msg: err.message })
      );
  }
}

const marketItemController = new MarketItemController();
export default MarketItemController;
export { marketItemController };
