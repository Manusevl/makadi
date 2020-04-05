import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export default function ProductListItem(props) {
    return (
        <Card elevation={1}>
            <CardHeader 
                action={
                    <div>
                    <Typography align="right" variant="body1" display={"inline"}>
                    <b>{props.orderItem.price * props.orderItem.quantity} EUR </b>
                    </Typography>
                    <IconButton aria-label="settings">
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
                            ({props.orderItem.price} €)
                        </Typography>
                    </div>
                }>
            </CardHeader>
        </Card>
    )
}
