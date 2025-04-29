 enum OrderStatus {
  pending = 'Beklemede',
  shipped = 'Kargoya Verildi',
  accepted = 'Onaylandı',
  rejected = 'Reddedildi',
  delivered = 'Teslim Edildi',
  cancelled = 'Iptal Edildi',
  returned = 'İade Edildi',
}

 const OrderStatus_options = Array.toPluckFromEnum(OrderStatus).map((x:any) => ({
  value: x.value,
  label: trans('erp.order_status_enum.' + x.value) || x.label,
}));

export { OrderStatus, OrderStatus_options };
