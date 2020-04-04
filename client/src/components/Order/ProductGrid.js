import React, { Component } from 'react'
import ProductGridItem from './ProductGridItem'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid';

const FEED_QUERY = gql`
{
    products {
        _id
        name
        price
        stock
    }
}
`

class ProductGrid extends Component {
  render() {
    return (
        <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const productsToRender = data.products
        
            return (
                <div>
                    <Grid container alignContent="stretch" spacing={3}>
                        {productsToRender.map(product => <Grid key={product._id} item lg={3}><ProductGridItem key={product._id} product={product}/></Grid>)}
                    </Grid>
                </div>
            )
            }}
        </Query>
    )
  }
}

export default ProductGrid