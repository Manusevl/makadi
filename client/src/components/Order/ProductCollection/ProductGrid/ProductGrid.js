import React from 'react'
import ProductGridItem from './ProductGridItem'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from "@apollo/react-hooks"
import Grid from '@material-ui/core/Grid'
import {GET_PRODUCTS_FROM_CATEGORY, 
    GET_CURRENT_SELECTED_CATEGORY, 
    GET_SEARCH_STRING,
    GET_PRODUCTS_CONTAINING_STRING} from "../../../../graphql/queries"

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

    const {data: {searchString} = "" } = useQuery(GET_SEARCH_STRING);
    const {data: {selectedCategory} = "" } = useQuery(GET_CURRENT_SELECTED_CATEGORY,{
        skip: searchString !== ""
    });
    const {data: {productsFromCategory} = [] } = useQuery(GET_PRODUCTS_FROM_CATEGORY, {
        variables: {category: selectedCategory},
        skip: selectedCategory === ""
    });
    const {data: {productsContainingString} = [] } = useQuery(GET_PRODUCTS_CONTAINING_STRING, {
        variables: {searchString: searchString},
        skip: searchString === ""
    });

    var productsToRender = [];
    if (searchString === ""){
        if (!productsFromCategory) return <p>Not found</p>;
        productsToRender = productsFromCategory;
    } else {
        if (!productsContainingString) return <p>Not found</p>;
        productsToRender = productsContainingString;
    }
    
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
