const MongoDbRepo = require('../repository/mongoDbRepository');

class ProductService {
  constructor() {
    this.ProductRepository = new MongoDbRepo('Products');
  }

  getAllProducts() {
    return this.ProductRepository.getAll();
  }

  getProductContainingString(searchString) {
    return this.ProductRepository.getContainingString(searchString);
  }

  getAllProductsFromCategory(category) {
    return this.ProductRepository.getByCategory(category);
  }

  getProductById(_id) {
    return this.ProductRepository.geById(_id);
  }

  createProduct(opt) {
    return this.ProductRepository.create(opt);
  }

}

module.exports = ProductService;