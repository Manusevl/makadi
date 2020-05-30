import gql from "graphql-tag";
import addProductToCurrentOrderResolver from "./resolvers/mutations/addProductToCurrentOrderResolver"
import removeProductFromCurrentOrderResolver from "./resolvers/mutations/removeProductFromCurrentOrderResolver"
import changeSelectedOrderHistoryResolver from "./resolvers/mutations/changeSelectedOrderHistoryResolver"


export const typeDefs = gql`
  extend type Query {
    currentOrder: Order
    selectedOrderHistory: ID
    selectedCategory: ID
  }

  extend type Mutation {
    addProductToCurrentOrder(product: Product): Product
    removeProductFromCurrentOrder(_id: ID): ID
    changeSelectedOrderHistory(_id: ID): ID
  }

`;

export const resolvers = {
  Mutation: {
    changeSelectedOrderHistory: changeSelectedOrderHistoryResolver,
    addProductToCurrentOrder: addProductToCurrentOrderResolver,
    removeProductFromCurrentOrder: removeProductFromCurrentOrderResolver
  },

};