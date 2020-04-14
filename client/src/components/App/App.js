import React from 'react'
import { Switch, Route } from "react-router-dom"
import Order from '../Order/Order'
import OrderHistory from '../OrderHistory/OrderHistory'

export default function App(props) {
    return (
      <Switch>
        <Route path="/orders">
          <OrderHistory />
        </Route>
        <Route path="/">
          <Order />
        </Route>
      </Switch>
    )      
}
