import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {useMutation} from "@apollo/react-hooks";
import {REMOVE_PRODUCT_FROM_ORDER} from "../../graphql/mutations"

export default function OrderListItem(props) {

    const [removeProductFromOrder] = useMutation(REMOVE_PRODUCT_FROM_ORDER, {
        variables: {_id: props.orderItem._id}
    });

    return (
        <Card elevation={1}>
            <CardHeader 
                action={
                    <div>
                    <Typography align="right" variant="body1" display={"inline"}>
                    <b>{(props.orderItem.price * props.orderItem.quantity).toFixed(2)} EUR </b>
                    </Typography>
                    <IconButton aria-label="settings" onClick={removeProductFromOrder}>
                        <DeleteIcon />
                    </IconButton>
                    </div>
                }
                title={
                    <div>
                        <Typography variant="body1" display={"inline"}>
                        <b>{props.orderItem.quantity} x </b>
                        </Typography> 
                        <Typography variant="body1" display={"inline"}>
                            {props.orderItem.name}<b> </b>
                        </Typography>
                        <Typography align="right" variant="subtitle2" display={"inline"}>
                            ({props.orderItem.price.toFixed(2)} €)
                        </Typography>
                    </div>
                }>
            </CardHeader>
        </Card>
    )
}
