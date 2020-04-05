const MongoDbRepo = require('../repository/mongoDbRepository');

class OrderService {
  constructor() {
    this.OrderRepository = new MongoDbRepo('Orders');
  }

  getAllOrders() {
    return this.OrderRepository.getAll();
  }

  createOrder(opt) {
    return this.OrderRepository.create(opt);
  }
}

module.exports = OrderService;