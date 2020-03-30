import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <div>
            <p>{this.props.product.name}</p>
            <p>{this.props.product.price}</p>
            <p>{this.props.product.stock}</p>
        </div>
      </div>
    )
  }
}

export default Product