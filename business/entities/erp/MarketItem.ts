import BaseEntity from '../BaseEntity';

export default interface MarketItem extends BaseEntity {

  market_id: number;
  item_id: number;
  price: number;
  quantity: number;
  content: string;
  created_at?: Date;
  updated_at?: Date;

}