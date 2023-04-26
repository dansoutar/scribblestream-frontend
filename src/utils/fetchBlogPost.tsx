import { httpClient } from '../http'

import type { BlogPost } from '../components/BlogCard/Types'

type Props = {
  id: string
}

type FetchBlogPost = ({ id }: Props) => Promise<BlogPost>

export const fetchBlogPost: FetchBlogPost = async ({ id }) => {
  try {
    const response = await httpClient.get(`/blog/${id}`)
    return response.data.blog
  } catch (error) {
    console.log(error)
  }
}
