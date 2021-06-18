import React, { FC } from 'react'
import styled, { withTheme } from 'styled-components'

interface Button {
  width?: string
  fullWidth?: boolean
  loading?: boolean
  background?: string
  styles?: any
  size?: string
  themeType?: 'lighten' | 'warning'
  color?: string
}

const typeSizes = (size, theme) => {
  switch (size) {
  default:
    return {
      padding: '15px 26px',
      lineHeight: '19px',
      fontWeight: 700,
      fontSize: '15px'
    }
  }
}

const typeStyles = (themeType, theme) => {
  switch (themeType) {
  case 'lighten':
    return {
      color: '#01a5da',
      textDecoration: 'underline',
      textDecorationColor: '#01a5da',
      border: `1px solid ${theme.border.primary}`,
      background: 'transparent'
    }
    //
  case 'warning':
    return {
      color: theme.color.primary,
      border: `1px solid ${theme.border.button}`,
      background: theme.background.warning
    }
  default:
    return {
      color: theme.color.button,
      background: theme.background.button
    }
  }
}
// Styles
const Wrap = styled('button')<Button>`
  width: ${({ width, fullWidth }) => width || (fullWidth && '100%')};
  min-width: ${({ loading }) => loading && '140px'};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  line-height: 17px;
  transition: ${({ theme }) => `all ${theme.transition.medium}`};
  &:active {
    opacity: 0.8;
    transition: ${({ theme }) => `all ${theme.transition.medium}`};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.background.buttonDisabled};
    color: ${({ theme }) => theme.color.buttonDisabled};
    transition: ${({ theme }) => `all ${theme.transition.medium}`};
  }
  ${({ styles }) => styles};
  ${({ size, theme }) => typeSizes(size, theme)}
  ${({ themeType, theme }) => typeStyles(themeType, theme)}
`

// Interface
interface ButtonInterface {
  onClick?: any
  styles?: any
  loading?: boolean
  type?: 'submit' | 'button'
  themeType?: 'lighten' | 'warning'
  size?: 'small' | 'medium' | 'big' | 'large'
  width?: string
  disabled?: boolean
  fullWidth?: boolean
  theme: any
}

// Component
const Button: FC<ButtonInterface> = props => {
  const { width, size, fullWidth, type = 'submit', themeType, disabled = false, onClick, loading, children, styles } = props

  // TypeStyles
  // Render
  return (
    <Wrap
      type={type}
      loading={loading}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      width={width}
      onClick={(!loading && onClick) || (() => '')}
      styles={styles}
      themeType={themeType}
    >
      {children}
    </Wrap>
  )
}

Button.defaultProps = {
  size: 'small'
}

export default withTheme(Button)
