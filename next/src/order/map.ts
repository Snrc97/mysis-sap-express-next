import { ReusableFormProps } from '@/components/ui-reusables/reusable-form-element';
import { OrderStatus, OrderStatus_options } from '@/types/order';

  const table : ReusableFormProps[] = [

    {
      name: "order_number",
      label: "Sipariş Numarası",
      type: "input",
      elementType: "number",
    },
    {
      name: "customer_id",
      label: "Müşteri",
      type: "input",
      elementType: "number",
    },
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


  const detail : ReusableFormProps[] = [
    {
      name: "order_number",
      label: "Sipariş Numarası",
      type: "input",
      elementType: "number",
    },
    {
      name: "customer_id",
      label: "Müşteri",
      type: "select",
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
      label: "Gönderim Adresi",
      type: "select",
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
      type: "select",
    },
    {
      name: "payment_method_id",
      label: "Ödeme Yöntemi",
      type: "select",
    },
    {
      name: "order_date",
       label: "Sipariş Tarihi",
       type: "input",
       elementType: "datetime-local",
       format: "DD.MM.YYYY HH:mm",

    },
    {
      name: "status",
      label: "Durum",
      type: "select",
      options: OrderStatus_options,
    }
  ];


  export { table, detail }