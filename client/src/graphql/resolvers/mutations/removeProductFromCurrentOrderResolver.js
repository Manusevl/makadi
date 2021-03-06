import { GET_CURRENT_ORDER } from "../../queries";

export default function removeProductFromCurrentOrderResolver(_, {_id}, { cache }) {
    const {currentOrder} = cache.readQuery({
      query: GET_CURRENT_ORDER
    });
    var newItems = currentOrder.items.filter((item) => {
      return item.product._id !== _id
    });
    console.log(newItems)
    const newCurrentOrder = Object.assign({}, currentOrder, {items: newItems})
    console.log(newCurrentOrder)
    cache.writeQuery({ query: GET_CURRENT_ORDER, data: {currentOrder: newCurrentOrder} })
  }