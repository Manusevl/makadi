import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Header from '../../Common/Header/Header'

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
    rightPanel: {
        height: '90%',
        width: '100%',
        backgroundColor: 'lightgrey'
    },
    appContainer: {
        height:'100%',
        width: '100%'
    }

}));

export default function Layout(){
    const classes = useStyles();
    return (
        <Grid className={classes.appContainer} container spacing={0}>
            <Grid className={classes.header} item xs={12}>
                <Header/>
            </Grid>
            <Hidden smDown>
                <Grid item className={classes.leftPanel} xs={2}>
                </Grid>
            </Hidden>
            <Grid className={classes.rightPanel} item xs={12} sm={10}>
            </Grid>
        </Grid>
    )
}