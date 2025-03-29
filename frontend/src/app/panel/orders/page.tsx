
'use client'
import "@/styles/globals.css";
import Datatable, { DataTableActionProps } from "@/components/ui-reusables/datatable";
import PageContainer from "@/components/layout/page-container";
import { ReusableFormProps } from "@/components/ui-reusables/reusable-form-element";
import { Metadata } from "next";
import * as dotenv from "dotenv";

enum OrderStatus {
  PENDING = "Beklemede",
  ACCEPTED = "Onaylandı",
  REJECTED = "Reddedildi",

}

interface OrderModel {
  id: number;
  bid_id?: number;
  order_date?: string;
  status?: OrderStatus;
}


const Orders: React.FC = () => {

  const actions: DataTableActionProps = {
    createable: true,
    showable: true,
    updateable: true,
    deleteable: true,
}

  const data : OrderModel[] = [
    // {
    //   id: 1,
    //   order_date: "2024-10-10",
    //   status: OrderStatus.PENDING,
    // },
   
  ];

  const columnMapping: ReusableFormProps[] = [
    {
      name: "order_date",
       label: "Sipariş Tarihi",
       inputType: "datetime-local",  
    },
    {
      name: "status",
      label: "Durum",
      type: "select",
      options: [
        { value: OrderStatus.PENDING, label: "Beklemede" },
        { value: OrderStatus.ACCEPTED, label: "Onaylandı" },
        { value: OrderStatus.REJECTED, label: "Reddedildi" },
      ],
    }
  ];

  const endpoint = "orders";

  return (

    <PageContainer title="Siparişler">
   
      <Datatable url={endpoint} rows={[]} actions={actions} columns={columnMapping} />
    </PageContainer>

  );
};

export default Orders;
