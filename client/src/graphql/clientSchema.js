import gql from "graphql-tag";
import { GET_CURRENT_ORDER } from "./queries";


export const typeDefs = gql`
  extend type Query {
    currentOrder: Order
  }

  extend type Mutation {
    addProductToCurrentOrder(product: Product): Product
  }

  extend type Product {
    timesInCart: Int
  }

`;

export const resolvers = {
  Product: {
    timesInCart: (product, _, { cache }) => {
      const queryResult = cache.readQuery({
        query: GET_CURRENT_ORDER
      });
      const productFound = queryResult.currentOrder.items.find((item) => item._id === product._id)
      if (productFound){
        return productFound.quantity;
      }
      return 0;
    }
  },
  Mutation: {
    addProductToCurrentOrder: (_, {product}, { cache, getCacheKey }) => {
      const queryResult = cache.readQuery({
        query: GET_CURRENT_ORDER
      });
      const id = getCacheKey({ __typename: 'Order', _id: "order1" })
      const productFound = queryResult.currentOrder.items.find((item) => item._id === product._id)
      if(productFound){
        var newData = queryResult.currentOrder.items.map(el => {
          if(el._id === product._id)
             return Object.assign({}, el, {quantity:el.quantity+1})
          return el
        });
      } else {
        const newItem = {_id: product._id, quantity: 1}
        newData = [ ...queryResult.currentOrder.items, newItem];
      }
      console.log(newData);
      // cache.writeData({ id,
      //   data: {
      //     currentOrder: {
      //       __typename: 'Order',
      //       _id:"order1",
      //       items: newData
      //     }
      //   }
      // })
      cache.writeQuery({ query: GET_CURRENT_ORDER,    
        data: {
            currentOrder: {
              __typename: 'Order',
              _id:"order1",
              items: newData
            }
          } 
        }
      )
    },
  },

};