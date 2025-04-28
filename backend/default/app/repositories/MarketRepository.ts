import MarketModel from '../models/MarketModel';
import BaseRepository from './BaseRepository';

class MarketRepository extends BaseRepository {
  constructor() {
    super();
    this.model = MarketModel;
    
  }
}

const marketRepository = new MarketRepository();
export default MarketRepository;
export { marketRepository };