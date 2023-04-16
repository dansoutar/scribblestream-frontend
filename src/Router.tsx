import type { Component } from 'solid-js'
import { Route, Routes } from '@solidjs/router'

import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

export const AppRouter: Component = () => {
  return (
    <>
      <Routes>
        <Route path='/' component={HomePage} />
        <Route path='/auth/login' component={LoginPage} />
      </Routes>
    </>
  )
}
