import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation CreateProduct($name: String, $price: Float, $stock: Int){
    createProduct(name: $name, price: $price, stock: $stock) {
      _id
    }
  }
`

class CreateProduct extends Component {
  state = {
    name: '',
    price: 0.0,
    stock: 0
  }

  render() {
    const { name, price, stock } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Product name"
          />
          <input
            value={price}
            onChange={e => this.setState({ price: e.target.value })}
            type="number"
            placeholder="The price of the product"
          />
          <input
            value={stock}
            onChange={e => this.setState({ stock: e.target.value })}
            type="number"
            placeholder="The stock for the product"
          />
        </div>
        <Mutation 
          mutation={POST_MUTATION}
          variables={{name, price, stock}}>
            {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateProduct