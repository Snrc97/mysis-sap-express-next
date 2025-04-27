import IEntity from '../IEntity';

export default interface Item extends IEntity {
  product_id: number;
  serial_number: string;
  sku: string;
  barcode: string;
  expiration_date?: Date;
  created_at?: Date;
  updated_at?: Date;


}