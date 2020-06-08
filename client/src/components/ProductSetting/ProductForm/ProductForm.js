import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CreateIcon from '@material-ui/icons/Create'
import ValueAddedTaxIcon from '@material-ui/icons/FlipToBack'
import EuroIcon from '@material-ui/icons/Euro'
import PermMediaIcon from '@material-ui/icons/PermMedia'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import { useQuery } from '@apollo/react-hooks'
import {GET_CATEGORIES} from '../../../graphql/queries'

export default function ProductForm(props, state) {
  const [category, setCategory] = React.useState("Favorites");
  const [active, setActive] = React.useState(false);
  const [favourite, setFavourite] = React.useState(false);

  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const handleChange = (event) => {
    setCategory(event.target.value);
    //Write values to state
    console.log(event);
  };

  const toggleActive = (event) => {
    setActive(event.target.value);  // not working, needs to be checked
  };

  const toggleFavourite = (event) => {
    setFavourite(false);  // not working, needs to be checked
  }
 
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
          <ValueAddedTaxIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-value-added-tax"
            label="Value added tax"
            type="number"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <EuroIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-price"
            label="Price"
            type="number"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <PermMediaIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-select-category"
            select
            label="Select product category"
            value={category}
            onChange={handleChange}
            helperText="This could be your advertisement"
          >
            {data.categories.map((category) => (
              <MenuItem key={category.name} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <EqualizerIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-stock"
            label="Products on stock"
            type="number"
            step={1}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="stretch">
        <Grid item>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.active}
                    onChange={toggleActive}
                    value={active}
                    name="ActiveState"
                    color={"primary"}
                  />
                }
                label="Active"
                labelPlacement="top"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={state.active}
                    onChange={toggleFavourite}
                    value={favourite}
                    name="FavouriteState"
                    color={"primary"}
                  />
                }
                label="Favourite"
                labelPlacement="top"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )     
}

