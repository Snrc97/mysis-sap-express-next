"use client"
import { ReusableFormProps } from '@/components/ui-reusables/reusable-form-element';
import ColumnMap from '@/types/ColumnMap';
import { OrderStatus, OrderStatus_options } from '@/types/order';

const labels = {
  order_number: trans('erp.order_number'),
  customer: trans('erp.customer'),
  market_item: trans('erp.market_item'),
  order_date:  trans('erp.order_date'),
  status:  trans('common.status'),
}

const table: ReusableFormProps[] = [
  {
    name: 'id',
    label: "ID",
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
    name: 'market_item_id',
    label: labels.market_item,
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'status',
    label: labels.status,
    type: 'select',
    options: OrderStatus_options,
  },
  {
    name: 'created_at',
    label: labels.order_date,
    elementType: 'datetime-local',
    format: 'DD.MM.YYYY HH:mm',
    type: 'input',
  }

];

const create: ReusableFormProps[] = [
  {
    name: 'customer_id',
    label: labels.customer,
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'market_item_id',
    label: labels.market_item,
    type: 'input',
    elementType: 'number',
  },
  {
    name: 'status',
    label: labels.status,
    type: 'select',
    options: OrderStatus_options,
  },
  {
    name: 'created_at',
    label: labels.order_date,
    elementType: 'datetime-local',
    format: 'DD.MM.YYYY HH:mm',
    type: 'input',
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
