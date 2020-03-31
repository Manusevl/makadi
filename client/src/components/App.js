import React, { Component } from 'react'
import ProductList from './ProductList'
import OrderOverview from './OrderOverview'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <OrderOverview />
          <ProductList />
        </ThemeProvider>
      </div>
    )      
  }
}

export default App
