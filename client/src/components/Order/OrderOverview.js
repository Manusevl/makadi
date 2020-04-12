import React from 'react'
import OrderList from './OrderList'
import OrderSummary from './OrderSummary'
import OrderCommands from './OrderCommands'
import Grid from '@material-ui/core/Grid'

export default function OrderOverview(props) {

  function calculateTotal(items){
    const total = items.reduce((acc, act) => {
        return acc + act.product.price * act.quantity
    }, 0);
    return total;
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <OrderList itemList={props.itemList}/>
      </Grid>
      <Grid item>
        <OrderSummary total={calculateTotal(props.itemList)}/>
      </Grid>
      <Grid item>
        <OrderCommands itemList={props.itemList}/>
      </Grid>
    </Grid>
  )
}