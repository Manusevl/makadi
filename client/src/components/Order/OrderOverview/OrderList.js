import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OrderListItem from './OrderListItem'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
    orderListContainer: {
        overflow: 'auto',
    }
}));

export default function OrderList(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.orderListContainer} direction="column" spacing={1}>
            {props.itemList.map(orderItem => 
                <OrderListItem key={orderItem.product._id} orderItem={orderItem}/>
            )}
        </Grid>
    )
}
