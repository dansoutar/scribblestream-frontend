import { Component, createSignal, createEffect } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { httpClient } from '../http'
import { BlogCard } from '../components/BlogCard/BlogCard'
import type { BlogPost } from '../components/BlogCard/Types'

export const HomePage: Component = () => {
  const [blogs, setBlogs] = createSignal<BlogPost[]>()

  const navigate = useNavigate()

  createEffect(() => {
    httpClient
      .get('/blog', { params: { order_by: 'created_at:desc' } })
      .then((response) => setBlogs(response.data.blogs))
      .catch((error) => {
        console.log(error)
        navigate('/auth/login')
      })
  })

  return (
    <div class='w-1/2 space-y-4'>
      {blogs() &&
        blogs()?.map((blogPost) => {
          return <BlogCard {...{ blogPost }} />
        })}
    </div>
  )
}
