import BaseEntity from '../BaseEntity';

export default interface CartMarketItem extends BaseEntity {

    cart_id: number;
    market_item_id: number;
    quantity: number;
    unit_price: number;
    created_at?: Date;
    updated_at?: Date;
}