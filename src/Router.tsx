import type { Component } from 'solid-js'
import { Route, Routes } from '@solidjs/router'

import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NewBlogPage } from './pages/NewBlogPage'
import { SingleBlogPage } from './pages/SingleBlogPage'
import { UpdateBlogPage } from './pages/UpdateBlogPage'

export const AppRouter: Component = () => {
  return (
    <>
      <Routes>
        <Route path='/' component={HomePage} />
        <Route path='/auth/login' component={LoginPage} />
        <Route path='/blog/new' component={NewBlogPage} />
        <Route path='/blog/:id' component={SingleBlogPage} />
        <Route path='/blog/update/:id' component={UpdateBlogPage} />
      </Routes>
    </>
  )
}
