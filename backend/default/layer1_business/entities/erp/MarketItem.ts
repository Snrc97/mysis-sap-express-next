import IEntity from '../IEntity';

export default interface MarketItem extends IEntity {

  market_id: number;
  item_id: number;
  currency_id?: number;
  image?: string;
  price: number;
  quantity: number;
  content: string;
  created_at?: Date;
  updated_at?: Date;

}