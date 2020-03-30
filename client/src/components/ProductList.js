import React, { Component } from 'react'
import Product from './Product'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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

class ProductList extends Component {
  render() {

    return (
        <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const productsToRender = data.products
        
            return (
                <div>
                    {productsToRender.map(product => <Product key={product.id} product={product}/>)}
                </div>
            )
            }}
        </Query>
    )
  }
}

export default ProductList