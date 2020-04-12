import { GET_CURRENT_ORDER } from "../../queries";
import { v4 as uuidv4 } from 'uuid';

export default function addProductToCurrentOrderResolver(_, {product}, { cache }) {
    const {currentOrder} = cache.readQuery({
      query: GET_CURRENT_ORDER
    });
    const productFound = currentOrder.items.find((item) => item.product._id === product._id)
    var newItems;
    if(productFound){
      newItems = currentOrder.items.map(el => {
        if(el.product._id === product._id)
           return Object.assign({}, el, {quantity:el.quantity+1})
        return el
      });
    } else {
      const clonedObject = Object.assign({}, product)
      const newItem = Object.assign({}, {
        _id: uuidv4(),
        product: clonedObject, 
        quantity: 1,
        __typename: "OrderItem"
      })
      newItems = [ ...currentOrder.items, newItem];
    }
    const newCurrentOrder = Object.assign({}, currentOrder, {items: newItems})
    cache.writeQuery({ query: GET_CURRENT_ORDER, data: {currentOrder: newCurrentOrder}})
  }