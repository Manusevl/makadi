import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProductForm from '../ProductForm/ProductForm';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
  root: {
    'background-color': '#6B971C',
    boxShadow: '1px 1px 6px 2px rgba(0,0,0,0.2);',
    color: 'white',
  }
});

export default function CreateNewProduct() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container direction="column" spacing={1} alignItems="center">
        <Grid item xs={12}>
          <IconButton variant="outlined" color="primary" onClick={handleClickOpen} className={classes.root}>
            <AddCircleIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new product</DialogTitle>
        <DialogContent>
          <ProductForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}