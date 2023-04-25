import type { Component } from 'solid-js'
import { createSignal, createEffect } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { AppRouter } from './Router'
import { GlobalContext } from './GlobalContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App: Component = () => {
  const [user, setUser]: any = createSignal(null)
  const [authenticated, setAuthenticated] = createSignal<boolean>(false)

  const navigate = useNavigate()

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
    navigate('/auth/login')
  }

  return (
    <GlobalContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}>
      <div class='min-h-screen text-slate-900'>
        <Header {...{ handleLogout, authenticated }} />
        <main class={`min-h-[calc(100vh-80px-80px)] bg-slate-50 flex flex-col items-center p-20`}>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
