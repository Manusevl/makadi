import React from 'react'
import ProductGridItem from './ProductGridItem'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from "@apollo/react-hooks"
import Grid from '@material-ui/core/Grid'
import {GET_PRODUCTS} from "../../../graphql/queries"

const useStyles = makeStyles({
    productGrid: {
      margin: 10,
      width: "auto"
    }
});

function getProductQuantity(productId, items){
    const productFound = items.find((el) => productId === el.product._id);
    if(productFound) {
        return productFound.quantity
    } else {
        return 0
    }
}

export default function ProductGrid(props) {
    const classes = useStyles();

    const { data, loading, error } = useQuery(GET_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const productsToRender = data.products;

    return (
        <Grid className={classes.productGrid} container spacing={5}>
            {productsToRender.map(product => 
                <ProductGridItem 
                    key={product._id} 
                    product={product} 
                    quantity={getProductQuantity(product._id, props.itemList)}
                />
            )}
        </Grid>
    )
  }
