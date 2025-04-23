import BaseEntity from '../BaseEntity';

export default interface Order extends BaseEntity {

  order_number: number;
  customer_id: number;
  order_date?: Date;
  status?: string;
  total_amount?: number;
  discount_amount?: number;
  tax_amount?: number;
  shipping_amount?: number;
  grand_total?: number;
  shipping_address_id: number;
  billing_address_id: number;
  payment_method: string;
  payment_status?: string;
  notes?: string;
}