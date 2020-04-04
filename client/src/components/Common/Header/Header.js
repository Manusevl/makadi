import React, { Component } from 'react'
import logo from './logo_horizontal.png'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="makadi"/>
      </div>
    )
  }
}

export default Header