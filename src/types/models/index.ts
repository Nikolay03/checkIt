import { ReactElement } from 'react'

export interface MenusInterface {
  label: string
  isAuth?: boolean
  url: string
}

export interface WithOpen {
  isOpen: boolean | number
}

export type BreadcrumbsTypes = {
  way?: {
    url: string
    title: string
  }[]
  currentWay?: string
  withBorder?: boolean
  styles?: any
  titleBlock?: string | ReactElement
  style?: object
}
