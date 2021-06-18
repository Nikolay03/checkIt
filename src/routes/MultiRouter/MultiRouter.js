import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

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

MultiRouter.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  component: PropTypes.any.isRequired,
  layout: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  routes: PropTypes.array
}

MultiRouter.defaultProps = {
  routes: []
}

export default MultiRouter
