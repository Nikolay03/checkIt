import * as actionTypes from 'constants/actionTypes'
import * as stateNames from 'constants/states'
import { combineReducers } from 'redux'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { compose, forEach, toPairs } from 'ramda'
import { TNewsItem } from 'types/models'
import createThunkReducer from 'utils/createThunkReducer'
import { AsyncReducers, TGetDataFromState } from 'types'

export type RootState = {
  orderList: TGetDataFromState<TNewsItem>;
  login: TGetDataFromState<any>;
  userInfo: any;
}

export const makeRootReducer = (asyncReducers: AsyncReducers) =>
  combineReducers({
    [stateNames.HOME]: createThunkReducer(actionTypes.HOME),
    ...asyncReducers
  })

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const injectReducers = (store, reducers) =>
  compose(
    forEach(([key, reducer]) => injectReducer(store, { key, reducer })),
    // @ts-ignore
    toPairs
    // @ts-ignore
  )(reducers)

type ThunkResult = {
  type: string;
  value: Record<string, any>;
}
export type PromiseThunksResult = (action: any) => Promise<ThunkResult>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const usePromiseDispatch: () => (action: any) => Promise<any> = useDispatch
