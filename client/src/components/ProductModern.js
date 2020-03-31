import React, { Component } from 'react'
import withStyles from "@material-ui/styles/withStyles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 100,
      },
      pos: {
        marginBottom: 12,
      },
  });

class ProductModern extends Component{
    render(){
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {this.props.product.name}
                </Typography>
                </CardContent>
            </Card>
          
        )
    }
}
  
export default withStyles(styles)(ProductModern)