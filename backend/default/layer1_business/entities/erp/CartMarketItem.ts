import IEntity from '../IEntity';

export default interface CartMarketItem extends IEntity {

    cart_id: number;
    market_item_id: number;
    quantity: number;
    unit_price: number;
    created_at?: Date;
    updated_at?: Date;
}