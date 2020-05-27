import React from 'react'
import LayoutProductGrid from '../../Layouts/LayoutProductCollection/LayoutProductCollection'
import ProductGrid from './ProductGrid/ProductGrid'
import TextField from '@material-ui/core/TextField'

export default function ProductCollection(props) {
  
  return (
    <LayoutProductGrid
      productArea={<ProductGrid itemList={props.itemList}/>}
      searchArea={<TextField id="standard-basic" margin="dense" variant="filled" fullWidth={true} label="Search" />}
    />
  )     
}

