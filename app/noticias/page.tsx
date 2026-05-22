import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Noticias',
  description: 'Últimas noticias, proyectos y guías de NEB Chile.',
}

export default function Noticias() {
  const posts = getPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-4">Noticias</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-14">Proyectos, guías y novedades de NEB Chile.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/noticias/${post.slug}`}
            className="bg-white dark:bg-neb-dark-surface border border-gray-200 dark:border-neb-dark-border rounded-xl overflow-hidden hover:shadow-lg dark:hover:border-neb-gold transition-all group">
            {post.featuredImage ? (
              <div className="relative h-48 bg-gray-100 dark:bg-neb-dark-bg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="h-48 bg-gradient-to-br from-neb-black to-gray-800 flex items-center justify-center">
                <span className="text-white text-4xl">📰</span>
              </div>
            )}
            <div className="p-6">
              {post.date && (
                <p className="text-xs text-gray-400 mb-2">{formatDate(post.date)}</p>
              )}
              <h2 className="font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-neb-gold dark:group-hover:text-neb-gold transition-colors line-clamp-3">
                {post.title}
              </h2>
              <p className="mt-3 text-neb-gold text-sm font-medium">Leer más →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
