import BaseEntity from '../BaseEntity';

export default interface Brand extends BaseEntity {
  title: string;
  summary?: string;
  content?: string;
  created_at?: Date;
  updated_at?: Date;
}
