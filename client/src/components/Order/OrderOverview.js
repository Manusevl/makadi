import React from 'react'
import OrderList from './OrderList'
import OrderSummary from './OrderSummary'
import OrderCommands from './OrderCommands'
import Grid from '@material-ui/core/Grid'

export default function OrderOverview(props) {

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <OrderList currentOrder={props.currentOrder}/>
      </Grid>
      <Grid item>
        <OrderSummary total={0}/>
      </Grid>
      <Grid item>
        <OrderCommands/>
      </Grid>
    </Grid>
  )
}