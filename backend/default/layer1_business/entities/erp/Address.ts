import IEntity from '../IEntity';

export default interface Address extends IEntity {

    district_id: number;
    title: string;
    contact_person: string;
    email: string;
    phone_number: string;
    postal_code?: string;
    address_line_1: string;
    address_line_2?: string;
    created_at?: Date;
    updated_at?: Date;

}