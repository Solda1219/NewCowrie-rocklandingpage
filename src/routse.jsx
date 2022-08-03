import { lazy } from 'react'

const HomePage = lazy(() => import('./view/HomePage'))

const RouteList = [
  { exact: true, path: "/",    component: HomePage },
]


export default RouteList