import IEntity from '../IEntity';

export default interface Product extends IEntity {

    category_id: number;
    brand_id: number;
    name: string;
    description?: string;
    created_at?: Date;
    updated_at?: Date;

}