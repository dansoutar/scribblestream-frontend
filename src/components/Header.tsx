import { A as RouteLink } from '@solidjs/router'
import { Accessor } from 'solid-js'

type Props = {
  authenticated: Accessor<boolean>
  handleLogout(): void
}

const CTA_NAV_BUTTON_STYLES = 'bg-slate-400 px-3 py-1 rounded'

export const Header = ({ authenticated, handleLogout }: Props) => {
  return (
    <header class='h-20 flex flex-col justify-center content-center bg-white shadow-sm relative'>
      <nav class='flex flex-row space-x-5 mx-auto justify-between w-3/4'>
        <RouteLink href='/'>
          <span class='font-bold'>🖊️ Scribblestream</span>
        </RouteLink>
        <div class='space-x-6'>
          <RouteLink href='/new'>
            <span class={CTA_NAV_BUTTON_STYLES}>New blog</span>
          </RouteLink>
          {authenticated() ? (
            <span class='cursor-pointer' onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <RouteLink href='/auth/login'>
              <span>Login</span>
            </RouteLink>
          )}
        </div>
      </nav>
    </header>
  )
}
