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
      primary: '#F6F6F6',
      secondary: '#ECECED',
      hoverPrimary: '#ECECED',
      lighten: '#FCFCFC',
      bgMask: 'rgba(17, 22, 31, 0.76)',
      lightenGrey: '#D9DBDE',
      snackbar: '#2196f3',
      blue: '#1C65B8',
      blueSky: '#1867c0',
      buttonPrimary: '#2E384C',
      darkBlue: '#212938',
      skeleton: '#eee',
      button: mainColor
    },
    color: {
      primary: '#2E384C',
      secondary: '#5C5550',
      lighten: '#A1A5AD',
      darkGrey: '#686F7E',
      background: '#F6F6F6',
      lightenSecondary: '#F6F6F6',
      lightenThird: '#F7F7F7',
      white: '#fff',
      warning: '#E2A632',
      grey: '#8C929D',
      tags: '#5e5e5e',
      placeholder: '#9098A7',
      modal: '#bdbdbd',
      menuItemActive: '#fff',
      button: '#f7f7f7',
      hashTags: mainColor,
      label: '#8c929d'
    },
    borderRadius: {
      primary: '2px',
      secondary: '5px',
      field: '5px',
      button: '20px'
    },
    fontSize: {
      primary: laptopM ? '14px' : '16px',
      large: tabletL ? '34px' : laptopM ? '4.3vw' : '60px',
      biggest: tabletL ? '27px' : laptopM ? '3.9vw' : '50px',
      big: tabletL ? '23px' : laptopM ? '3.7vw' : '46px',
      medium: tabletL ? '23px' : laptopM ? '26px' : '32px',
      capital: tabletL ? '16px' : laptopM ? '23px' : '26px',
      capitalMedium: laptopM ? '16px' : '20px',
      small: laptopM ? '16px' : '18px',
      smallest: '15px',
      micro: '13px'
    },
    border: {
      primary: 'rgba(46, 56, 76, 0.26)',
      button: '#2E384C',
      secondary: '#E9EAEB',
      grey: '#E6E7EA',
      darkGrey: '#7B818E',
      buttonActive: `1px solid ${mainColor}`,
      field: '1px solid #e1e4e8',
      fieldActive: `1px solid ${mainColor}`
    },
    boxShadow: {
      primary: '0 1px 5px -1px rgba(157, 157, 157, 0.25)',
      nav: '0 0 5px rgba(193, 193, 193, 0.25)',
      tags: '0 0 4px -2px #c0c0c0',
      modal: '0 1px 10px rgba(157, 157, 157, 0.25)',
      field: 'inset 0 1px 7px #e3e3e3, inset -1px -1px 5px #fff'
    },
    width: {
      wrap: '1200px',
      wrapCenter: '393px',
      contentMain: 'calc(100% - 285px)',
      contentPost: '768px',
      aside: '260px',
      field: '300px'
    },
    height: {
      nav: '55px'
    },
    scrollbar: {
      thumb: '#DEDEDE'
    },
    table: {
      backgroundColor: 'rgba(234, 236, 240, 0.72)',
      border: 'none'
    },
    transition: {
      fast: '.1s ease-in-out',
      medium: '.2s ease-in-out',
      long: '.3s ease-in-out'
    }
  }
}

export default themes
