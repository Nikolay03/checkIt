import React, { FC } from 'react'
import { SvgIconOptional } from 'types/svgImages'
import SvgIcon from './SvgIcon/SvgIcon'

const MenuBar: FC<SvgIconOptional> = ({ color, ...props }) => {
  return (
    <SvgIcon viewBox="0 0 24 16" fill="none" {...props}>
      <rect width="24" height="2" fill={color} />
      <rect y="7" width="24" height="2" fill={color} />
      <rect y="14" width="24" height="2" fill={color} />
    </SvgIcon>
  )
}

export default MenuBar
