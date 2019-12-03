import React from 'react'
import { Switch } from 'react-router-dom'
import { Home, About } from '../../view-layer/pages'

import RouteWithLayout from './RouteWithLayout'
import { Minimal as MinimalLayout } from '../../view-layer/layouts'

const AppRouter = () => {
  return (
    <Switch>
      <RouteWithLayout component={Home} exact layout={MinimalLayout} path="/" />
      <RouteWithLayout
        component={About}
        exact
        layout={MinimalLayout}
        path="/about"
      />
    </Switch>
  )
}

export default AppRouter
