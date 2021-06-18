import { equals, is, path } from 'ramda'

const CONTENT_TYPE_JSON = 'application/json'

const responseToJSON = (data: any | never, response: any | never): any => {
  const responseContentType = path(['content-type'], response)
  if (equals(CONTENT_TYPE_JSON, responseContentType)) {
    return JSON.parse(data)
  }

  if (is(Object, data) || is(Array, data)) {
    return data
  }
  return data
}

export default responseToJSON
