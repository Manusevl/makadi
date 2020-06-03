import React from 'react'
import LayoutPage from '../Layouts/LayoutPage/LayoutPage'
import ProductCollection from './ProductCollection/ProductCollection'
import OrderOverview from './OrderOverview/OrderOverview'
import CategoryList from '../Common/CategoryList/CategoryList'
import Header from '../Common/Header/Header'
import {useQuery} from "@apollo/react-hooks";
import {GET_CURRENT_ORDER} from "../../graphql/queries"

export default function Order() {

  const { data, loading, error } = useQuery(GET_CURRENT_ORDER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  
  return (
    <LayoutPage
      header={<Header/>}
      leftPanel={<OrderOverview itemList={data.currentOrder.items}/>}
      centerPanel={<ProductCollection itemList={data.currentOrder.items}/>}
      rightPanel={<CategoryList/>}
    />
  )     
}

