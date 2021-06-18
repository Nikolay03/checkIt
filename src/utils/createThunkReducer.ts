import createReducer from 'utils/createReducer'

const defaultState = {
  data: null,
  success: false,
  error: null,
  failed: false,
  loading: false
}

export const actions = (actionName: string): any => ({
  [`${actionName}_PENDING`] (state) {
    return {
      ...state,
      loading: true
    }
  },
  [`${actionName}_FULFILLED`] (state, action) {
    return {
      ...state,
      data: action.payload,
      success: true,
      error: null,
      failed: false,
      loading: false
    }
  },
  [`${actionName}_MORE_PENDING`] (state) {
    return {
      ...state,
      loading: true
    }
  },
  [`${actionName}_MORE_FULFILLED`] (state, { payload: { results, ...payload } }) {
    return {
      ...state,
      data: {
        results: [...state.data.results, ...results],
        ...payload
      },
      success: true,
      error: null,
      failed: false,
      loading: false
    }
  },
  [`${actionName}_REJECTED`] (state, action) {
    return {
      ...state,
      data: null,
      success: false,
      error: action.payload,
      failed: true,
      loading: false
    }
  },
  [`${actionName}_CLEAR`] () {
    return defaultState
  }
})

const createThunkReducer = (actionName: string): any => {
  return createReducer(defaultState, actions(actionName))
}

export default createThunkReducer
