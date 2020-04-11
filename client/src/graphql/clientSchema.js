import gql from "graphql-tag";
import addProductToCurrentOrderResolver from "./resolvers/mutations/addProductToCurrentOrderResolver"
import removeProductFromCurrentOrderResolver from "./resolvers/mutations/removeProductFromCurrentOrderResolver"


export const typeDefs = gql`
  extend type Query {
    currentOrder: Order
  }

  extend type Mutation {
    addProductToCurrentOrder(product: Product): Product
    removeProductFromCurrentOrder(_id: ID): ID
  }

`;

export const resolvers = {
  Mutation: {
    addProductToCurrentOrder: addProductToCurrentOrderResolver,
    removeProductFromCurrentOrder: removeProductFromCurrentOrderResolver
  },

};