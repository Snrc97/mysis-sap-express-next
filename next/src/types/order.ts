 enum OrderStatus {
  pending = 'Beklemede',
  accepted = 'Onaylandı',
  rejected = 'Reddedildi',
  draft = 'Taslak',
  confirmed = 'Onaylandı',
  processing = 'İşleniyor',
  shipped = 'Gönderildi',
  delivered = 'Teslim Edildi',
  cancelled = 'Iptal Edildi',
  returned = 'İade Edildi',
}

 const OrderStatus_options = Array.toPluckFromEnum(OrderStatus).map((x:any) => ({
  value: x.value,
  label: trans('erp.order_status_enum.' + x.value) || x.label,
}));

export { OrderStatus, OrderStatus_options };
