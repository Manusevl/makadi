import { GET_CURRENT_ORDER } from "../../queries";

export default function removeProductFromCurrentOrderResolver(_, {_id}, { cache }) {
    const {currentOrder} = cache.readQuery({
      query: GET_CURRENT_ORDER
    });
    var newItems = currentOrder.items.filter((item) => {
      return item._id !== _id
    });
    cache.writeQuery({ query: GET_CURRENT_ORDER,    
      data: {
          currentOrder: {
            __typename: 'Order',
            _id:"currentOrder",
            items: newItems
          }
        } 
      }
    )
  }