import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Cuatro áreas de servicio: Instalaciones, Mantención, Renovación de Centrales Térmicas y Generación de Proyectos.',
}

const SERVICIOS = [
  {
    num: '01',
    titleStart: 'Área de',
    titleGold: 'Instalaciones',
    href: '/servicios/area-de-instalaciones',
    img: '/images/general/nebchile-servicios-6.jpg',
    desc: 'Instalamos sistemas de climatización en proyectos en construcción, desde el diseño hasta la puesta en marcha.',
    items: [
      'Extracción de aire',
      'Sistemas de Presurización',
      'Calefacción',
      'Centrales Térmicas',
      'Redes de Baja Presión',
      'Aire Acondicionado',
    ],
  },
  {
    num: '02',
    titleStart: 'Área de',
    titleGold: 'Mantención',
    href: '/servicios/area-de-mantencion',
    img: '/images/general/nebchile-servicios-8.jpg',
    desc: 'Mantenemos y operamos sistemas de calderas, climatización y redes de agua en edificios residenciales.',
    items: [
      'Calderas y Calefacción',
      'Operación de Centrales Térmicas',
      'Sistemas de Presurización',
      'Redes de Agua',
      'Extracción de Aire',
    ],
  },
  {
    num: '03',
    titleStart: 'Renovación de',
    titleGold: 'Centrales Térmicas',
    href: '/servicios/renovacion-de-centrales-termicas',
    img: '/images/general/nebchile-servicios-9.jpg',
    desc: 'Renovamos tu central térmica con la mejor tecnología del mercado y respaldo de marcas reconocidas.',
    items: [
      'Ahorro hasta 37% en gas',
      'Mayor eficiencia energética',
      'Menor impacto ambiental',
      'Cumplimiento normativa SEC',
      'Tecnología moderna',
    ],
  },
  {
    num: '04',
    titleStart: 'Generación de',
    titleGold: 'Proyectos',
    href: '/servicios/generacion-de-proyectos',
    img: '/images/general/nebchile-heads-2.jpg',
    desc: 'Desde la ingeniería y diseño hasta la entrega final, acompañamos cada etapa del proyecto.',
    items: ['Ingeniería técnica', 'Diseño a medida', 'Ejecución en obra', 'Entrega documentada'],
  },
]

const STATS = [
  { value: 4, suffix: '', label: 'Áreas de servicio' },
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Proyectos entregados' },
  { value: 100, suffix: '%', label: 'Personal certificado SEC' },
]

