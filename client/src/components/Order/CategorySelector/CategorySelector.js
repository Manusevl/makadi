import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    category: {
      backgroundColor: '#3f51b5',
      color: 'white',
      marginBottom: 2
    }
});

export default function CategorySelector(props) {
    const classes = useStyles();

    return (
        <div>
            <Button fullWidth={true} className={classes.category}>
                Favorites
            </Button>
            <Button fullWidth={true} className={classes.category}>
                Bread
            </Button>
            <Button fullWidth={true} className={classes.category}>
                Fruits
            </Button>
            <Button fullWidth={true} className={classes.category}>
                Dairy
            </Button>
            <Button fullWidth={true} className={classes.category}>
                Sweets
            </Button>
        </div>
    )
  }
