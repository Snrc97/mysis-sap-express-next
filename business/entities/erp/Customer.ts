import BaseEntity from '../BaseEntity';

export default interface Customer extends BaseEntity {
  address_id: number;
  first_name: string;
  last_name: string;
  created_at?: Date;
  updated_at?: Date;
}