export default function Servicios() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-neb-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/general/nebchile-servicios-6.jpg"
            alt="Servicios NEB Chile"
            fill
            priority
            sizes="100vw"
            className="object-cover hero-bg-anim"
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
              <span className="text-neb-gold">Servicios</span>
            </nav>
          </Reveal>
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neb-gold/15 border border-neb-gold/30 text-neb-gold text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neb-gold" />
              Lo que hacemos
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1
              className="text-5xl lg:text-7xl font-extrabold leading-[1.02] mb-6 tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Nuestros <span className="text-neb-gold">Servicios</span>
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Cuatro áreas de especialidad para acompañarte desde el primer plano hasta el último
              ciclo de mantención.
            </p>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neb-gold/60 to-transparent" />
      </section>

      {/* STATS */}
      <section className="relative py-16 lg:py-20 bg-neb-black text-white overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-neb-gold/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-extrabold text-neb-gold tabular-nums leading-none mb-3 tracking-tight">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 SERVICIOS — alternating editorial layout */}
      <section className="relative py-24 lg:py-32 bg-white dark:bg-neb-dark-bg overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-20 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                Áreas de especialidad
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Soluciones integrales en climatización para edificios residenciales y comerciales.
            </h2>
          </Reveal>

          <div className="space-y-20 lg:space-y-28">
            {SERVICIOS.map((s, i) => {
              const reversed = i % 2 === 1
              return (
                <Link key={s.num} href={s.href} className="block group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Image */}
                    <Reveal className={'lg:col-span-7 ' + (reversed ? 'lg:order-2' : '')}>
                      <div className="relative overflow-hidden rounded-2xl bg-black aspect-[16/10] card-lift">
                        <Image
                          src={s.img}
                          alt={s.titleStart + ' ' + s.titleGold}
                          fill
                          sizes="(min-width: 1024px) 58vw, 100vw"
                          className="img-zoom object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

                        <div className="absolute top-6 left-6 text-7xl lg:text-8xl font-extrabold num-outline opacity-60 group-hover:opacity-100 transition-opacity duration-500 leading-none select-none">
                          {s.num}
                        </div>

                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/30 group-hover:border-neb-gold group-hover:bg-neb-gold flex items-center justify-center transition-all duration-500">
                          <span className="text-white group-hover:text-neb-black arrow-slide inline-block text-lg">↗</span>
                        </div>

                        <span className="absolute bottom-6 left-6 text-[10px] font-mono text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md tracking-[0.18em]">
                          SERVICIO / {s.num}
                        </span>
                      </div>
                    </Reveal>

                    {/* Text */}
                    <Reveal delay={150} className={'lg:col-span-5 ' + (reversed ? 'lg:order-1' : '')}>
                      <div className={'max-w-md ' + (reversed ? 'lg:ml-auto' : '')}>
                        <h3
                          className="text-3xl lg:text-4xl font-extrabold text-neb-black dark:text-white leading-tight mb-5"
                          style={{ textWrap: 'balance' } as React.CSSProperties}
                        >
                          {s.titleStart} <span className="text-neb-gold">{s.titleGold}</span>
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {s.desc}
                        </p>

                        <ul className="space-y-2 mb-8">
                          {s.items.map((it) => (
                            <li
                              key={it}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3"
                            >
                              <span className="text-neb-gold flex-shrink-0 mt-0.5 font-bold">✓</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="inline-flex items-center gap-2 text-sm font-bold text-neb-gold">
                          <span className="gold-underline">Conocer este servicio</span>
                          <span className="arrow-slide inline-block">→</span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-20 lg:py-24 bg-gray-50 dark:bg-neb-dark-surface overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-50 dark:opacity-100 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <svg className="mx-auto mb-6 w-12 h-12 text-neb-gold/40" viewBox="0 0 32 32" fill="currentColor">
              <path d="M9 8h6l-3 8h3v8H7v-8l2-8zm10 0h6l-3 8h3v8h-8v-8l2-8z" />
            </svg>
            <p
              className="text-2xl lg:text-3xl font-medium text-neb-black dark:text-white leading-snug"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              NEB se caracteriza por siempre entregar{' '}
              <span className="text-neb-gold font-bold">el mejor servicio</span>, desde la asesoría
              hasta entregar informes claros y precisos. Cada cliente merece un trato preferencial.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-neb-gold text-neb-black overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50 pointer-events-none" />
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-neb-black/30 hidden md:block" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-neb-black/30 hidden md:block" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-neb-black/50" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neb-black/70">
                Tu proyecto
              </span>
              <span className="w-10 h-px bg-neb-black/50" />
            </div>
            <h2
              className="text-4xl lg:text-6xl font-extrabold mb-6 leading-[1.05]"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              ¿Cuál de estos servicios
              <br />
              necesitas hoy?
            </h2>
            <p className="text-neb-black/75 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Cuéntanos qué necesitas. Te entregamos asesoría, diseño y propuesta económica sin
              compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 bg-neb-black text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all hover:scale-[1.02]"
              >
                Contáctanos
                <span className="arrow-slide inline-block">→</span>
              </Link>
              <a
                href="https://wa.me/56964941468"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-neb-black font-bold px-8 py-4 rounded-lg hover:bg-neb-black hover:text-white transition-all hover:scale-[1.02] border-2 border-neb-black"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
