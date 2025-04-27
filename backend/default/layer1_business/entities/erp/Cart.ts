import IEntity from '../IEntity';

export default interface Cart extends IEntity {
  customer_id: number;
  sessionId: string;
  created_at?: Date;
  updated_at?: Date;

}