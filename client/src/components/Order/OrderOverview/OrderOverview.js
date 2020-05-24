import React from 'react'
import OrderList from './OrderList'
import OrderSummary from './OrderSummary'
import OrderCommands from './OrderCommands'
import LayoutOrder from '../../Layouts/LayoutOrder/LayoutOrder'

export default function OrderOverview(props) {

  function calculateTotal(items){
    const total = items.reduce((acc, act) => {
        return acc + act.product.price * act.quantity
    }, 0);
    return total;
  }

  return (
    <LayoutOrder
      topPanel={<OrderList itemList={props.itemList}/>}
      middlePanel={<OrderSummary total={calculateTotal(props.itemList)}/>}
      bottomPanel={<OrderCommands itemList={props.itemList}/>}
    />
  )
}