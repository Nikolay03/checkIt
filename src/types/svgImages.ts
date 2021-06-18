import { ReactElement, ReactNode } from 'react'

export interface SvgIconInterface {
    classes?: object
    className?: string
    children: ReactNode
    fontSize: string
    style?: object
    fill?: string
    viewBox: string
    height: string
    width: string
    xmlns: string
}
export type ReactDefaultTypes = {
    onClick?: Function
    children?: ReactElement
}
export type SvgIconOptional = {
    color?: string
    xmlns?: string
    viewBox?: string
    width?: string
    height?: string
    fill?: string
    style?: object
}
