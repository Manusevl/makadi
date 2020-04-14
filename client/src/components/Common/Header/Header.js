import React from 'react'
import logo from './logo_horizontal.png'
import './Header.css'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
      <div>
        <img className="logo" src={logo} alt="makadi"/>
        <Link to="/">Create Order</Link>
        <Link to="/orders">Order History</Link>
      </div>
    )
}
