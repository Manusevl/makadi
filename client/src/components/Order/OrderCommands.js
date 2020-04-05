import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStylesButton = makeStyles({
    root: {
      backgroundColor: '#3f51b5',
      color: 'white'
    },
});

export default function OrderCommands(props) {
    const classesButton = useStylesButton();
    return (
        <Button fullWidth={true} className={classesButton.root}>
            Confirm Order
        </Button>
    )
}