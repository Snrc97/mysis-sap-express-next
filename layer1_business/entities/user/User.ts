import BaseEntity from '../BaseEntity';

export type UserStatus = 'not_verified' | 'verified' | 'banned';

export default interface User extends BaseEntity {

  role_id: number;
  username: string;
  email: string;
  password: string;
  phone_number?: string;
  status: UserStatus;
  last_login?: Date;
  created_at?: Date;
  updated_at?: Date;
    

}