import BaseEntity from '../BaseEntity';

export default interface Product extends BaseEntity {

    category_id: number;
    brand_id: number;
    name: string;
    description?: string;
    created_at?: Date;
    updated_at?: Date;

}