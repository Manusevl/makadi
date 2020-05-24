import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
    topPanel: {
        maxWidth: '100%',
        backgroundColor: 'transparent',
        overflow: 'auto'
    },
    middlePanel: {
        maxWidth: '100%',
        backgroundColor: 'transparent'
    },
    bottomPanel: {
        maxWidth: '100%',
        backgroundColor: 'transparent'
    },
    appContainer: {
        height:'100%',
        width: '100%',
        margin:0
    }
}));

export default function Layout(props){
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.appContainer} spacing={2}>
            <Grid item className={classes.topPanel} xs={8}>
                {props.topPanel}
            </Grid>
            <Grid item className={classes.middlePanel} xs={2}>
                {props.middlePanel}
            </Grid>
            <Grid item className={classes.bottomPanel} xs={2}>
                {props.bottomPanel}
            </Grid>
        </Grid>
    )
}