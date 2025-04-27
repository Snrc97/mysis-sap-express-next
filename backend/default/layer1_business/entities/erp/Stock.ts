import IEntity from '../IEntity';

export default interface Stock extends IEntity {
  item_id: number;
  warehouse_id: number;
  quantity: number;
  reserved_quantity: number;
  is_unlimited_quantity: boolean;
  created_at?: Date;
  updated_at?: Date;

}