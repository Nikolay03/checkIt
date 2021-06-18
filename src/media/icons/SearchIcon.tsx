import React, { FC } from 'react'
import { SvgIconOptional } from 'types/svgImages'
import SvgIcons from './SvgIcon'

const SearchIcon: FC<SvgIconOptional> = ({ color, ...props }) => {
  return (
    <SvgIcons viewBox="0 0 21 21" fill={color} {...props}>
      <path d="M8.98167 17.4624C10.9388 17.4624 12.738 16.7892 14.1735 15.6729L18.8342 20.3333L20.3333 18.8343L15.6727 14.1738C16.7901 12.7373 17.4633 10.9383 17.4633 8.98122C17.4633 4.30489 13.6583 0.5 8.98167 0.5C4.30509 0.5 0.5 4.30489 0.5 8.98122C0.5 13.6576 4.30509 17.4624 8.98167 17.4624ZM8.98167 2.6203C12.4899 2.6203 15.3429 5.47318 15.3429 8.98122C15.3429 12.4893 12.4899 15.3421 8.98167 15.3421C5.47344 15.3421 2.62042 12.4893 2.62042 8.98122C2.62042 5.47318 5.47344 2.6203 8.98167 2.6203Z" />
    </SvgIcons>
  )
}

export default SearchIcon
