import { has } from 'ramda'
import { Reducer } from 'redux'

const createReducer = (initialState: Reducer | any, handlers: unknown): any => {
  return (state = initialState, action: any): any => {
    if (has(action.type, handlers)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export default createReducer
