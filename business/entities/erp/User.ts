import BaseEntity from '../BaseEntity';

export default interface User extends BaseEntity {

    username: string;
    password: string;
    email: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    is_active?: boolean;
    last_login?: Date;
}