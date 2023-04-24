import { A as RouteLink } from '@solidjs/router'
import { Accessor } from 'solid-js'

type Props = {
  authenticated: Accessor<boolean>
  handleLogout(): void
}

const NAV_BUTTON_STYLES = 'bg-slate-400 px-3 py-1 rounded'

export const Header = ({ authenticated, handleLogout }: Props) => {
  return (
    <header class='h-16 flex flex-col justify-center content-center bg-slate-200'>
      <nav class='flex flex-row space-x-5 mx-auto justify-between  w-3/4'>
        <RouteLink href='/'>
          <span class='font-bold'>🖊️ Scribblestream</span>
        </RouteLink>
        {authenticated() ? (
          <button class={NAV_BUTTON_STYLES} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <RouteLink href='/auth/login'>
            <button class={NAV_BUTTON_STYLES}>Login</button>
          </RouteLink>
        )}
      </nav>
    </header>
  )
}
