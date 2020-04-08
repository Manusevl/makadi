import gql from "graphql-tag";

export const ADD_PRODUCT_TO_ORDER = gql`
mutation AddProductToOrder($product: Product) {
    addProductToCurrentOrder(product: $product) @client {
        _id
    }
}
`;
