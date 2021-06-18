import Container from 'components/Container'
import Footer from 'components/Footer'
import React from 'react'
import Header from 'components/Header'

// Component
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Layout
