import React from 'react'
import { useApolloClient } from "@apollo/react-hooks"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {useMutation} from "@apollo/react-hooks"
import {CREATE_ORDER} from "../../../graphql/mutations"
import { v4 as uuidv4 } from 'uuid'

const useStyles = makeStyles({
    confirm: {
      backgroundColor: '#3f51b5',
      color: 'white'
    },
    cancel: {
      backgroundColor: 'red',
      color: 'white'
    }
});

function removeExtraProperties (itemList) {
    return itemList.map((item) => {
        const parentKey = 'product';
        const childKey = '__typename';
        const { [parentKey]: parentValue, ...noChild } = item;
        const { [childKey]: removedValue, ...childWithout } = parentValue;
        const withoutThird = { ...noChild, [parentKey]: childWithout };
        const { _id, ...withoutId } = withoutThird;
        const { __typename, ...withoutTypeName } = withoutId;
        return withoutTypeName;
    })
}

function clearActualOrder (client) {
    client.writeData({
        data: {
          currentOrder: {
            __typename: 'Order',
            _id: uuidv4(),
            items: []
          }
        }
      })
}

export default function OrderCommands(props) {
    const client = useApolloClient();
    const classesButton = useStyles();
    const [createOrder] = useMutation(CREATE_ORDER, { 
        variables: { items: removeExtraProperties(props.itemList) },
        update: clearActualOrder
    });
    return (
        <div>
            <Button fullWidth={true} className={classesButton.confirm} onClick={createOrder}>
                Confirm Order
            </Button>
            <Button fullWidth={true} className={classesButton.cancel} onClick={() => clearActualOrder(client)}>
                Cancel
            </Button>
        </div>
    )
}