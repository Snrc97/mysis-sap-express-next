
enum OrderStatus {
    PENDING = "Beklemede",
    ACCEPTED = "Onaylandı",
    REJECTED = "Reddedildi",
  
  }

  const OrderStatus_options = Array.toPluckFromEnum(OrderStatus);

  export { OrderStatus,OrderStatus_options };