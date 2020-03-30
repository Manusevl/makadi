const MongoDbRepo = require('../repository/mongoDbRepository');

class ProductService {
  constructor() {
    this.ProductRepository = new MongoDbRepo('Products');
  }

  getAllProducts() {
    return this.ProductRepository.getAll();
  }

  updateProduct(_id, opt) {
    return this.ProductRepository.updateOne(_id, opt);
  }

  deleteProduct(_id) {
    return this.ProductRepository.deleteOne(_id);
  }

  createProduct(opt) {
    return this.ProductRepository.create(opt);
  }
}

module.exports = ProductService;