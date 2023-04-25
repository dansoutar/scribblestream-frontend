import type { Component } from 'solid-js'
import { Route, Routes } from '@solidjs/router'

import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NewBlogPage } from './pages/NewBlogPage'

export const AppRouter: Component = () => {
  return (
    <>
      <Routes>
        <Route path='/' component={HomePage} />
        <Route path='/new' component={NewBlogPage} />
        <Route path='/auth/login' component={LoginPage} />
      </Routes>
    </>
  )
}
