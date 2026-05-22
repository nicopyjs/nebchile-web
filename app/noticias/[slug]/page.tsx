import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPost, getPosts, formatDate, type PostBlock } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  }
}

function renderBlock(block: PostBlock, idx: number) {
  const text = block.text
  switch (block.type) {
    case 'h2': return <h2 key={idx} className="text-2xl font-bold text-neb-gold mt-8 mb-4">{text}</h2>
    case 'h3': return <h3 key={idx} className="text-xl font-semibold text-neb-gold mt-6 mb-3">{text}</h3>
    case 'h4': return <h4 key={idx} className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">{text}</h4>
    case 'li': return (
      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 leading-relaxed">
        <span className="text-neb-gold mt-1.5 flex-shrink-0">•</span>{text}
      </li>
    )
    default: return <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{text}</p>
  }
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  const posts = getPosts()
  const currentIdx = posts.findIndex((p) => p.slug === params.slug)
  const prev = currentIdx < posts.length - 1 ? posts[currentIdx + 1] : null
  const next = currentIdx > 0 ? posts[currentIdx - 1] : null

  const renderedBlocks: React.ReactNode[] = []
  let liBuffer: PostBlock[] = []

  post.content.forEach((block, idx) => {
    if (block.type === 'li') {
      liBuffer.push(block)
    } else {
      if (liBuffer.length > 0) {
        renderedBlocks.push(
          <ul key={`ul-${idx}`} className="space-y-2 mb-4 pl-2">
            {liBuffer.map((b, i) => renderBlock(b, i))}
          </ul>
        )
        liBuffer = []
      }
      renderedBlocks.push(renderBlock(block, idx))
    }
  })
  if (liBuffer.length > 0) {
    renderedBlocks.push(
      <ul key="ul-end" className="space-y-2 mb-4 pl-2">
        {liBuffer.map((b, i) => renderBlock(b, i))}
      </ul>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/noticias" className="hover:text-neb-gold transition-colors">Noticias</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 dark:text-gray-200 line-clamp-1">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        {post.date && <p className="text-sm text-gray-400 mb-3">{formatDate(post.date)}</p>}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">{post.title}</h1>
        {post.featuredImage && (
          <div className="relative w-full h-72 rounded-xl overflow-hidden bg-gray-100 dark:bg-neb-dark-surface">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="mb-14">
        {renderedBlocks}
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 dark:border-neb-dark-border pt-10 grid grid-cols-2 gap-4">
        {prev && (
          <Link href={`/noticias/${prev.slug}`} className="text-left group">
            <p className="text-xs text-gray-400 mb-1">← Anterior</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-neb-gold dark:group-hover:text-neb-gold transition-colors line-clamp-2">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link href={`/noticias/${next.slug}`} className="text-right group col-start-2">
            <p className="text-xs text-gray-400 mb-1">Siguiente →</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-neb-gold dark:group-hover:text-neb-gold transition-colors line-clamp-2">{next.title}</p>
          </Link>
        )}
      </div>

      {/* CTA */}
      <div className="mt-14 bg-neb-gold rounded-xl p-8 text-neb-black text-center">
        <h2 className="text-xl font-bold mb-3">¿Necesitas nuestros servicios?</h2>
        <p className="text-neb-black/70 mb-6 text-sm">Contáctanos y te respondemos a la brevedad.</p>
        <Link href="/contacto"
          className="inline-block bg-neb-black text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-900 transition-colors text-sm">
          Contáctanos
        </Link>
      </div>
    </article>
  )
}
