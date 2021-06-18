import * as ROUTES from 'constants/routes'
import SignInContainer from 'containers/signIn/SignInContainer'
import Layout from "../providers/layout/Layout";

export default [
  // Sign in
  {
    path: ROUTES.ROOT_URL,
    layout: Layout,
    component: SignInContainer
  },
  // {
  //   path: '*',
  //   layout: LayoutProvider,
  //   component: userIsAuth(NotFoundContainer)
  // }
]
