import IEntity from '../IEntity';

export default interface Brand extends IEntity {
  title: string;
  summary?: string;
  content?: string;
  created_at?: Date;
  updated_at?: Date;
}
