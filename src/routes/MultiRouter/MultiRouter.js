import React from 'react'
import { Route } from 'react-router-dom'

// Component
const MultiRouter = route => {
  return (
    <>
      <Route
        exact={true}
        path={route.path}
        render={props => {
          return (
            <route.layout title={route.title}>
              <route.component {...props} />
            </route.layout>
          )
        }}
      />
      {route.routes.map((route, index) => {
        return (
          <MultiRouter
            key={index}
            {...route}
          />
        )
      })}
    </>
  )
}

MultiRouter.defaultProps = {
  routes: []
}

export default MultiRouter
