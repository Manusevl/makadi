import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
    productArea: {
        backgroundColor: 'lightgrey',
        maxWidth: "100%"
    },
    searchArea: {
        backgroundColor: 'lightgrey',
        maxWidth: "100%"
    },
    layout: {
        height:'100%',
        width: '100%'
    }
}));

export default function LayoutProductCollection(props){
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.layout} spacing={0}>
            <Grid item className={classes.productArea} xs={11}>
                {props.productArea}
            </Grid>
            <Grid item className={classes.searchArea} xs={1}>
                {props.searchArea}
            </Grid>
        </Grid>
    )
}