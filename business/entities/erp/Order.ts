import BaseEntity from '../BaseEntity';

export type OrderStatus = 'pending' | 'shipped' | 'completed' | 'cancelled';

export default interface Order extends BaseEntity {
  customer_id: number;
  product_id: number;
  quantity: number;
  status?: OrderStatus;
  created_at?: Date;
  updated_at?: Date;
}