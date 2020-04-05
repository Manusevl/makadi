import React from 'react'
import ProductGridItem from './ProductGridItem'
import gql from 'graphql-tag'
import { useQuery } from "@apollo/react-hooks";
import Grid from '@material-ui/core/Grid';

const GET_PRODUCTS = gql`
{
    products {
        _id
        name
        price
        stock
    }
}
`

function getCurrentQuantity (currentOrder, productId){
    const productInOrder = currentOrder.find(element => element.productId === productId)
    const quantity = productInOrder ? productInOrder.quantity : 0
    console.log(quantity)
    return quantity
}

export default function ProductGrid(props) {
    
    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const productsToRender = data.products;

    return (
        <div>
            <Grid container alignContent="stretch" spacing={3}>
                {productsToRender.map(product => 
                    <Grid key={product._id} item lg={3}>
                        <ProductGridItem 
                            key={product._id} 
                            product={product}
                            timesInCart={getCurrentQuantity(props.currentOrder, product._id)}     
                        />
                    </Grid>
                )}
            </Grid>
        </div>
    )
  }
