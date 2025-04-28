import MarketItemModel from '../models/MarketItemModel';
import BaseRepository from './BaseRepository';

class MarketItemRepository extends BaseRepository {
  constructor() {
    super();
    this.model = MarketItemModel;
    
  }
}

const marketItemRepository = new MarketItemRepository();
export default MarketItemRepository;
export { marketItemRepository };