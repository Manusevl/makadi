import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

export default function OrderListItem(props) {
    
    return (
        <Card elevation={1}>
            <CardHeader 
                action={
                    <div>
                    <Typography align="right" variant="body1" display={"inline"}>
                    <b>{(props.orderItem.product.price * props.orderItem.quantity).toFixed(2)} EUR </b>
                    </Typography>
                    </div>
                }
                title={
                    <div>
                        <Typography variant="body1" display={"inline"}>
                        <b>{props.orderItem.quantity} x </b>
                        </Typography> 
                        <Typography variant="body1" display={"inline"}>
                            {props.orderItem.product.name}<b> </b>
                        </Typography>
                        <Typography align="right" variant="subtitle2" display={"inline"}>
                            ({props.orderItem.product.price.toFixed(2)} €)
                        </Typography>
                    </div>
                }>
            </CardHeader>
        </Card>
    )
}
