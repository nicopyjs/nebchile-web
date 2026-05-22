import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import { getPosts } from '@/lib/posts'

export default function NoticiasGrid() {
  const latestPosts = getPosts().slice(0, 3)

  return (
    <section className="py-24 lg:py-28 bg-gray-50 dark:bg-neb-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">Noticias</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white">Lo último de NEB Chile</h2>
          </div>
          <Link
            href="/noticias"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-neb-gold group"
          >
            <span className="gold-underline">Ver todas</span>
            <span className="arrow-slide inline-block">→</span>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {latestPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120}>
              <Link
                href={`/noticias/${post.slug}`}
                className="relative card-lift block bg-white dark:bg-neb-black rounded-2xl overflow-hidden border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold shadow-sm hover:shadow-2xl dark:hover:shadow-neb-gold/10 group h-full"
              >
                {post.featuredImage && (
                  <div className="relative h-56 bg-gray-100 dark:bg-neb-dark-surface overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="img-zoom object-cover"
                    />
                    {post.date && (
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-mono">
                        {String(post.date).slice(0, 10)}
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6 lg:p-7">
                  <h3
                    className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-neb-gold dark:group-hover:text-neb-gold transition-colors leading-snug mb-5"
                    style={{ textWrap: 'balance' } as React.CSSProperties}
                  >
                    {post.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-sm text-neb-gold font-semibold">
                    <span className="gold-underline">Leer más</span>
                    <span className="arrow-slide inline-block">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
