
import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
query GetProducts {
    products {
        _id
        name
        price
        stock
        timesInCart @client
    }
}
`;

export const GET_CURRENT_ORDER = gql`
query GetCurrentOrder {
    currentOrder @client {
        _id
        items {
            _id
            name
            price
            stock
            quantity
        }
    }
}
`;

export const GET_PRODUCT = gql`
query GetProduct($_id: ID) {
    product(_id: $_id) {
        _id
        name
        price
        stock
        timesInCart @client
    }
}
`;
