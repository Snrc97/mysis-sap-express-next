import IViewModel from '../IViewModel'

export interface MarketItemListViewModel extends IViewModel {

    id: number;
    market_id: number;
    price: number;
    quantity: number;
    content: string;
    currency?: {
        id: number;
        Symbol: string;
    };
    image?:string;
    item: {
        id: number;
        serial_number: string;
        sku: string;
        barcode: string;
        created_at: Date;
        expiration_date: Date;
        product: {
            id: number;
            name: string;
            description: string;
            brand: {
                id: number;
                title: string;
            };
            category: {
                id: number;
                title: string;
            };
        };
    }
}

export interface CartMarketItemListViewModel extends MarketItemListViewModel {
    cart_quantity: number;
}