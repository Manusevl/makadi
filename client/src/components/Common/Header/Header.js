import React from 'react'
import logo from './logo_horizontal.png'
import './Header.css'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HistoryIcon from '@material-ui/icons/History';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';

const useStylesIconSettings = makeStyles({
  root: {
    margin: '20px 0px 0px 20px',
    color: "#F7F4D4"
  },
});

const useStylesIconHistory = makeStyles({
  root: {
    margin: '20px 0px 0px 80px',
    color: "#F7F4D4"
  },
});

const useStylesIconShoppinCart = makeStyles({
  root: {
    margin: '20px 0px 0px 20px',
    color: "#F7F4D4"
  },
});

export default function Header(props) {
  const classesIconSettings = useStylesIconSettings()
  const classesIconHistory = useStylesIconHistory()
  const classesIconShoppingCart = useStylesIconShoppinCart()
    return (
      <div>
        <IconButton className={classesIconSettings.root} component={Link} to="/configuration" aria-label="upload picture">
          <SettingsIcon  fontSize="large"/>
        </IconButton>
        <IconButton className={classesIconHistory.root} component={Link} to="/orders" aria-label="upload picture">
          <HistoryIcon  fontSize="large"/>
        </IconButton>  
        <IconButton className={classesIconShoppingCart.root} component={Link} to="/" aria-label="upload picture">
          <ShoppingCartIcon fontSize="large"/>
        </IconButton>
        <img className="logo" src={logo} alt="makadi"/>
      </div>
    )
}
