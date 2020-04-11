import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { resolvers, typeDefs } from "./graphql/clientSchema";

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const cache = new InMemoryCache()

cache.writeData({
  data: {
    currentOrder: {
      __typename: 'Order',
      _id: "currentOrder",
      items: []
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
