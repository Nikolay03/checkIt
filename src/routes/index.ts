import * as ROUTES from 'constants/routes'
import Layout from 'providers/layout/Layout'
import HomeContainer from 'containers/Home/HomeContainer'

export default [
  // Home
  {
    path: ROUTES.ROOT_URL,
    layout: Layout,
    component: HomeContainer
  },
  // {
  //   path: '*',
  //   layout: NoLayout,
  //   component: userIsAuth(NotFoundContainer)
  // }
]
