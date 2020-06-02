import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CreateIcon from '@material-ui/icons/Create';
import './ProductForm.css'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

//Just for now static
const categories = [
  {
    value: 'bread',
    label: 'Bread',
  },
  {
    value: 'drinks',
    label: 'Drinks',
  },
  {
    value: 'fruits',
    label: 'Fruits',
  },
  {
    value: 'vegetables',
    label: 'Vegetables',
  },
  {
    value: 'sweets',
    label: 'Sweets',
  },
];

export default function ProductForm(props, state) {
  const classes = useStyles();
  const [category, setCategory] = React.useState('EUR');

  state = {
    itemNumber: 0,
    productName: "",
    valueAddedTax: 20,
    price: 0,
    productCategory: "",
    stock: 0
  }
  console.log(state);

  const handleChange = (event) => {
    setCategory(event.target.value);
    //Write values to state
  };
 
  return (
    <div className="product-form">
      <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <FormatListNumberedIcon />
          </Grid>
          <Grid item>
            <TextField 
            id="input-item-numer" 
            label="Item number" 
            type="number"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <CreateIcon />
          </Grid>
          <Grid item>
            <TextField 
            id="input-product-name" 
            label="Product name" 
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <span>%</span>
          </Grid>
          <Grid item>
            <TextField 
            id="input-input-value-added-tax" 
            label="Value added tax"
            type="number"
            />
          </Grid>
        </Grid>
        <TextField
          label="Value added tax"
          id="filled-start-adornment"
          type="number"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          variant="filled"
        />
        <TextField
          id="standard-select-category"
          select
          label="Select product category"
          value={category}
          onChange={handleChange}
          helperText="This could be your advertisement"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  )     
}

