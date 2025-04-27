import BaseEntity from '../BaseEntity';

export default interface Warehouse extends BaseEntity {

    address_id: number;
    name: string;
    capacity: number;
    created_at?: Date;
    updated_at?: Date;
    

}