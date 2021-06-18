import Container from 'components/Container'
import React, { FC } from 'react'
import Breadcrumbs from 'components/Breadcrumbs'
import { BreadcrumbsTypes } from 'types'
import styled from 'styled-components'

const ContainerStyled = styled(Container)`
  background: ${({ theme }) => theme.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.border.primary};
  border-left: 1px solid ${({ theme }) => theme.border.primary};
  border-bottom: 1px dotted ${({ theme }) => theme.color.warning};
`
const GridLayout: FC<BreadcrumbsTypes> = ({ way, currentWay, children, ...props }) => {
  return (
    <>
      <ContainerStyled>
        <Breadcrumbs way={way} currentWay={currentWay} {...props} />
      </ContainerStyled>
      {children}
    </>
  )
}

export default GridLayout
