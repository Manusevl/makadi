import React from 'react'
import LayoutProductCollection from '../../Layouts/LayoutProductCollection/LayoutProductCollection'
import ProductGrid from './ProductGrid/ProductGrid'
import SearchBar from './SearchBar/SearchBar'

export default function ProductCollection(props) {
  
  return (
    <LayoutProductCollection
      productArea={<ProductGrid itemList={props.itemList}/>}
      searchArea={<SearchBar/>}
    />
  )
}

