const { productType } = require('../productTypes');
const { GraphQLList } = require('graphql');
const ProductService = require('../../services/ProductService');

const ProductsQuery = {
  type: GraphQLList(productType),
  args: {},
  resolve: async () => {
    const productService = new ProductService();
    const products = await productService.getAllProducts();

    return products;
  }
};

module.exports = { ProductsQuery };