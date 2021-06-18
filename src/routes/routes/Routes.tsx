import React from 'react'
import routes from 'routes/index'
import MultiRouter from 'routes/MultiRouter/MultiRouter'
import { BrowserRouter, Route } from 'react-router-dom'
import SideBarMenu from 'components/Drawer/SidebarMenu'

// Component
const Routes = () => {
  return (
    <BrowserRouter>
      <>
        {routes.map((route, key) => (
          <MultiRouter key={key} {...route} />
        ))}
        <Route component={SideBarMenu} exact={false}/>
      </>
    </BrowserRouter>
  )
}

export default Routes
