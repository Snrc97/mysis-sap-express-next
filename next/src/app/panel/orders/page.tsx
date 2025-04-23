'use client'

import "@/styles/globals.css";
import Datatable, { DataTableActionProps } from "@/components/ui-reusables/datatable";
import PageContainer from "@/components/layout/page-container";
import { ReusableFormProps } from "@/components/ui-reusables/reusable-form-element";
import { Metadata } from "next";
import * as dotenv from "dotenv";
import { OrderEntity } from '@/../../backend/default/app/models/OrderModel';
import { OrderStatus, OrderStatus_options } from '@/types/order';
import * as OrderMaps from "@/maps/order/map";
import ColumnMap from '@/types/ColumnMap';





const Orders: React.FC = () => {

  const actions: DataTableActionProps = {
    createable: true,
    showable: true,
    updateable: true,
    deleteable: true,
}

  const data : OrderEntity[] = [
    // {
    //   id: 1,
    //   order_date: "2024-10-10",
    //   status: OrderStatus.PENDING,
    // },
   
  ];

  

  const columnMap : ColumnMap = OrderMaps.columnMap

  const endpoint = "order";

  return (

    <PageContainer title="Siparişler">
   
      <Datatable url={endpoint} rows={[]} actions={actions} columns={columnMap.table} columnMap = {columnMap} />
    </PageContainer>

  );
};

export default Orders;
