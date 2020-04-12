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
        items: [OrderItem]
    }
    type OrderItem {
        _id: ID
        product: Product
        quantity: Int
    }
    type Query {
        products: [Product]
        orders: [Order]
        product(_id: ID): Product
        order(_id: ID): Order
    }
    input ProductInput {
        name: String
        price: Float
        stock: Int
    }
    input OrderItemInput {
        product: ProductInput
        quantity: Int
    }
    type Mutation {
        createOrder(items: [OrderItemInput]): Order
        createProduct(name: String, price: Float, stock: Int): Product
    }
`);

module.exports = schema;