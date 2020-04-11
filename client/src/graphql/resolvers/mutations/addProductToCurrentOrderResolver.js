import { GET_CURRENT_ORDER } from "../../queries";

export default function addProductToCurrentOrderResolver(_, {product}, { cache }) {
    const {currentOrder} = cache.readQuery({
      query: GET_CURRENT_ORDER
    });
    const productFound = currentOrder.items.find((item) => item._id === product._id)
    if(productFound){
      var newData = currentOrder.items.map(el => {
        if(el._id === product._id)
           return Object.assign({}, el, {quantity:el.quantity+1})
        return el
      });
    } else {
      const newItem = Object.assign({}, product, {quantity: 1})
      newData = [ ...currentOrder.items, newItem];
    }
    cache.writeQuery({ query: GET_CURRENT_ORDER,    
      data: {
          currentOrder: {
            __typename: 'Order',
            _id:"currentOrder",
            items: newData
          }
        } 
      }
    )
  }