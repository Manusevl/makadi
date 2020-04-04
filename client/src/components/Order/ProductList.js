import React, { Component } from 'react'
import ProductListItem from './ProductListItem'
import Grid from '@material-ui/core/Grid'

class ProductList extends Component {
  render() {
    return (
        <div>
            <Grid container alignItems="stretch" alignContent="stretch" direction="column" spacing={1}>
                {this.props.orderData.map(orderItem => 
                    <Grid item key={orderItem._id}>
                        <ProductListItem key={orderItem._id} orderItem={orderItem}/>
                    </Grid>
                )}
            </Grid>
        </div>

    )
  }
}

export default ProductList