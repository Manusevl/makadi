import { GET_CURRENT_ORDER } from "../../queries";

export default function addProductToCurrentOrderResolver(_, {product}, { cache }) {
    const {currentOrder} = cache.readQuery({
      query: GET_CURRENT_ORDER
    });
    const productFound = currentOrder.items.find((item) => item.product._id === product._id)
    if(productFound){
      var newData = currentOrder.items.map(el => {
        if(el.product._id === product._id)
           return Object.assign({}, el, {quantity:el.quantity+1})
        return el
      });
    } else {
      const newProduct = Object.assign({}, product)
      const newItem = Object.assign({}, {
        product: newProduct, 
        quantity: 1,
        __typename: "OrderItem"
      })
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