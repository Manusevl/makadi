const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { ProductsQuery } = require('./query/ProductsQuery');
const {
  CreateProductMutation,
  UpdateProductMutation,
  DeleteProductMutation
} = require('./mutation/ProductsMutation');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    products: ProductsQuery
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createProduct: CreateProductMutation,
    deleteProduct: DeleteProductMutation,
    updateProduct: UpdateProductMutation
  })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

module.exports = schema;