import React from 'react'
import ProductListItem from './ProductListItem'
import Grid from '@material-ui/core/Grid'

export default function ProductList(props) {
    return (
        <div>
            <Grid container alignItems="stretch" alignContent="stretch" direction="column" spacing={1}>
                {props.currentOrder.map(orderItem => 
                    <Grid item key={orderItem.productId}>
                        <ProductListItem key={orderItem.productId} orderItem={orderItem}/>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
