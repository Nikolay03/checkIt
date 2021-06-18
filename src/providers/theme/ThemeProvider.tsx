import theme from 'constants/themes'
import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import NormalizeCSS from 'themes/NormalizeCSS'
import MainCSS from 'themes/MainCSS'
import useWindowSize from 'hooks/useWindowResize'

// Component
const ThemeProvider = props => {
  const { children } = props
  const breakpoints = useWindowSize()
  // Render
  return (
    <Provider theme={theme(breakpoints)}>
      <>
        <NormalizeCSS />
        <MainCSS />
        {children}
      </>
    </Provider>
  )
}

export default ThemeProvider
