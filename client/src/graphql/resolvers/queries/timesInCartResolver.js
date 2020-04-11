import { GET_CURRENT_ORDER } from "../../queries";

export default function(product, _, { cache }) {
    const queryResult = cache.readQuery({
      query: GET_CURRENT_ORDER
    });
    const productFound = queryResult.currentOrder.items.find((item) => item._id === product._id)
    if (productFound){
      return productFound.quantity;
    }
    return 0;
  }