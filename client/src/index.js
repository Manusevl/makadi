import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from './components/App/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { resolvers, typeDefs } from "./graphql/clientSchema";
import { v4 as uuidv4 } from 'uuid';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const cache = new InMemoryCache()

cache.writeData({
  data: {
    currentOrder: {
      __typename: 'Order',
      _id: uuidv4(),
      items: []
    },
    selectedOrderHistory: "",
    selectedCategory: "5ed28878fe8432438cdb1e42"
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
  typeDefs: typeDefs,  
  resolvers: resolvers
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
