 enum OrderStatus {
  pending = 'Beklemede',
  accepted = 'Onaylandı',
  shipped = 'Kargoya Verildi',
  delivered = 'Teslim Edildi',
  returned = 'İade Edildi',
  cancelled = 'Iptal Edildi',
  rejected = 'Reddedildi',
}

 const OrderStatus_options = Array.toPluckFromEnum(OrderStatus).map((x:any) => ({
  value: x.value,
  label: trans('erp.order_status_enum.' + x.value) || x.label,
}));

export { OrderStatus, OrderStatus_options };
