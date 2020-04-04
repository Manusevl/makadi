import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class OrderSummary extends Component{
    render(){
        return (
            <Card elevation={1}>
                <CardContent>
                    <Typography variant="body1" display={"inline"}>
                        <b>{this.props.total} EUR </b>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}
  
export default OrderSummary