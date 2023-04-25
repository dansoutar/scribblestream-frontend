import { Component, createSignal } from 'solid-js'
import { useContext } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { GlobalContext } from '../GlobalContext'
import { httpClient } from '../http'
import { PageContainer } from '../components/PageContainer'

const LABEL_STYLES = 'mb-2 font-semibold'

export const NewBlogPage: Component = () => {
  const [postContent, setPostContent] = createSignal('')
  const [postTitle, setPostTitle] = createSignal('')

  const navigate = useNavigate()

  const handleCreatePost = (event: MouseEvent) => {
    httpClient
      .post('/blog/', {
        title: postTitle(),
        content: postContent()
      })
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error.response.status)
        console.log(error.response.data)
      })
  }

  return (
    <PageContainer>
      <div class='flex flex-col  justify-center w-full'>
        <h1 class='text-3xl font-bold'>New Blog Post</h1>
        <div class='flex flex-col space-y-8  mt-20'>
          <div class='flex flex-col'>
            <label class={LABEL_STYLES} for='title'>
              Title
            </label>
            <input
              class='p-1 rounded'
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
              class='p-1 min-h-[400px] rounded'
              id='blog-post'
              name='blog-post'
              onChange={(e) => {
                setPostContent(e.target.value)
              }}
              value={postContent()}
            />
          </div>
          <button class='bg-slate-600 rounded p-3 text-white' type='submit' onClick={handleCreatePost}>
            Create new blog post
          </button>
        </div>
      </div>
    </PageContainer>
  )
}
