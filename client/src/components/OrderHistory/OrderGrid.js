import React from 'react'
import OrderGridItem from './OrderGridItem'
import { useQuery } from "@apollo/react-hooks";
import Grid from '@material-ui/core/Grid';
import {GET_ORDERS} from "../../graphql/queries"

function calculateTotal(items){
    const total = items.reduce((acc, act) => {
        return acc + act.product.price * act.quantity
    }, 0);
    return total;
  } 

export default function OrderGrid() {
    
    const { data, loading, error } = useQuery(GET_ORDERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <div>
            <Grid container alignContent="stretch" spacing={3}>
                {data.orders.map(order => 
                    <Grid key={order._id} item lg={3}>
                        <OrderGridItem 
                            key={order._id} 
                            total={calculateTotal(order.items)}
                            orderId = {order._id}
                        />
                    </Grid>
                )}
            </Grid>
        </div>
    )
  }
