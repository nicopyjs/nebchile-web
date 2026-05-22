import Reveal from '@/components/Reveal'

type Props = {
  prefix: string
  highlight: string
  suffix?: string
  /** background variant — alternates per page so adjacent sections breathe */
  bg?: 'light' | 'dark'
}

/**
 * Centered quote-style closing statement, with a gold highlight span.
 */
export default function ServiceQuote({ prefix, highlight, suffix = '', bg = 'light' }: Props) {
  const bgClass =
    bg === 'dark'
      ? 'bg-gray-50 dark:bg-neb-dark-surface'
      : 'bg-white dark:bg-neb-dark-bg'

  return (
    <section className={`relative py-20 lg:py-24 ${bgClass} overflow-hidden`}>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <svg className="mx-auto mb-6 w-12 h-12 text-neb-gold/40" viewBox="0 0 32 32" fill="currentColor">
            <path d="M9 8h6l-3 8h3v8H7v-8l2-8zm10 0h6l-3 8h3v8h-8v-8l2-8z" />
          </svg>
          <p
            className="text-2xl lg:text-3xl font-medium text-neb-black dark:text-white leading-snug"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {prefix} <span className="text-neb-gold font-bold">{highlight}</span>
            {suffix}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
