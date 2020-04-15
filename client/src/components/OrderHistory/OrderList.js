import React from 'react'
import OrderListItem from './OrderListItem'
import Grid from '@material-ui/core/Grid'
import { useQuery } from "@apollo/react-hooks";
import {GET_ORDER_BY_ID} from "../../graphql/queries"

export default function OrderList(props) {
    
    const { data, loading, error } = useQuery(GET_ORDER_BY_ID, {
        variables: {_id: props.orderId}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Select an order</p>;
    if (!data) return <p>Not found</p>;

    return (
        <div>
            <Grid container alignItems="stretch" alignContent="stretch" direction="column" spacing={1}>
                {data.order.items.map(orderItem => 
                    <Grid item key={orderItem.product._id}>
                        <OrderListItem key={orderItem.product._id} orderItem={orderItem}/>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
