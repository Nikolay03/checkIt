import * as CONST from 'constants/constants'
import { compose, is, curry, keys, map, values, zipObj, path, equals } from 'ramda'

// @ts-ignore
const mapKeys = curry((fn, obj): any => zipObj(map(fn, keys(obj)), values(obj)))

const camelize = (str: string): any => {
  return str
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/(?:^\w|[A-Z]|_|\b\w)/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    })
    .replace(/\s+/g, '')
}

const invocableCompose: any = compose

export const toCamelCase = (data: any | unknown): any => {
  if (is(Array, data)) {
    return map(toCamelCase, data)
  }

  if (is(Object, data)) {
    return invocableCompose(map(toCamelCase), mapKeys(camelize))(data)
  }

  return data
}

export const responseToCamelCase = (data: unknown | any, response: unknown): any => {
  const responseContentType = path(['content-type'], response)

  if (equals(CONST.CONTENT_TYPE_JSON, responseContentType)) {
    return toCamelCase(JSON.parse(data))
  }

  if (is(Object, data) || is(Array, data)) {
    return toCamelCase(data)
  }

  return data
}
