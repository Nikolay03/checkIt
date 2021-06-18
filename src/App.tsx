import { Provider as StoreProvider } from 'react-redux'
import React from 'react'
import ThemeProvider from 'providers/theme'
import { momentConfig } from 'utils/moment'
import Routes from './routes/routes'
import 'react-datepicker/dist/react-datepicker.min.css'
import store from './etc/store'
import './fonts/style.css'

// Moment Config
momentConfig()

// Component
const App = () => {
  return (
    <StoreProvider store={store()}>
      <ThemeProvider>
        <>
          <Routes />
        </>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
