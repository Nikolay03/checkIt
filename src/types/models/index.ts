export * from './settings'
export * from './users'
export * from './faq'
export * from './news'
export * from './events'
export * from './feedback'
export * from './request'
export * from './hcp'
export * from './transaction'

export type TLanguages = {
  id: number | string,
  name: string
}
export type TIdName = {
  id: number;
  name: string;
}

export type TReportsItem = {
  name: string,
  id: number,
  miniDescription: string,
  description: string,
  language: string,
  category: string,
  isFree: boolean,
  price: number,
  file: {
    id: number,
    url: string
  },
  previewFile: {
    id: number,
    url: string
  },
  worldType: string,
  worlds: []
}
