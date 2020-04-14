const MongoDbRepo = require('../repository/mongoDbRepository');

class OrderService {
  constructor() {
    this.OrderRepository = new MongoDbRepo('Orders');
  }

  getAllOrders() {
    return this.OrderRepository.getAll();
  }

  getOrderById(_id) {
    return this.OrderRepository.geById(_id);
  }

  createOrder(opt) {
    return this.OrderRepository.create(opt);
  }
}

module.exports = OrderService;