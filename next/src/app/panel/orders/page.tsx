'use client'

import "@/styles/globals.css";
import { DataTableActionProps } from "@/components/ui-reusables/datatable";
const Datatable = dynamic(() => import("@/components/ui-reusables/datatable"), { ssr: false });
import PageContainer from "@/components/layout/page-container";
import ColumnMap from '@/types/ColumnMap';
import dynamic from 'next/dynamic';
import OrderMaps, { OrderMapsType } from '@/maps/order/map';



function Orders() {

  const actions: DataTableActionProps = {
    createable: true,
    showable: true,
    updateable: true,
    deleteable: true,
  };




  const columnMap: ColumnMap = OrderMaps.columnMap;

  const endpoint = "order";

  return (

    <PageContainer title="Siparişler">

      <Datatable url={endpoint} rows={[]} actions={actions} columns={columnMap.table} columnMap={columnMap} />
    </PageContainer>

  );
}

export default Orders;
