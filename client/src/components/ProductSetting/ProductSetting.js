import React from 'react'
import LayoutPage from '../Layouts/LayoutPage/LayoutPage'
import Header from '../Common/Header/Header'
import NoSelection from './common/NoSelection'
import ProductCollection from '../Order/ProductCollection/ProductCollection'
import LayoutCategories from '../Layouts/LayoutCategories/LayoutCategories'
import CategoryList from '../Common/CategoryList/CategoryList'
import CreateNewProduct from './Dialog/CreateNewProduct'

export default function ProductSetting() {
  
  return (
    <LayoutPage 
      header={<Header />}
      leftPanel={<NoSelection/>}
      centerPanel={<ProductCollection itemList={[]}/>}
      rightPanel={<LayoutCategories categoriesArea={<CategoryList/>} actionsArea={<CreateNewProduct/>}/> }
      />
  )     
}