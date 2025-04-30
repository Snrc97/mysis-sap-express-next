'use client';
import MysisProvider from '@/components/context/MysisProvider';
import { ReusableFormProps } from '@/components/ui-reusables/reusable-form-element';
import ColumnMap from '@/types/ColumnMap';
import { OrderStatus, OrderStatus_options } from '@/types/order';
import { useContext } from 'react';

export type OrderMapsType = {
  columnMap: ColumnMap;
};

export const getColumnMap = () => {
  const labels = {
    order_number: trans('erp.order_number'),
    customer: trans('erp.customer'),
    market_item: trans('erp.market_item'),
    order_date: trans('erp.order_date'),
    status: trans('common.status'),
  };

  const table: ReusableFormProps[] = [
    {
      name: 'id',
      label: 'ID',
      type: 'input',
      elementType: 'number',
    },
    {
      name: 'customer_id',
      label: labels.customer,
      type: 'select',
      endpoint: 'customer',
      
    },
    {
      name: 'market_item_id',
      label: labels.market_item,
      type: 'select',
      endpoint: 'market-item',
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

  const create: ReusableFormProps[] = [
    {
      name: 'customer_id',
      label: labels.customer,
      type: 'select',
      endpoint: 'customer',
      
    },
    {
      name: 'market_item_id',
      label: labels.market_item,
      type: 'select',
      endpoint: 'market-item',
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

  const columnMap: ColumnMap = new ColumnMap({
    table,
    create,
  });

  const OrderMaps: OrderMapsType = {
    columnMap,
  };

  return OrderMaps;
};
