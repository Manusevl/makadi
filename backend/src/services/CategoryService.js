const MongoDbRepo = require('../repository/mongoDbRepository');

class CategoryService {
  constructor() {
    this.CategoryRepository = new MongoDbRepo('Categories');
  }

  getAllCategories() {
    return this.CategoryRepository.getAll();
  }

  createCategory(opt) {
    return this.CategoryRepository.create(opt);
  }

}

module.exports = CategoryService;