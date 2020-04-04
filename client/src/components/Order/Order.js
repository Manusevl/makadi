import React, { Component } from 'react'
import ProductList from './ProductGrid'
import OrderOverview from './OrderOverview'
import Header from '../Common/Header/Header'
import './Order.css'

class Order extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="orderOverview">
          <OrderOverview />
        </div>
        <div className="productList">
          <ProductList />
        </div>
      </div>
    )      
  }
}

export default Order
