import React from 'react'
import ProductGridItem from './ProductGridItem'
import { useQuery } from "@apollo/react-hooks";
import Grid from '@material-ui/core/Grid';
import {GET_PRODUCTS} from "../../graphql/queries"

function getProductQuantity(productId, items){
    const productFound = items.find((el) => productId === el.product._id);
    if(productFound) {
        return productFound.quantity
    } else {
        return 0
    }
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
                            quantity={getProductQuantity(product._id, props.itemList)}
                        />
                    </Grid>
                )}
            </Grid>
        </div>
    )
  }
