import type { Component } from 'solid-js'
import { createSignal, createEffect } from 'solid-js'
import { A as RouteLink } from '@solidjs/router'

import { AppRouter } from './Router'
import { GlobalContext } from './GlobalContext'

const App: Component = () => {
  const [user, setUser]: any = createSignal(null)
  const [authenticated, setAuthenticated]: any = createSignal(false)

  createEffect(() => {
    const localStorageUser = localStorage.getItem('user')
    const loggedInUser = localStorageUser && JSON.parse(localStorageUser)
    const accessToken = localStorage.getItem('access_token')

    if (!loggedInUser || !accessToken) {
      return
    }

    setUser(loggedInUser)
    setAuthenticated(true)
  })

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    setUser(null)
    setAuthenticated(false)
  }

  return (
    <GlobalContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}>
      <div class='min-h-screen bg-slate-900    text-white'>
        <header class='h-16 flex flex-col justify-center content-center'>
          <nav class='flex flex-row space-x-5 mx-auto'>
            <RouteLink href='/'>Home</RouteLink>
            {authenticated() ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <RouteLink href='/auth/login'>Login</RouteLink>
            )}
          </nav>
        </header>

        <main class='min-h-[calc(100vh-64px-64px)] bg-slate-950'>
          <AppRouter />
        </main>

        <footer class='h-16 flex flex-col justify-center content-center bg-slate-900'>
          <div class='text-center'>This is a demo app.</div>
        </footer>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
