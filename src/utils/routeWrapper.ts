import * as ROUTES from 'constants/routes'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { getCookie } from 'utils/cookie'

export const userIsAuth = connectedRouterRedirect({
  authenticatedSelector: () => {
    return !!(getCookie('token'))
  },
  redirectPath: ROUTES.SIGN_IN_URL,
  wrapperDisplayName: 'Authenticated'
})
