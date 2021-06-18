import React, { FC } from 'react'
import { SvgIconOptional } from 'types/svgImages'
import SvgIcon from './SvgIcon'

const DownloadFile: FC<SvgIconOptional> = ({ color, ...props }) => {
  return (
    <SvgIcon fill={color} viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.9997 22.6667L22.6663 15.5833H18.4163V5.66666H15.583V15.5833H11.333L16.9997 22.6667Z" />
      <path d="M28.333 25.5H5.66634V15.5833H2.83301V25.5C2.83301 27.0626 4.10376 28.3333 5.66634 28.3333H28.333C29.8956 28.3333 31.1663 27.0626 31.1663 25.5V15.5833H28.333V25.5Z" />
    </SvgIcon>
  )
}
export default DownloadFile
