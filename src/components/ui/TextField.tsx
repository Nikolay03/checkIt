import React, { FormEvent, ReactElement } from 'react'
import styled from 'styled-components'

interface TextFieldInterface {
  description?: string | ReactElement
  labelRight?: ReactElement
  required?: boolean
  onChange?: (event: FormEvent<HTMLInputElement>) => void | any
  name: string
  api?: any
  params?: any
  prefix?: ReactElement
  placeholder?: string
  type?: string
  fullWidth?: boolean
  defaultValue?: any
  multiline?: boolean
  suffix?: ReactElement
  size?: string
  disabled?: boolean
  styles?: any
}

// Component
const Wrap = styled('div')`
  display: flex;
  flex-flow: column nowrap;
`

const InputWrap = styled('div')<{ fullWidth?: boolean }>`
  position: relative;
  width: ${({ fullWidth }) => fullWidth && '100%'};
`
const Description = styled('p')`
  margin-top: 12px;
  font-size: 12px;
  margin-left: 24px;
  color: ${({ theme }) => theme.color.secondary};
`
const Sub = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  svg {
    max-width: 15px;
    max-height: 15px;
  }
`
const Prefix = styled(Sub)`
  left: 0;
`
const Suffix = styled(Sub)`
  right: 5px;
`

interface FieldInterface {
  suffix?: ReactElement
  size?: 'small'
  styles?: any
}

const StyledTextField = styled('input')<FieldInterface & any>`
  padding: 16px ${({ suffix }) => (suffix ? '45px' : '24px')} 16px ${({ prefix }) => (prefix ? '35px' : '24px')};
  height: ${({ size }) => (size === 'small' ? '36px' : '50px')};
  border: 1px solid transparent;
  font-weight: 500;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  font-size: 16px;
  color: ${({ theme }) => theme.color.primary};
  &:focus {
    background: #fff;
    border-color: ${({ theme }) => theme.background.button};
  }
  &:disabled {
    ${({ theme }) => theme.color.disabled};
  }
  svg {
    max-width: 20px;
    max-height: 20px;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.secondary};
  }
  svg {
    max-width: 20px;
    max-height: 20px;
    color: ${({ theme }) => theme.color.primary};
  }
  ${({ styles }) => styles};
`

const TextField = (props: TextFieldInterface) => {
  const {
    required = false,
    type,
    placeholder,
    labelRight,
    fullWidth,
    onChange,
    defaultValue,
    multiline,
    prefix,
    description,
    suffix,
    size,
    disabled,
    styles,
    ...defaultProps
  } = props

  // Input
  const typeInput = (
    <StyledTextField
      prefix={prefix}
      suffix={suffix}
      step={'any'}
      size={size}
      placeholder={placeholder || 'Введите текст'}
      defaultValue={defaultValue}
      disabled={disabled}
      styles={styles}
      required={required}
      autoComplete={'off'}
    />
  )

  // Render
  return (
    <Wrap>
      <InputWrap fullWidth={fullWidth}>
        {prefix && <Prefix>{prefix}</Prefix>}
        {typeInput}
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputWrap>
    </Wrap>
  )
}

export default TextField
