import React, { FC } from 'react'
import { SvgIconOptional } from 'types/svgImages'
import SvgIcons from './SvgIcon'

const RightArrowAlt: FC<SvgIconOptional> = ({ color, ...props }) => {
  return (
    <SvgIcons fill={color} viewBox="0 0 24 24" {...props}>
      <path d="M12.6032 0.603534L23.9169 11.9172L22.5027 13.3315L11.189 2.01775L12.6032 0.603534Z" fill={color} />
      <path d="M0 11H23V13H0V11Z" fill={color} />
      <path d="M11.272 21.8999L22.5857 10.5862L23.9999 12.0004L12.6862 23.3141L11.272 21.8999Z" fill={color} />
    </SvgIcons>
  )
}

export default RightArrowAlt
