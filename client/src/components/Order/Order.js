import React from 'react'
import ProductGrid from './ProductGrid'
import OrderOverview from './OrderOverview'
import Header from '../Common/Header/Header'
import {useQuery} from "@apollo/react-hooks";
import {GET_CURRENT_ORDER} from "../../graphql/queries"
import './Order.css'

export default function Order() {

  const { data, loading, error } = useQuery(GET_CURRENT_ORDER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

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

