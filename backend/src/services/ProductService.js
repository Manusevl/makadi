const MongoDbRepo = require('../repository/mongoDbRepository');

class ProductService {
  constructor() {
    this.ProductRepository = new MongoDbRepo('Products');
  }

  getAllProducts() {
    return this.ProductRepository.getAll();
  }

  getProductById(_id) {
    return this.ProductRepository.geById(_id);
  }

}

module.exports = ProductService;