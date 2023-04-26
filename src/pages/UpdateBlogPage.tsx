import { Component, createEffect, createResource, createSignal } from 'solid-js'
import { useParams, useNavigate } from '@solidjs/router'

import { httpClient } from '../http'
import { PageContainer } from '../components/PageContainer'
import { fetchBlogPost } from '../utils/fetchBlogPost'

const LABEL_STYLES = 'mb-2 font-semibold'

export const UpdateBlogPage: Component = () => {
  const navigate = useNavigate()
  const { id: blogPostId } = useParams()

  const [postTitle, setPostTitle] = createSignal('')
  const [postContent, setPostContent] = createSignal('')

  createEffect(() => {
    const getCurrentBlogPost = async () => {
      try {
        const currentBlogPost = await fetchBlogPost({ id: blogPostId })
        setPostTitle(currentBlogPost.title)
        setPostContent(currentBlogPost.content)
      } catch (error) {
        console.log(error)
      }
    }
    getCurrentBlogPost()
  })

  const handleUpdateBlogPost = async () => {
    httpClient
      .patch(`/blog/${blogPostId}`, {
        title: postTitle(),
        content: postContent()
      })
      .then(() => {
        navigate(`/blog/${blogPostId}`)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <PageContainer>
      <div class='flex flex-col  justify-center w-full'>
        <h1 class='text-3xl font-bold'>Edit Blog Post</h1>
        <div class='flex flex-col space-y-8  mt-20'>
          <div class='flex flex-col'>
            <label class={LABEL_STYLES} for='title'>
              Title
            </label>
            <input
              class='p-2 rounded'
              type='text'
              id='title'
              name='title'
              value={postTitle()}
              onChange={(e) => {
                setPostTitle(e.target.value)
              }}
            />
          </div>
          <div class='flex flex-col'>
            <label class={LABEL_STYLES} for='title'>
              Post
            </label>
            <textarea
              class='p-3 min-h-[400px] rounded'
              id='blog-post'
              name='blog-post'
              value={postContent()}
              onChange={(e) => {
                setPostContent(e.target.value)
              }}
            />
          </div>
          <button class='bg-slate-600 rounded p-3 text-white' onClick={handleUpdateBlogPost}>
            Update blog post
          </button>
        </div>
      </div>
    </PageContainer>
  )
}
