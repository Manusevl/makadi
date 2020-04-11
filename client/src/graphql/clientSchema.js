import gql from "graphql-tag";
import addProductToCurrentOrderResolver from "./resolvers/mutations/addProductToCurrentOrderResolver"
import removeProductFromCurrentOrderResolver from "./resolvers/mutations/removeProductFromCurrentOrderResolver"
import timesInCartResolver from "./resolvers/queries/timesInCartResolver"


export const typeDefs = gql`
  extend type Query {
    currentOrder: Order
  }

  extend type Mutation {
    addProductToCurrentOrder(product: Product): Product
    removeProductFromCurrentOrder(_id: ID): ID
  }

  extend type Product {
    timesInCart: Int
  }

`;

export const resolvers = {
  Product: {
    timesInCart: timesInCartResolver
  },
  Mutation: {
    addProductToCurrentOrder: addProductToCurrentOrderResolver,
    removeProductFromCurrentOrder: removeProductFromCurrentOrderResolver
  },

};