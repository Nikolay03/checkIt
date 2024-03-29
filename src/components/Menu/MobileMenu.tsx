import menus from 'constants/menus'
import { mediaQueries } from 'constants/mediaQueries'
import { LAYOUT_PADDING } from 'constants/const'
import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { MenuBar, RightArrowAlt } from 'media/icons'
import { MenusInterface, WithOpen } from 'types'
import { Link } from 'react-router-dom'
import { ReactDefaultTypes } from 'types/svgImages'
import hexToRgba from 'utils/hexToRgba'
import Button from '../ui/Button'

const transition = 'all 200ms ease-out'

const Wrapper = styled('div')`
  align-self: center;
  position: relative;
  margin-left: auto;
  display: none;
  @media ${mediaQueries.laptopS} {
    display: block;
  }
`

const IconTrigger = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 4vw;
  & svg {
    fill: ${({ theme }) => theme.color.primary};
  }
  :hover {
    color: ${({ theme }) => theme.color.warning};
    & svg {
      color: ${({ theme }) => theme.color.warning};
      transition: fill 0ms;
      fill: ${({ theme }) => theme.color.warning};
    }
  }
  @media ${mediaQueries.minLaptopM} {
  }
  @media ${mediaQueries.laptopM} {
  }
  @media ${mediaQueries.tabletS} {
    height: ${LAYOUT_PADDING}px;
  }
`

const Hamburger = styled(MenuBar)`
  display: block;
  height: 16px;
  width: 24px;
`

const Header = styled('div')`
  height: 91px;
  justify-content: flex-end;
  display: flex;
`

const CloseButton = styled('div')`
  display: flex;
  align-items: center;
  padding: 0px 33px 0px 50px;
`

const CloseMenu = styled(RightArrowAlt)<ReactDefaultTypes>`
  cursor: pointer;
  font-size: 15px;
  height: 22px;
  width: 24px;
  fill: ${({ theme }) => theme.color.primary};
  &:hover {
    fill: ${({ theme }) => theme.color.warning};
  }
`

const MenuContent = styled('div')<WithOpen>`
  background: ${props => props.theme.background.primary};
  box-shadow: ${({ isOpen }) => (isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.05)' : 'none')};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -3px;
  bottom: 0;
  transition: ${transition};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '543px')});
  overflow-y: auto;
  max-width: 300px;
  width: 100%;
  z-index: 100;
`

const ElonMusk = styled('div')<WithOpen>`
  background-color: ${hexToRgba('#000000', 0.18)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: ${transition};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  z-index: 90;
`

const MenuList = styled('nav')`
  flex-grow: 1;
  padding: 0px 10px 40px 40px;
  & button {
    margin-top: 15px;
  }
`

const MenuItem = styled('div')`
  color: ${props => props.theme.color.primary};
  line-height: 20px;
  padding: 15px 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.capital};
  font-weight: 500;
  transition: ${props => props.theme.transition};
  &.active {
    color: ${({ theme }) => theme.color.warning};
  }
  &:hover {
    color: ${({ theme }) => theme.color.warning};
  }
`

const ContentMenu = styled('div')`
  overflow-y: auto;
  min-height: calc(100% - 91px);
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled('div')``

const Connection = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`

const ConnectionTexts = styled('div')`
  text-align: center;
  margin-bottom: 10px;
`
const TelNumber = styled('span')`
  font-size: ${({ theme }) => theme.fontSize.primary};
  font-weight: 600;
  margin-right: 7px;
`
const Hour = styled('span')`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.micro};
`

const MobileMenu: FC = ({ }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)
  const onMenuOpen = (): void => setMenuIsOpen(true)
  const onMenuClose = (): void => setMenuIsOpen(false)
  React.useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      // @ts-ignore
      document.body.style = null
    }
  }, [menuIsOpen])

  return (
    <Wrapper>
      <IconTrigger onClick={onMenuOpen}>
        <Hamburger />
      </IconTrigger>

      <ElonMusk isOpen={menuIsOpen} onClick={onMenuClose} />
      <MenuContent isOpen={menuIsOpen}>
        <Header>
          <CloseButton>
            <CloseMenu onClick={onMenuClose} />
          </CloseButton>
        </Header>
        <ContentMenu>
          <MenuList>
            {menus.map((item: MenusInterface, index) => {
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
          <Connection>
            <ConnectionTexts>
              <TelNumber>
                8 800 809 890 908
              </TelNumber>
              <Hour>
                До 21:00
              </Hour>
            </ConnectionTexts>
            <Button themeType={'warning'}>Бесплатная консультация </Button>
          </Connection>
        </ContentMenu>
      </MenuContent>
    </Wrapper>
  )
}

export default MobileMenu
