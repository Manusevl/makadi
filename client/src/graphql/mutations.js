import gql from "graphql-tag";

export const ADD_PRODUCT_TO_ORDER = gql`
mutation AddProductToOrder($product: Product) {
    addProductToCurrentOrder(product: $product) @client {
        _id
    }
}
`;

export const REMOVE_PRODUCT_FROM_ORDER = gql`
mutation RemoveProductFromOrder($_id: ID) {
    removeProductFromCurrentOrder(_id: $_id) @client {
        _id
    }
}
`;

export const CREATE_ORDER = gql`
mutation CreateOrder($items: [OrderItemInput]) {
    createOrder(items: $items) {
        _id
    }
}
`;