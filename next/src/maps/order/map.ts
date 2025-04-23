import { ReusableFormProps } from '@/components/ui-reusables/reusable-form-element';
import ColumnMap from '@/types/ColumnMap';
import { OrderStatus, OrderStatus_options } from '@/types/order';

const labels = {
  order_number: trans('erp.order_number'),
  customer: trans('erp.customer'),
  order_date:  trans('erp.order_date'),
  status:  trans('common.status'),
}

const table: ReusableFormProps[] = [
  {
    name: 'order_number',
    label: labels.order_number,
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'customer_id',
    label: labels.customer,
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'order_date',
    label: labels.order_date,
    elementType: 'datetime-local',
    format: 'DD.MM.YYYY HH:mm',
    type: 'input',
  },
  {
    name: 'status',
    label: labels.status,
    type: 'select',
    options: OrderStatus_options,
  },
];

const create: ReusableFormProps[] = [
  {
    name: 'order_number',
    label: labels.order_number,
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'customer_id',
    label: 'Müşteri',
    type: 'select',
  },
  {
    name: 'total_amount',
    label: 'Toplam Tutar',
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'discount_amount',
    label: 'İndirim Tutarı',
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'tax_amount',
    label: 'Vergi Tutarı',
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'shipping_amount',
    label: 'Kargo Tutarı',
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'grand_total',
    label: 'Genel Tutar',
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'shipping_address_id',
    label: 'Gönderim Adresi',
    type: 'select',
  },
  {
    name: 'billing_address_id',
    label: 'Fatura Adresi',
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'shipping_method_id',
    label: 'Gönderim Yöntemi',
    type: 'select',
  },
  {
    name: 'payment_method_id',
    label: 'Ödeme Yöntemi',
    type: 'select',
  },
  {
    name: 'order_date',
    label: 'Sipariş Tarihi',
    type: 'input',
    elementType: 'datetime-local',
    format: 'DD.MM.YYYY HH:mm',
  },
  {
    name: 'notes',
    label: 'Notlar',
    type: 'input',
    elementType: 'text',
  },
  {
    name: 'status',
    label: 'Durum',
    type: 'select',
    options: OrderStatus_options,
  },
];

const columnMap: ColumnMap = new ColumnMap(
 {
  table,
  create
 }
);

export type OrderMapsType = {
  columnMap: ColumnMap;
};

const OrderMaps : OrderMapsType = {
  columnMap,
};

export default OrderMaps;
