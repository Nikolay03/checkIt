import React from 'react'
import Logo from 'media/Logo.png'
import styled from 'styled-components'
import { CONTAINER } from '../constants/const'
import Button from './ui/Button'
import DesktopMenu from './Menu/DesktopMenu'

const Wrapper = styled('div')`
  background: ${({ theme }) => theme.background.primary};
  box-shadow: 0px 2px 10px rgba(224, 224, 224, 0.57);
  position: relative;
`
const HeaderBlock = styled('header')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${CONTAINER}px;
  padding: 22px 39px 26px 39px;
  background: ${({ theme }) => theme.background.primary};
`

const WithBorder = styled('div')`
  border-bottom: 1px solid ${({ theme }) => theme.border.primary};
`
const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  max-height: 39px;
`

const LogoText = styled('div')`
  margin-left: 9px;
  h2 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.primary};
  }
  p {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`

const Connection = styled('div')`
  display: flex;
  align-items: center;
`

const ConnectionTexts = styled('div')`
  margin-top: 10px;
  margin-right: 24px;
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

const Header = () => {
  return (
    <Wrapper>
      <WithBorder>
        <HeaderBlock>
          <LogoContainer>
            <img src={Logo} alt="Logo"/>
            <LogoText>
              <h2>ЗОЛОТОЕ СЕЧЕНИЕ</h2>
              <p>Решения для жизни</p>
            </LogoText>
          </LogoContainer>
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
          <Button themeType={'lighten'}>Мой заказ</Button>
        </HeaderBlock>
      </WithBorder>
      <DesktopMenu />
    </Wrapper>
  )
}

export default Header
