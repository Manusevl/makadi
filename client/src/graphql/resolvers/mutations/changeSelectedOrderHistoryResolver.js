import { GET_CURRENT_SELECTED_ORDER } from "../../queries";

export default function addProductToCurrentOrderResolver(_, {_id}, { cache }) {
    cache.writeQuery({ query: GET_CURRENT_SELECTED_ORDER, data: {selectedOrderHistory: _id}})
  }