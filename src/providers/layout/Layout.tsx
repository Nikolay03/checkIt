import { Container } from 'components/StyledElems'
import React from 'react'

// Component
const Layout = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout
