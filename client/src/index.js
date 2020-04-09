import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { resolvers, typeDefs } from "./graphql/clientSchema";

const httpLink = createHttpLink({
  uri: 'http://192.168.0.46:4000/graphql'
})

const cache = new InMemoryCache()

cache.writeData({
  data: {
    currentOrder: {
      __typename: 'Order',
      _id: "order1",
      items: [{
        __typename: 'Product',
        _id: "5e8f5f4b2081ff4be8742670",
        quantity: 2
      }]
    }
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
  typeDefs: typeDefs,  
  resolvers: resolvers
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
