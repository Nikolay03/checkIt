import { Provider as StoreProvider } from 'react-redux'
import React from 'react'
import ThemeProvider from 'providers/theme'
import Routes from './routes/routes'
import store from './etc/store'

const App = () => {
  return (
    <StoreProvider store={store()}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
