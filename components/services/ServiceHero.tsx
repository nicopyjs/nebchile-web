import Link from 'next/link'
import Reveal from '@/components/Reveal'

type Props = {
  num: string // "01"
  titleStart: string
  titleGold: string
  subtitle: string
  image: string
  breadcrumb: string
  /** CSS object-position for the hero image */
  imagePosition?: string
}

/**
 * Full-bleed dark hero with breadcrumb, eyebrow pill, two-tone title and subtitle.
 * Shared across all four /servicios/* sub-pages.
 */
export default function ServiceHero({
  num,
  titleStart,
  titleGold,
  subtitle,
  image,
  breadcrumb,
  imagePosition = 'center',
}: Props) {
  return (
    <section className="relative bg-neb-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg-anim"
          style={{ backgroundImage: `url("${image}")`, backgroundPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
      </div>
      <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-neb-gold/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[480px] md:h-[560px] lg:h-[620px] flex flex-col justify-center">
        <Reveal className="mb-8">
          <nav className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-neb-gold transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/servicios" className="hover:text-neb-gold transition-colors">Servicios</Link>
            <span className="text-gray-600">/</span>
            <span className="text-neb-gold">{breadcrumb}</span>
          </nav>
        </Reveal>

        <Reveal delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neb-gold/15 border border-neb-gold/30 text-neb-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neb-gold" />
            Servicio · {num}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1
            className="text-5xl lg:text-7xl font-extrabold leading-[1.02] mb-6 tracking-tight"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {titleStart} <span className="text-neb-gold">{titleGold}</span>
          </h1>
        </Reveal>

        <Reveal delay={320}>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">{subtitle}</p>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neb-gold/60 to-transparent" />
    </section>
  )
}
