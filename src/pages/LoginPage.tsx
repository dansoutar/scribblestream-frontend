import { Component, createSignal } from 'solid-js'
import { useContext } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { GlobalContext } from '../GlobalContext'

import { httpClient } from '../http'

export const LoginPage: Component = () => {
  const { setUser, setAuthenticated }: any = useContext(GlobalContext)

  const navigate = useNavigate()

  const [email, setEmail] = createSignal('')
  const [password, setPassword] = createSignal('')

  const handleLogin = () => {
    httpClient
      .post('/auth/login/', {
        email: email(),
        password: password()
      })
      .then((response) => {
        localStorage.setItem('access_token', response.data.access_token)
        setAuthenticated(true)

        localStorage.setItem('user', JSON.stringify(response.data.user))
        setUser(response.data.user)

        navigate('/')
      })
      .catch((error) => {
        console.log(error.response.status)
        console.log(error.response.data)
      })

    setEmail('')
    setPassword('')
  }

  return (
    <div class='flex  justify-center w-full'>
      <div class='flex flex-col space-y-3 w-1/3 mt-20'>
        <div class='flex flex-col'>
          <label for='email'>Email</label>
          <input
            class='p-1'
            type='text'
            name='email'
            value={email()}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div class='flex flex-col'>
          <label for='password'>Password</label>
          <input
            class='p-1'
            type='text'
            name='password'
            value={password()}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button class='bg-slate-600 rounded p-1 text-white' onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}
