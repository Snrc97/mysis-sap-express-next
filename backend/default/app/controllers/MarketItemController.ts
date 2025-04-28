import BaseController from './BaseController';
import { marketItemRepository } from '../repositories/MarketItemRepository';

class MarketItemController extends BaseController {
  constructor() {
    super(marketItemRepository);
  }
}

const marketItemController = new MarketItemController();
export default MarketItemController;
export { marketItemController };