var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Product {
        _id: ID
        name: String
        price: Float
        stock: Int
        categories: [ID]
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
    type Category {
        _id: ID
        name: String
    }
    type Query {
        products: [Product]
        productsFromCategory(category: ID): [Product]
        productsContainingString(searchString: String): [Product]
        orders: [Order]
        categories: [Category]
        product(_id: ID): Product
        order(_id: ID): Order
    }
    input ProductInput {
        _id: ID
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
        createCategory(name: String): Category
    }
`);

module.exports = schema;