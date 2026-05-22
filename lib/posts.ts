import postsIndex from '@/content/posts/_index.json'

export interface PostSummary {
  slug: string
  title: string
  description: string
  date: string
  featuredImage: string
}

export interface PostBlock {
  type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'li'
  text: string
}

export interface Post extends PostSummary {
  content: PostBlock[]
}

export function getPosts(): PostSummary[] {
  return (postsIndex as PostSummary[]).sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await import(`@/content/posts/${slug}.json`)
    return post.default as Post
  } catch {
    return null
  }
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return dateStr
  }
}
