import React from 'react'
import OrderListItem from './OrderListItem'
import Grid from '@material-ui/core/Grid'

export default function OrderList(props) {

    return (
        <div>
            <Grid container alignItems="stretch" alignContent="stretch" direction="column" spacing={1}>
                {props.currentOrder.map(orderItem => 
                    <Grid item key={orderItem._id}>
                        <OrderListItem key={orderItem._id} orderItem={orderItem}/>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
