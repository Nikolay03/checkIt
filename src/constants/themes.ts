import { WindowSizes } from 'hooks/useWindowResize'

const mainColor = '#cb533c'
const greyColor = '#F6F6F6'
const widthPoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 465,
  tabletS: 550,
  tabletL: 800,
  laptopS: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktop: 2560
}
const themes = (breakpoints: WindowSizes) => {
  const laptopM = breakpoints.width <= widthPoints.laptopM
  const tabletL = breakpoints.width <= widthPoints.tabletL
  return {
    palette: {
      main: mainColor,
      primary: mainColor,
      black: '#000',
      green: '#38d06c',
      white: greyColor,
      yellow: '#febb01',
      orange: '#ff5216',
      grey: '#5f6368',
      blue: '#2196f3',
      red: '#d64a54',
      pink: '#d64a54',
      greyLight: '#e9e9e9'
    },
    background: {
      primary: '#FFFFFF',
      dark: '#333333',
      warning: '#FFE00E',
      body: '#f3f3f3',
      secondary: '#f9f9f9',
      hoverPrimary: '#ECECED',
      lighten: '#FCFCFC',
      bgMask: 'rgba(17, 22, 31, 0.76)',
      lightenGrey: '#D9DBDE',
      snackbar: '#2196f3',
      blue: '#1C65B8',
      blueSky: '#1867c0',
      buttonPrimary: '#2E384C',
      skeleton: '#eee',
      button: mainColor
    },
    color: {
      primary: '#333333',
      secondary: '#999999',
      lighten: '#A1A5AD',
      darkGrey: '#686F7E',
      background: '#F6F6F6',
      lightenSecondary: '#F6F6F6',
      lightenThird: '#F7F7F7',
      white: '#fff',
      warning: '#FFE00E',
      grey: '#8C929D',
      tags: '#5e5e5e',
      placeholder: '#9098A7',
    },
    borderRadius: {
      primary: '2px',
      secondary: '5px',
      field: '5px',
      button: '20px'
    },
    fontSize: {
      primary: laptopM ? '18px' : '20px',
      large: tabletL ? '34px' : laptopM ? '4.3vw' : '43px',
      big: tabletL ? '23px' : laptopM ? '3.7vw' : '34px',
      capital: tabletL ? '16px' : laptopM ? '18px' : '20px',
      medium: tabletL ? '16px' : laptopM ? '18px' : '18px',
      standart: tabletL ? '14px' : laptopM ? '14px' : '16px',
      small: laptopM ? '14px' : '14px',
      micro: '12px'
    },
    border: {
      primary: '#e8edf1',
      button: '#F5D307',
    },
    scrollbar: {
      thumb: '#DEDEDE'
    },
    transition: {
      fast: '.1s ease-in-out',
      medium: '.2s ease-in-out',
      long: '.3s ease-in-out'
    },
    layoutPadding: {
      XPadding: tabletL ? '15px' : laptopM ? '28px' : '39px',
    }
  }
}

export default themes
