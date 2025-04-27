import IEntity from '../IEntity';

export default interface Warehouse extends IEntity {

    address_id: number;
    name: string;
    capacity: number;
    created_at?: Date;
    updated_at?: Date;
    

}