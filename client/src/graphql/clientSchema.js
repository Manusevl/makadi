import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    currentOrder: Order
  }

  extend type Mutation {
    addProductToCurrentOrder(item: OrderItemInput): Order
  }
`;

export const resolvers = {};