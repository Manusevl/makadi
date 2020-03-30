const { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString, 
  GraphQLFloat, 
  GraphQLInt 
} = require('graphql');

const productType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    stock: { type: GraphQLInt }
  }
});

module.exports = { productType };