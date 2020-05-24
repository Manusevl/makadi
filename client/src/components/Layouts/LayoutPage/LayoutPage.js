import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(() => ({
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: '#12395F'
    },
    leftPanel: {
        height: '90%',
        width: '100%',
        backgroundColor: '#6B971C;'
    },
    centerPanel: {
        height: '90%',
        width: '100%',
        backgroundColor: 'lightgrey'
    },
    rightPanel: {
        height: '90%',
        width: '100%',
        backgroundColor: 'whitesmoke',
        padding: 5
    },
    appContainer: {
        height:'100%',
        width: '100%'
    }

}));

export default function Layout(props){
    const classes = useStyles();
    return (
        <Grid container className={classes.appContainer} spacing={0}>
            <Grid item className={classes.header} xs={12}>
                {props.header}
            </Grid>
            <Hidden smDown>
                <Grid item className={classes.leftPanel} xs={3}>
                    {props.leftPanel}
                </Grid>
            </Hidden>
            <Grid item className={classes.centerPanel} xs={12} sm={8}>
                {props.centerPanel}
            </Grid>
            <Grid item className={classes.rightPanel} xs={12} sm={1}>
                {props.rightPanel}
            </Grid>
        </Grid>
    )
}