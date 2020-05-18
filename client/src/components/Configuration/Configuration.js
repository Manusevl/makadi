import React from 'react'
import Header from '../Common/Header/Header'
import MyComponent from './MyComponent'
import './Configuration.css'

export default function OrderHistory() {
  
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="configuration">
        <MyComponent/>
      </div>
    </div>
  )     
}