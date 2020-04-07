var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Product {
        _id: ID
        name: String
        price: Float
        stock: Int
    }
    type Order {
        _id: ID
        items: [Product]
    }
    type Query {
        products: [Product]
        orders: [Order]
        product(_id: ID): Product
        order(_id: ID!): Order
    }
    input OrderItemInput {
        _id: ID
        quantity: Int
    }
    type Mutation {
        createOrder(items: [OrderItemInput]): Order
    }
`);

module.exports = schema;