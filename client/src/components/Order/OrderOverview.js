import React from 'react'
import ProductList from './ProductList'
import OrderSummary from './OrderSummary'
import OrderCommands from './OrderCommands'
import Grid from '@material-ui/core/Grid'

export default function OrderOverview(props) {

  const total = props.currentOrder.map(item => (item.price*item.quantity)).reduce((prev, next) => prev + next);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ProductList currentOrder={props.currentOrder}/>
      </Grid>
      <Grid item>
        <OrderSummary total={total}/>
      </Grid>
      <Grid item>
        <OrderCommands/>
      </Grid>
    </Grid>
  )
}