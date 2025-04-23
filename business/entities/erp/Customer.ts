import BaseEntity from '../BaseEntity';

export default interface Customer extends BaseEntity {


    user_id: number;
    tax_number: string;
    tax_office: string;
    company_name: string;
    is_franchise: boolean;
    credit_limit: number;
    current_balance: number;
    discount_rate: number;
    min_order_amount: number;
    created_at?: Date;
    updated_at?: Date;
}