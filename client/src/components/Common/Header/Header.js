import React from 'react'
import logo from './logo_horizontal.png'
import './Header.css'

export default function Header(props) {
    return (
      <div>
        <img className="logo" src={logo} alt="makadi"/>
      </div>
    )
}
