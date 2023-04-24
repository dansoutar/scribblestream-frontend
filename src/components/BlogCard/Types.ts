export type BlogPost = {
  id: number
  title: string
  content: string
  user_id: number
  created_at: string
  updated_at: string
  user: {
    id: number
    email: string
    password: string
    created_at: string
    updated_at: string
  }
}
