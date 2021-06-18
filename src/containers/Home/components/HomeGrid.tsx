import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container'
import HomeIcon from './HomeIcon'
import Questions from './Questions'

const StyledContainer = styled(Container)`
  background: white;
  border-right: 1px solid ${({ theme }) => theme.border.primary};
  border-left: 1px solid ${({ theme }) => theme.border.primary};
`

const Wrapper = styled('div')`
  padding: 39px 0px;
`

const HomeGrid = () => {
  return (
    <StyledContainer>
      <Wrapper>
        <HomeIcon/>
        <Questions/>
      </Wrapper>
    </StyledContainer>
  )
}

export default HomeGrid
