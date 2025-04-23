'use client'

import "@/styles/globals.css";
import Datatable, { DataTableActionProps } from "@/components/ui-reusables/datatable";
import PageContainer from "@/components/layout/page-container";
import { ReusableFormProps } from "@/components/ui-reusables/reusable-form-element";
import { Metadata } from "next";
import * as dotenv from "dotenv";
import { OrderEntity } from '@/../../backend/default/app/models/OrderModel';
import { OrderStatus, OrderStatus_options } from '@/types/order';





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

  

  const columnMapping: ReusableFormProps[] = [
    {
      name: "id",
      label: "Sipariş No",
      type: "input",
      elementType: "number",
      disabled: true,
    },
    // {
    //   name: "payment_method_id",
    //   label: "Ödeme Yöntemi ID",
    //   type: "input",
    //   elementType: "number",
    // },
    {
      name: "created_at",
      label: "Oluşturulma Tarihi",
      elementType: "datetime-local",
      format: "DD.MM.YYYY HH:mm",
      type: "input",
    },
    {
      name: "updated_at",
      label: "Güncellenme Tarihi",
      elementType: "datetime-local",
      format: "DD.MM.YYYY HH:mm",
      type: "input",
    },
    // {
    //   name: "deleted_at",
    //   label: "Silinme Tarihi",
    //   elementType: "datetime-local",
    //   format: "DD.MM.YYYY HH:mm",
    //   type: "input",
    // },
    {
      name: "order_date",
       label: "Sipariş Tarihi",
       elementType: "datetime-local",
       format: "DD.MM.YYYY HH:mm",
       type: "input",
    },
    {
      name: "status",
      label: "Durum",
      type: "select",
      options: OrderStatus_options,
    }
  ];

  const detailColumnMapping : ReusableFormProps[] = [
    {
      name: "customer_id",
      label: "Müşteri ID",
      type: "input",
      elementType: "number",
    },
    {
      name: "order_number",
      label: "Sipariş Numarası",
      type: "input",
      elementType: "number",
    },
    {
      name: "total_amount",
      label: "Toplam Tutar",
      type: "input",
      elementType: "number",
    },
    {
      name: "discount_amount",
      label: "İndirim Tutarı",
      type: "input",
      elementType: "number",
    },
    {
      name: "tax_amount",
      label: "Vergi Tutarı",
      type: "input",
      elementType: "number",
    },
    {
      name: "shipping_amount",
      label: "Kargo Tutarı",
      type: "input",
      elementType: "number",
    },
    {
      name: "grand_total",
      label: "Genel Tutar",
      type: "input",
      elementType: "number",
    },
    {
      name: "shipping_address_id",
      label: "Gönderim Adresi ID",
      type: "input",
      elementType: "number",
    },
    {
      name: "billing_address_id",
      label: "Fatura Adresi",
      type: "input",
      elementType: "number",
    },
    {
      name: "shipping_method_id",
      label: "Gönderim Yöntemi",
      type: "input",
      elementType: "number",
    },
    // {
    //   name: "payment_method_id",
    //   label: "Ödeme Yöntemi ID",
    //   type: "input",
    //   elementType: "number",
    // },
    {
      name: "order_date",
       label: "Sipariş Tarihi",
       elementType: "datetime-local",
       format: "DD.MM.YYYY HH:mm",
       type: "input",
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
    

  const endpoint = "order";

  return (

    <PageContainer title="Siparişler">
   
      <Datatable url={endpoint} rows={[]} actions={actions} columns={columnMapping} />
    </PageContainer>

  );
};

export default Orders;
