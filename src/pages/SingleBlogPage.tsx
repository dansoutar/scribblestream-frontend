import { Component, createSignal, createEffect, createResource, useContext } from 'solid-js'
import { useNavigate, useParams, A as RouteLink } from '@solidjs/router'

import { httpClient } from '../http'
import { PageContainer } from '../components/PageContainer'
import type { BlogPost } from '../components/BlogCard/Types'
import { GlobalContext } from '../GlobalContext'
import { fetchBlogPost } from '../utils/fetchBlogPost'

export const SingleBlogPage: Component = () => {
  const { id: blogPostId } = useParams()
  const { user }: any = useContext(GlobalContext)
  const navigate = useNavigate()

  const [blog] = createResource<BlogPost>(() => fetchBlogPost({ id: blogPostId }))

  const handleDeletePost = () => {
    httpClient.delete(`/blog/${blogPostId}`)
    navigate('/')
  }

  return (
    <PageContainer>
      <div class='space-y-6'>
        <div class='space-y-2'>
          <div class='text-3xl font-bold'>{blog()?.title}</div>
          <div class='text-lg text-slate-400'>{blog()?.user?.email}</div>
        </div>
        <div>{blog()?.content}</div>
        {user()?.id === blog()?.user.id && (
          <div class='space-x-2'>
            <RouteLink href={`/blog/update/${blogPostId}`}>
              <span class='bg-slate-600 px-3 py-1 rounded text-white'>Edit post</span>
            </RouteLink>
            <span class='bg-slate-900 px-3 py-1 rounded text-white cursor-pointer' onClick={handleDeletePost}>
              Delete post
            </span>
          </div>
        )}
      </div>
    </PageContainer>
  )
}
