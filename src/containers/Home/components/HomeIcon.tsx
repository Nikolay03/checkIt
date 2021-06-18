import React from 'react'
import Home from 'media/Home.jpg'
import styled from 'styled-components'

const House = styled('div')`
 max-height: 486px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const HomeIcon = () => {
  return (
    <House>
      <img src={Home} alt=""/>
    </House>
  )
}

export default HomeIcon
