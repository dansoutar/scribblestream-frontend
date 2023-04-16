import type { Component } from 'solid-js'

import { useContext } from 'solid-js'
import { GlobalContext } from '../GlobalContext'

export const HomePage: Component = () => {
  const { authenticated }: any = useContext(GlobalContext)

  return <div>HomePage - authenticated: {authenticated() ? 'Logged in' : 'Not logged in'}</div>
}
