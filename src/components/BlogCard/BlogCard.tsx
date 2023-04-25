import type { BlogPost } from './Types'

type Props = {
  blogPost: BlogPost
}

export const BlogCard = ({ blogPost }: Props) => {
  const {
    title,
    content,
    user: { email }
  } = blogPost

  return (
    <article class='overflow-hidden rounded-lg shadow transition hover:shadow-lg flex'>
      <div class='w-72'>
        <img alt='Office' src='https://picsum.photos/id/6/300/300' class='w-full h-full object-cover' />
      </div>
      <div class='bg-white p-4 sm:p-6 w-full'>
        <a href='#'>
          <h3 class='mt-0.5 text-lg text-slate-900'>{title}</h3>
        </a>
        <p class='mt-2 line-clamp-3 text-sm/relaxed text-slate-600'>{content}</p>
        <p class='mt-8 line-clamp-3 text-sm/relaxed text-slate-400'>{email}</p>
      </div>
    </article>
  )
}
