import React from 'react'
import OrderList from './OrderList'
import Grid from '@material-ui/core/Grid'
import { useQuery } from "@apollo/react-hooks";
import {GET_CURRENT_SELECTED_ORDER} from "../../graphql/queries"

export default function OrderOverview(props) {

  const { data, loading, error } = useQuery(GET_CURRENT_SELECTED_ORDER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <OrderList orderId={data.selectedOrderHistory}/>
      </Grid>
    </Grid>
  )
}