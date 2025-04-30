import IEntity from '../IEntity';

export type OrderStatus = 'pending' | 'shipped' | 'completed' | 'cancelled';

export default interface Order extends IEntity {
  customer_id: number;
  market_item_id: number;
  quantity?: number;
  status?: OrderStatus;
  created_at?: Date;
  updated_at?: Date;
}