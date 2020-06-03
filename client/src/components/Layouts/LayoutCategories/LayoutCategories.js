import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
    categoriesArea: {
        backgroundColor: 'transparent',
        maxWidth: "100%"
    },
    actionsArea: {
        backgroundColor: 'transparent',
        maxWidth: "100%"
    },
    layout: {
        height:'100%',
        width: '100%'
    }
}));

export default function LayoutCategories(props){
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.layout} spacing={0}>
            <Grid item className={classes.categoriesArea} xs={11}>
                {props.categoriesArea}
            </Grid>
            <Grid item className={classes.actionsArea} xs={1}>
                {props.actionsArea}
            </Grid>
        </Grid>
    )
}