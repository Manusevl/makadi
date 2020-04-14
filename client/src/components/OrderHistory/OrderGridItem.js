import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from "@apollo/react-hooks";
import { CHANGE_SELECTED_ORDER } from '../../graphql/mutations'

const useStylesButton = makeStyles({
    root: {
      width: '100%',
      display: 'block'
    },
});

export default function OrderGridItem(props) {
    const classesButton = useStylesButton()
    const [changeSelectedOrder] = useMutation(CHANGE_SELECTED_ORDER, { 
        variables: { _id: props.orderId }
    });
    
    return (
        <ButtonBase className={classesButton.root} onClick={changeSelectedOrder}>
            <Card elevation={1}>
                <CardContent>
                    <Typography color="textSecondary">
                        {props.total}
                    </Typography>
                </CardContent>
            </Card>
        </ButtonBase>
    )
}