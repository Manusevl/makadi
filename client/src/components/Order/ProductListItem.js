import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ProductListItem extends Component{
    render(){
        return (
            <Card elevation={1}>
                <CardHeader 
                    action={
                        <div>
                        <Typography align="right" variant="body1" display={"inline"}>
                        <b>{this.props.orderItem.price * this.props.orderItem.times} EUR </b>
                        </Typography>
                        <IconButton aria-label="settings">
                            <DeleteIcon />
                        </IconButton>
                        </div>
                    }
                    title={
                        <div>
                            <Typography variant="body1" display={"inline"}>
                            <b>{this.props.orderItem.times} x </b>
                            </Typography> 
                            <Typography variant="body1" display={"inline"}>
                                {this.props.orderItem.name}<b> </b>
                            </Typography>
                            <Typography align="right" variant="subtitle2" display={"inline"}>
                                ({this.props.orderItem.price} €)
                            </Typography>

                        </div>
                    }>
                </CardHeader>
            </Card>
          
        )
    }
}
  
export default ProductListItem