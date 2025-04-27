import IEntity from '../IEntity';

export default interface Customer extends IEntity {
  address_id: number;
  first_name: string;
  last_name: string;
  created_at?: Date;
  updated_at?: Date;
}
