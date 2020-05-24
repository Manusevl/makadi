import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import ButtonBase from '@material-ui/core/ButtonBase'
import { makeStyles } from '@material-ui/core/styles'
import {useMutation} from "@apollo/react-hooks"
import {ADD_PRODUCT_TO_ORDER} from "../../../graphql/mutations"

const useStyles = makeStyles({
    badge: {
      display: 'block',
    },    
    button: {
      width: '100%',
      display: 'block'
    }
});

export default function ProductGridItem(props) {
    const classes = useStyles();
    const [addProductToOrder] = useMutation(ADD_PRODUCT_TO_ORDER, { 
        variables: { product: props.product }
    });
    
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Badge color="primary" className={classes.badge} badgeContent={props.quantity}>
                <ButtonBase className={classes.button} onClick={addProductToOrder}>
                    <Card elevation={1}>
                        <CardContent>
                            <Typography color="textSecondary">
                                {props.product.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {props.product.price.toFixed(2)} EUR
                            </Typography>
                            <Typography color="textSecondary">
                                {props.product.stock} pieces
                            </Typography>
                        </CardContent>
                    </Card>
                </ButtonBase>
            </Badge>
        </Grid>
    )
}