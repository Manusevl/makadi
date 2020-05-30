
import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
query GetProducts {
    products {
        _id
        name
        price
        stock
    }
}
`;

export const GET_CATEGORIES = gql`
query GetCategories {
    categories {
        _id
        name
    }
}
`;

export const GET_ORDERS = gql`
query GetOrders {
    orders {
        _id
        items {
            product {
                name
                price
                stock
            }
            quantity
        }
    }
}
`;

export const GET_CURRENT_ORDER = gql`
query GetCurrentOrder {
    currentOrder @client {
        _id
        items {
            _id
            product {
                _id
                name
                price
                stock
            }
            quantity
        }
    }
}
`;

export const GET_CURRENT_SELECTED_ORDER = gql`
query GetCurrentOrderSelectedOrder {
    selectedOrderHistory @client
}
`;

export const GET_PRODUCT = gql`
query GetProduct($_id: ID) {
    product(_id: $_id) {
        _id
        name
        price
        stock
    }
}
`;

export const GET_ORDER_BY_ID = gql`
query GetOrder($_id: ID) {
    order(_id: $_id) {
        _id
        items {
            product{
                _id
                name
                price
                stock
            }
            quantity
        }
    }
}
`;
