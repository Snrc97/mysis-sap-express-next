import IEntity from '../IEntity';

export default interface Company extends IEntity {
  address_id: number;
  name: string;
  tax_number: string;
  tax_office: string;
  created_at?: Date;
  updated_at?: Date;
}
