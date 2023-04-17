import { Component, createSignal, createEffect } from 'solid-js'
import { useContext } from 'solid-js'

import { GlobalContext } from '../GlobalContext'
import { httpClient } from '../http'

export const HomePage: Component = () => {
  const { authenticated }: any = useContext(GlobalContext)

  const [blogs, setBlogs]: any = createSignal()

  createEffect(() => {
    httpClient
      .get('/blog', { params: { order_by: 'created_at:desc' } })
      .then((response) => setBlogs(response.data.blogs))
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <div>
      HomePage - authenticated: {authenticated() ? 'Logged in' : 'Not logged in'}
      {blogs() &&
        blogs().map((blog: any) => {
          return <div>{blog.title}</div>
        })}
    </div>
  )
}
