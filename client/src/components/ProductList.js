import React, { Component } from 'react'
import ProductModern from './ProductModern'
import withStyles from "@material-ui/styles/withStyles";
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  });

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
    const { classes } = this.props;
    return (
        <Query query={FEED_QUERY}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const productsToRender = data.products
        
            return (
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {productsToRender.map(product => <Grid item xs={3}><ProductModern key={product._id} product={product}/></Grid>)}
                    </Grid>
                </div>
            )
            }}
        </Query>
    )
  }
}

export default withStyles(styles)(ProductList)