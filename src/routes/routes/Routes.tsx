import React from 'react'
import routes from 'routes/index'
import MultiRouter from 'routes/MultiRouter/MultiRouter'
import { BrowserRouter } from 'react-router-dom'

// Component
const Routes = () => {
  return (
    <BrowserRouter basename="/checkIt">
      <>
        {routes.map((route, key) => (
          <MultiRouter key={key} {...route} />
        ))}
      </>
    </BrowserRouter>
  )
}

export default Routes
