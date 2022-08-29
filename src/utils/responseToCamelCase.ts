import { equals, is, path } from 'ramda'
import toCamelCase from './toCamelCase'

const CONTENT_TYPE_JSON = 'application/json'

const responseToCamelCase = (data: any | never, response: any | never): any => {
  const responseContentType = path(['content-type'], response)

  if (equals(CONTENT_TYPE_JSON, responseContentType)) {
    return toCamelCase(JSON.parse(data))
  }

  if (is(Object, data) || is(Array, data)) {
    return toCamelCase(data)
  }

  return data
}

export default responseToCamelCase
