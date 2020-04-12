import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {useMutation} from "@apollo/react-hooks";
import {CREATE_ORDER} from "../../graphql/mutations"
import { v4 as uuidv4 } from 'uuid';

const useStylesButton = makeStyles({
    root: {
      backgroundColor: '#3f51b5',
      color: 'white'
    },
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

export default function OrderCommands(props) {
    console.log(props.itemList)
    const classesButton = useStylesButton();
    const [createOrder] = useMutation(CREATE_ORDER, { 
        variables: { items: removeExtraProperties(props.itemList) },
        update: (cache) => {
            cache.writeData({
                data: {
                  currentOrder: {
                    __typename: 'Order',
                    _id: uuidv4(),
                    items: []
                  }
                }
              })
          }
    });
    return (
        <Button fullWidth={true} className={classesButton.root} onClick={createOrder}>
            Confirm Order
        </Button>
    )
}