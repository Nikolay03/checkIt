import React, { FC } from 'react'
import { SvgIconOptional } from 'types/svgImages'
import SvgIcon from './SvgIcon'

const Facebook: FC<SvgIconOptional> = ({ color, ...props }) => {
  return (
    <SvgIcon viewBox="0 0 36 36" fill={color} {...props}>
      <circle cx="18" cy="18" r="18" fill="white" />
      <path
        d="M36 18C36 8.06039 27.9396 0 18 0C8.06039 0 0 8.06039 0 18C0 27.9396 8.06039 36 18 36C18.1057 36 18.2109 35.9978 18.3164 35.9959V21.9836H14.4492V17.4768H18.3164V14.1603C18.3164 10.314 20.6645 8.22052 24.0955 8.22052C25.7385 8.22052 27.1508 8.34302 27.5625 8.39767V12.4176H25.1966C23.33 12.4176 22.9686 13.3047 22.9686 14.6063V17.4768H27.4318L26.85 21.9836H22.9686V35.3046C30.4923 33.1477 36 26.2161 36 18Z"
        fill={color}
      />
    </SvgIcon>
  )
}

export default Facebook
