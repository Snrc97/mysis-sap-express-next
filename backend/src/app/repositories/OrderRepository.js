class OrderRepository extends BaseRepository {
  constructor(model) {
    const model = require('../models/OrderModel');
    super(model);
  }


}

const repository = new OrderRepository();

module.exports = { repository };
