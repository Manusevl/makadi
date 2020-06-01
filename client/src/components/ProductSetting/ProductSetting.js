import React from 'react'
import Header from '../Common/Header/Header'
import NoSelection from './NoSelection'
import './ProductSetting.css'

export default function ProductSetting() {
  
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="product-settings">
        <NoSelection/>
      </div>
      <div className="product-overview">
        
      </div>
      <div className="product-category">
        
      </div>
    </div>
  )     
}