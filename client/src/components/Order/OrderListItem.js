import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {useQuery} from "@apollo/react-hooks";
import {GET_PRODUCT} from "../../graphql/queries"

export default function OrderListItem(props) {

    const { data, loading, error } = useQuery(GET_PRODUCT, {
        variables: { _id: props.orderItem._id },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <Card elevation={1}>
            <CardHeader 
                action={
                    <div>
                    <Typography align="right" variant="body1" display={"inline"}>
                    <b>{(data.product.price * data.product.timesInCart).toFixed(2)} EUR </b>
                    </Typography>
                    <IconButton aria-label="settings">
                        <DeleteIcon />
                    </IconButton>
                    </div>
                }
                title={
                    <div>
                        <Typography variant="body1" display={"inline"}>
                        <b>{data.product.timesInCart} x </b>
                        </Typography> 
                        <Typography variant="body1" display={"inline"}>
                            {data.product.name}<b> </b>
                        </Typography>
                        <Typography align="right" variant="subtitle2" display={"inline"}>
                            ({data.product.price.toFixed(2)} €)
                        </Typography>
                    </div>
                }>
            </CardHeader>
        </Card>
    )
}
