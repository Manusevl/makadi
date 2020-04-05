import React from 'react'
import ProductGrid from './ProductGrid'
import OrderOverview from './OrderOverview'
import Header from '../Common/Header/Header'
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import './Order.css'

const GET_CURRENT_ORDER = gql`
  query {
    currentOrder @client{
      items {
        productId
        name
        price
        quantity
      }
    }
  }
`;

export default function Order() {

  const { data } = useQuery(GET_CURRENT_ORDER);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="orderOverview">
        <OrderOverview currentOrder={data.currentOrder.items}/>
      </div>
      <div className="productList">
        <ProductGrid currentOrder={data.currentOrder.items}/>
      </div>
    </div>
  )     
}

