import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function ProductGrid(props) {

    return (
        <div>
            <Typography color="textSecondary" align="center" display="block" variant="body1">
                <b>Total Ammount </b>
            </Typography>
            <Typography color="textPrimary" align="center" display="block" variant="h2">
                <b>{props.total.toFixed(2)} EUR </b>
            </Typography>
        </div>
    )
}
