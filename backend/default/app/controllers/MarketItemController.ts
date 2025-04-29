import BaseController from './BaseController';
import { marketItemRepository } from '../repositories/MarketItemRepository';
import ItemModel from '../models/ItemModel';
import ProductModel from '../models/ProductModel';
import BrandModel from '../models/BrandModel';
import CategoryModel from '../models/CategoryModel';

class MarketItemController extends BaseController {
  constructor() {
    super(marketItemRepository);
    this.attributes = ['id', 'market_id', 'price', 'quantity', 'content', 'created_at'],
    this.includes = {
      index: [
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


}

const marketItemController = new MarketItemController();
export default MarketItemController;
export { marketItemController };
