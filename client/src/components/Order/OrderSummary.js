import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function ProductGrid(props) {

    return (
        <Card elevation={1}>
            <CardContent>
                <Typography variant="body1" display={"inline"}>
                    <b>{props.total} EUR </b>
                </Typography>
            </CardContent>
        </Card>
    )
}
