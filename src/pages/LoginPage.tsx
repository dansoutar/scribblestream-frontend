import { Component, createSignal } from 'solid-js'
import { useContext } from 'solid-js'
import { GlobalContext } from '../GlobalContext'

import { httpClient } from '../http'

export const LoginPage: Component = () => {
  const { setAuthenticated }: any = useContext(GlobalContext)

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
        // localStorage.setItem('user', JSON.stringify(response.data.user));
        // setUser(response.data.user);
        // navigate('/');
      })
      .catch((error) => {
        console.log(error.response.status)
        console.log(error.response.data)
      })

    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <input class='text-black' type='text' value={email()} onChange={(e) => setEmail(e.currentTarget.value)} />
      <input class='text-black' type='text' value={password()} onChange={(e) => setPassword(e.currentTarget.value)} />
      <button onclick={handleLogin}>Login</button>
    </div>
  )
}
