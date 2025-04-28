import BaseController from './BaseController';
import { marketRepository } from '../repositories/MarketRepository';

class MarketController extends BaseController {
  constructor() {
    super(marketRepository);
  }
}

const marketController = new MarketController();
export default MarketController;
export { marketController };