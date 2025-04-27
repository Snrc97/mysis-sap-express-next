import BaseEntity from '../BaseEntity';

export default interface Role extends BaseEntity {
  name: string;
  created_at?: Date;
  updated_at?: Date;
}
