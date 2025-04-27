import IEntity from '../IEntity';

export default interface Supplier extends IEntity {

    company_id: number; // supplier
    product_id: number; // supplying product
    created_at?: Date;
    updated_at?: Date;
    
   
}