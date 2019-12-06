import React from 'react'
import { Switch } from 'react-router-dom'
import {
  Home,
  About,
  Dashboard,
  Authentication,
  Products,
  Users
   } from '../../view-layer/pages'

import RouteWithLayout from '../../view-layer/layouts/RouteWithLayout'
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
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MinimalLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={Users}
        exact
        layout={MinimalLayout}
        path="/users"
      />
      <RouteWithLayout
        component={Products}
        exact
        layout={MinimalLayout}
        path="/products"
      />
      <RouteWithLayout
        component={Authentication}
        exact
        layout={MinimalLayout}
        path="/signin"
      />
    </Switch>
  )
}

export default AppRouter
