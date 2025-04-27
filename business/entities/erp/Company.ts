import BaseEntity from '../BaseEntity';

export default interface Company extends BaseEntity {
  address_id: number;
  name: string;
  tax_number: string;
  tax_office: string;
  created_at?: Date;
  updated_at?: Date;
}
