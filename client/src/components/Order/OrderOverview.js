import React, { Component } from 'react'
import ProductList from './ProductList'
import OrderSummary from './OrderSummary'
import Grid from '@material-ui/core/Grid'

const orderData = [
  {
      _id: "Item1",
      name: "Bread",
      price: 1.5,
      times: 3,
      total: 4.5
  },
  {
      _id: "Item2",
      name: "Semmel",
      price: 1.5,
      times: 1,
      total: 1.5
  },
  {
      _id: "Item3",
      name: "Baguette",
      price: 2,
      times: 2,
      total: 4
  }
]

const total = orderData.map(item => (item.price*item.times)).reduce((prev, next) => prev + next);

class OrderOverview extends Component {
  render() {
    return (
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <ProductList orderData={orderData}/>
        </Grid>
        <Grid item>
          <OrderSummary total={total}/>
        </Grid>
      </Grid>
    )
  }
}

export default OrderOverview