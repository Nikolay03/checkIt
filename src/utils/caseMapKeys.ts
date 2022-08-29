import { curry, keys, map, values, zipObj } from 'ramda'
import { TObject } from 'types'

export default curry((fn: (str: string) => string, obj: TObject) => {
  return zipObj(map(fn, keys(obj)), values(obj))
})
