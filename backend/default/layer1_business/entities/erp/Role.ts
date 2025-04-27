import IEntity from '../IEntity';

export default interface Role extends IEntity {
  name: string;
  created_at?: Date;
  updated_at?: Date;
}
