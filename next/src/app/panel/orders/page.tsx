'use client'

import "@/styles/globals.css";
import { DataTableActionProps } from "@/components/ui-reusables/datatable";
import Datatable from '@/components/ui-reusables/datatable';
import PageContainer from "@/components/layout/page-container";
import ColumnMap from '@/types/ColumnMap';
import OrderMaps, { OrderMapsType } from '@/maps/order/map';
import { useEffect, useState } from 'react';

function Orders() {

  const actions: DataTableActionProps = {
    createable: true,
    showable: true,
    updateable: true,
    deleteable: true,
  };

  const [columnMap, setColumnMap] = useState<ColumnMap>(OrderMaps.columnMap);


  const endpoint = "order";

  return (

    <PageContainer title="Siparişler">

      <Datatable url={endpoint} rows={[]} actions={actions} columns={columnMap.table} columnMap={columnMap} />
    </PageContainer>

  );
}

export default Orders;
