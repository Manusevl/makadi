import React from 'react'
import Header from '../Common/Header/Header'
import NoSelection from './common/NoSelection'
import ProductOverview from './ProductOverview/ProductOverview'
import CreateNewProduct from './Dialog/CreateNewProduct'
import './ProductSetting.css'

export default function ProductSetting() {
  
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="product-setting-wrapper">
        <div className="product-settings">
          <NoSelection/>
        </div>
        <div className="product-overview">
          <ProductOverview/>
        </div>
        <div className="product-category">
          <CreateNewProduct/>
        </div>
      </div> 
    </div>
  )     
}