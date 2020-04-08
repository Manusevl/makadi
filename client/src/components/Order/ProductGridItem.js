import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import {useMutation} from "@apollo/react-hooks";
import {ADD_PRODUCT_TO_ORDER} from "../../graphql/mutations"

const useStylesBadge = makeStyles({
    root: {
      display: 'block',
    },
});

const useStylesButton = makeStyles({
    root: {
      width: '100%',
      display: 'block'
    },
});

export default function ProductGridItem(props) {
    const classesBadge = useStylesBadge();
    const classesButton = useStylesButton();
    const [addProductToOrder] = useMutation(ADD_PRODUCT_TO_ORDER, { variables: { product: props.product } });
    
    return (
        <Badge color="primary" className={classesBadge.root} badgeContent={props.product.timesInCart}>
            <ButtonBase className={classesButton.root} onClick={addProductToOrder}>
                <Card elevation={1}>
                    <CardContent>
                        <Typography color="textSecondary">
                            {props.product.name}
                        </Typography>
                        <Typography color="textSecondary">
                            {props.product.price} EUR
                        </Typography>
                        <Typography color="textSecondary">
                            {props.product.stock} pieces
                        </Typography>
                    </CardContent>
                </Card>
            </ButtonBase>
        </Badge>
    )
}