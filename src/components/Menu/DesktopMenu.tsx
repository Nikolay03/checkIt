import menus, { desktopMenu } from 'constants/menus'
import { mediaQueries } from 'constants/mediaQueries'
import { CONTAINER } from 'constants/const'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MenusInterface } from 'types'
import { Link } from 'react-router-dom'

const Wrapper = styled('div')`
  margin: 0 auto;
  max-width: ${CONTAINER}px;
  padding: 20px 39px 20px 39px;
  align-self: center;
  display: flex;
  position: relative;
  @media ${mediaQueries.laptopM} {
    display: none;
  }
`

const Header = styled('div')`
  height: 91px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.secondary};
  min-height: 91px;
  display: flex;
`

const MenuList = styled('nav')<{ length: number }>`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ length }) => `repeat(${length}, min-content)`};
  grid-gap: 30px;
`

const MenuItem = styled('a')`
  height: min-content;
  color: ${props => props.theme.color.primary};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.primary};
  font-weight: 500;
  transition: ${props => props.theme.transition};
  &.active {
    color: ${({ theme }) => theme.color.warning};
  }
  &:hover {
    color: ${({ theme }) => theme.color.warning};
  }
`

const DesktopMenu = (): ReactElement => {
  return (
    <Wrapper>
      <MenuList length={menus.length}>
        {desktopMenu.map((item: MenusInterface, index) => {
          const url = prop('url', item)
          const label = prop('label', item)
          return (
            <Link to={url} key={index}>
              <MenuItem>
                <span>{label}</span>
              </MenuItem>
            </Link>
          )
        })}
      </MenuList>
    </Wrapper>
  )
}

export default DesktopMenu
