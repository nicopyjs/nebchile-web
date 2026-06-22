'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Slide = {
  eyebrow: string
  title: string
  desc: string
  image: string
  primary: { label: string; href: string }
  secondary: { label: string; href: string }
}

const SLIDES: Slide[] = [
  {
    eyebrow: 'Mantención & Renovación',
    title: 'MANTENCIÓN Y RENOVACIÓN DE SALAS DE CALDERA EN EDIFICIOS',
    desc: 'Aseguramos que tu Caldera esté en las Mejores Condiciones. Ingenieros expertos en Climatización con Costos y Plazos Certeros.',
    image:
      '/images/posts/unwatermarked_Gemini_Generated_Image_ruf9v9ruf9v9ruf9.png',
    primary: { label: 'Contáctanos', href: '/contacto' },
    secondary: { label: 'Quiénes Somos', href: '/quienes-somos' },
  },
  {
    eyebrow: 'Casos de éxito',
    title: 'AHORRO DE HASTA 37% EN CONSUMO DE GAS',
    desc: 'El cambio de la sala de calderas de Santos Dumont demostró cómo una renovación bien diseñada mejora eficiencia y reduce costos.',
    image:
      '/images/posts/Captura_de_pantalla_2025-01-15_a_la(s)_5.19.56_p._m..png',
    primary: { label: 'Ver casos', href: '/proyectos/mantenciones' },
    secondary: { label: 'Renovaciones', href: '/servicios/renovacion-de-centrales-termicas' },
  },
  {
    eyebrow: 'Instalaciones',
    title: 'CLIMATIZACIÓN PARA PROYECTOS EN CONSTRUCCIÓN',
    desc: 'Desde la ingeniería hasta la entrega final: instalamos sistemas de climatización en edificios residenciales y comerciales.',
    image: '/images/posts/53049.png',
    primary: { label: 'Ver servicios', href: '/servicios/area-de-instalaciones' },
    secondary: { label: 'Proyectos', href: '/proyectos/instalaciones' },
  },
  {
    eyebrow: 'Tecnología',
    title: 'INTERCAMBIADORES DE CALOR DE ALTA EFICIENCIA',
    desc: 'Renovamos tu Central Térmica con la mejor tecnología del mercado para máxima eficiencia energética.',
    image:
      '/images/posts/Captura_de_pantalla_2025-01-15_a_la(s)_5.09.37_p._m..png',
    primary: { label: 'Renovaciones', href: '/servicios/renovacion-de-centrales-termicas' },
    secondary: { label: 'Cotizar', href: '/contacto' },
  },
]

const SLIDE_DURATION = 6000

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = SLIDES.length

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % total), SLIDE_DURATION)
    return () => clearTimeout(t)
  }, [index, paused, total])

  const go = (i: number) => setIndex((i + total) % total)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)
  const slide = SLIDES[index]

  return (
    <section
      className="relative bg-neb-black dark:bg-neb-dark-bg text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            <div
              key={`img-${i}-${i === index}`}
              className={`absolute inset-0 bg-cover bg-center ${i === index ? 'hero-bg-anim' : ''}`}
              style={{ backgroundImage: `url("${s.image}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Gold glow accent */}
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-neb-gold/10 blur-3xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] md:h-[640px] lg:h-[720px] flex flex-col justify-center">
        <div className="max-w-2xl" key={`content-${index}`}>
          <div className="hero-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neb-gold/15 border border-neb-gold/30 text-neb-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neb-gold animate-pulse" />
            {slide.eyebrow}
          </div>
          <h1
            className="hero-fade-up delay-1 text-4xl lg:text-5xl font-bold leading-tight mb-6"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {slide.title}
          </h1>
          <p className="hero-fade-up delay-2 text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            {slide.desc}
          </p>
          <div className="hero-fade-up delay-3 flex flex-col sm:flex-row gap-4">
            <Link
              href={slide.primary.href}
              className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-4 rounded-lg hover:bg-neb-gold-dark transition-colors text-center"
            >
              {slide.primary.label}
            </Link>
            <Link
              href={slide.secondary.href}
              className="inline-block border-2 border-neb-gold text-neb-gold font-semibold px-8 py-4 rounded-lg hover:bg-neb-gold hover:text-neb-black transition-colors text-center"
            >
              {slide.secondary.label}
            </Link>
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 right-4 sm:right-6 lg:right-8 hidden md:flex items-center gap-4 font-mono text-sm text-gray-300">
          <span className="text-neb-gold text-2xl font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-12 h-px bg-gray-500" />
          <span className="text-gray-500">{String(total).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-neb-gold hover:text-neb-black text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Slide siguiente"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-neb-gold hover:text-neb-black text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Ir al slide ${i + 1}`} className="group relative">
            <span
              className={
                'block h-1 rounded-full transition-all duration-300 ' +
                (i === index ? 'w-10 bg-white/30' : 'w-6 bg-white/25 group-hover:bg-white/40')
              }
            />
            {i === index && !paused && (
              <span
                key={`prog-${index}`}
                className="absolute inset-y-0 left-0 h-1 rounded-full bg-neb-gold hero-progress"
                style={{ width: '100%', ['--dur' as any]: `${SLIDE_DURATION}ms` }}
              />
            )}
            {i === index && paused && (
              <span
                className="absolute inset-y-0 left-0 h-1 rounded-full bg-neb-gold"
                style={{ width: '100%' }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
