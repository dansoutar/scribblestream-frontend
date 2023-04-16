import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { A as RouteLink } from '@solidjs/router'

import { AppRouter } from './Router'
import { GlobalContext } from './GlobalContext'

const App: Component = () => {
  const [user, setUser]: any = createSignal(null)
  const [authenticated, setAuthenticated]: any = createSignal(false)

  return (
    <GlobalContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}>
      <div class='min-h-screen bg-slate-800 text-white'>
        <header class='h-16 flex flex-row justify-center'>
          <nav class='flex flex-row space-x-4'>
            <RouteLink href='/'>Home</RouteLink>
            <RouteLink href='/auth/login'>Login</RouteLink>
          </nav>
        </header>
        <main class='min-h-[calc(100vh-64px-64px)]'>
          <AppRouter />
        </main>
        <footer>Footer</footer>
      </div>
    </GlobalContext.Provider>
  )
}

export default App
