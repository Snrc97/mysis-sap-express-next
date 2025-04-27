import BaseEntity from '../BaseEntity';

export default interface Cart extends BaseEntity {
  customer_id: number;
  sessionId: string;
  created_at?: Date;
  updated_at?: Date;

}