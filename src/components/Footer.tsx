import * as ROUTES from 'constants/routes'
import { mediaQueries } from 'constants/mediaQueries'
import menus from 'constants/menus'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { prop } from 'ramda'
import { Link } from 'react-router-dom'
import { MenusInterface } from 'types'
import Peach from 'media/Peach.png'
import Facebook from 'media/Facebook.png'
import Vk from 'media/Vk.png'
import { SearchIcon } from 'media/icons'
import Container from './Container'
import TextField from './ui/TextField'

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.background.dark};
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
`

const ContainerStyled = styled(Container)`
  display: grid;
  grid-template: 1fr / 1fr 1fr 3fr;
  @media ${mediaQueries.laptopS} {
    grid-template-columns: 1fr;
  }
`

const Contacts = styled('div')`
  padding: 44px 0px 15px 0px;
  @media ${mediaQueries.tabletL} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 30px 0px 24px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.border.darkGrey};
  }
`

const Date = styled('div')`
  & p {
    line-height: 1.5;
  }
`

const Menu = styled('div')`
  padding: 44px 0px 15px 54px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  position: relative;
  @media ${mediaQueries.tabletL} {
    grid-template-columns: 1fr;
    grid-column-start: 1;
    grid-column-end: 1;
    padding: 24px 0px 24px 0px;
  }
`
const MenuList = styled('div')`
  display: grid;
  gap: 20px 55px;
  position: relative;
  height: min-content;
  width: min-content;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content min-content;
  :after {
    content: " ";
    left: calc(50% - 1px);
    position: absolute;
    top: 0px;
    width: 1px;
    background: ${({ theme }) => theme.color.secondary};
    height: 100%;
    bottom: 0px;
  }
  @media ${mediaQueries.tabletL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${mediaQueries.tabletS} {
    grid-template-columns: auto auto;
  }
`

const MenuItem = styled('div')`
  cursor: pointer;
  user-select: none;
  &:hover {
    & span {
      border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
    }
  }
`

const Numbers = styled('div')`
  margin: 20px 0px;
  @media ${mediaQueries.tabletL} {
    margin-top: 3px;
  }
`
const Telephon = styled('div')`
  line-height: 1.5;
  font-weight: 500;
`

const Email = styled('a')`
  font-weight: 500;
`

const Social = styled('div')`
  padding: 44px 0px 15px 54px;
  font-weight: 500;
  display: flex;
`

const SocialPositions = styled('div')`
  margin: 0 0 0 auto;
`

const Logos = styled('div')`
  margin-top: 10px;
  margin-bottom: 30px;
  display: grid;
  grid-template: 1fr / 25px 25px;
  grid-gap: 15px;
`

const WeCreate = styled('div')`
  margin-top: 30px;
  display: flex;
  align-items: center;
  & p {
    margin-right: 10px;
  }
`

const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <ContainerStyled>
        <Contacts>
          <Date>
            <p>2014 <br/> Золотое сечение</p>
          </Date>
          <Numbers>
            <Telephon>+998 90 326 07 37</Telephon>
            <Telephon>+998 90 326 07 37</Telephon>
            <p>Заказать звонок</p>
          </Numbers>
          <Email href={'mailto:info@tgatour.uz'}>Info@shoto.com</Email>
        </Contacts>
        <Menu>
          <MenuList>
            {menus.map((item: MenusInterface, index) => {
              const url = prop('url', item)
              const label = prop('label', item)
              return (
                <Link to={url} key={index}>
                  <MenuItem key={index}>
                    <span>{label}</span>
                  </MenuItem>
                </Link>
              )
            })}
          </MenuList>
        </Menu>
        <Social>
          <SocialPositions>
            <p>Мы в соц сетях</p>
            <Logos>
              <a href="http://kuda.to"><img src={Facebook} alt={'Facebook'}/></a>
              <a href="http://kuda.to"><img src={Vk} alt={'Vk'}/></a>
            </Logos>
            <TextField size={'small'} name={'search'} prefix={<SearchIcon />} placeholder={'Поиск по сайту'} />
            <WeCreate>
              <p>Сделано в студии</p>
              <img src={Peach} alt={'Peach'}/>
            </WeCreate>
          </SocialPositions>
        </Social>
      </ContainerStyled>
    </Wrapper>
  )
}

export default Footer
