import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation createProduct($name: String!, $price: String!, $stock: String!)) {
    createProduct(name: $name, price: $price, stock:$stock) {
      _id
      name
      price
      stock
    }
  }
`

class CreateProduct extends Component {
  state = {
    name: '',
    price: '',
    stock: ''
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
            type="text"
            placeholder="The price of the product"
          />
          <input
            value={stock}
            onChange={e => this.setState({ stock: e.target.value })}
            type="text"
            placeholder="The stock for the product"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
            {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateProduct