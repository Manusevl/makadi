
/* eslint-disable no-unused-vars */
const { productType } = require('../productTypes');
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID
} = require('graphql');
const ProductService = require('../../services/ProductService');

const CreateProductMutation = {
  type: productType,
  args: {
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLInt }
  },
  resolve: async (_, { name, price, stock }) => {
    const productService = new ProductService();
    const newProduct = await productService.createProduct({ name, price, stock });

    return newProduct;
  }
};

const DeleteProductMutation = {
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const productService = new ProductService();
    const res = await productService.deleteProduct(_id);

    if (res.ok) {
      return _id;
    }
  }
};

const UpdateProductMutation = {
  type: productType,
  args: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLInt }
  },
  resolve: async (_, { _id, name, price, stock }) => {
    const productService = new ProductService();
    const updatedProduct = await productService.updateProduct(_id, { name, price, stock });

    return updatedProduct;
  }
};

module.exports = { CreateProductMutation, DeleteProductMutation, UpdateProductMutation };