import React from 'react'
import OrderGrid from './OrderGrid'
import OrderOverview from './OrderOverview'
import Header from '../Common/Header/Header'
import '../Common/Header/Header.css'

export default function OrderHistory() {
  
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="orderOverview">
        <OrderOverview/>
      </div>
      <div className="orderGrid">
        <OrderGrid/>
      </div>
    </div>
  )     
}

