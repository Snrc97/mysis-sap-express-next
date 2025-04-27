import BaseEntity from '../BaseEntity';

export default interface Supplier extends BaseEntity {

    company_id: number; // supplier
    product_id: number; // supplying product
    created_at?: Date;
    updated_at?: Date;
    
   
}