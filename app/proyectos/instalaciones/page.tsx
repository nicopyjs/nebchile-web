import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import AnimatedProgress from '@/components/proyectos/AnimatedProgress'

export const metadata: Metadata = {
  title: 'Proyectos de Instalación',
  description:
    'Obras en las que NEB Chile está instalando sistemas de climatización: edificios residenciales y comerciales en construcción.',
}

const PROYECTOS = [
  { nombre: 'VESPUCIO MACUL TORRE E', constructora: 'Santolaya', pisos: '23 + cubierta + 2 subt.', deptos: '247', avance: '94', sistemas: 'Extracción de baños, extracción de subterráneos y presurización.', img: '/images/general/VESPUCIO-MACUL-TORRE-E-1.jpg' },
  { nombre: 'BUZETA', constructora: 'Santolaya', pisos: '19 + cubierta + 2 subt.', deptos: '234', avance: '80', sistemas: 'Extracción de baños, cocinas, subterráneos y presurización.', img: '/images/general/BUZETA.jpg' },
  { nombre: 'ARGOMEDO', constructora: 'Santa Fe', pisos: '12 + cubierta + 2 subt.', deptos: '177', avance: '85', sistemas: 'Extracción de baños, cocinas, subterráneos y presurización.', img: '/images/general/ARGOMEDO.jpg' },
  { nombre: 'COLÓN', constructora: 'Santa Fe', pisos: '14 + cubierta + 3 subt.', deptos: '52', avance: '82', sistemas: 'Extracción y presurización + calefacción a 1 departamento.', img: '/images/general/COLON.jpg' },
  { nombre: 'LAS TRANQUERAS', constructora: 'Santolaya', pisos: '9 + cubierta + 4 subt.', deptos: '95', avance: '71.4', sistemas: 'Extracción de baños, cocinas, subterráneos y presurización.', img: '/images/general/LAS-TRANQUERAS.jpg' },
]

const PROYECTOS_OTROS = [
  { nombre: 'SANTA CRISTINA', img: '/images/general/SANTA-CRISTINA.jpg' },
  { nombre: 'LINCOYÁN', img: '/images/general/LINCOYAN-2.jpg' },
  { nombre: 'CHRISTIENSEN', img: '/images/general/CHRISTIENSEN.jpg' },
  { nombre: 'ECO QUILÍN I', img: '/images/general/ECO-QUILIN-I.jpg' },
]

const STATS = [
  { value: 9, suffix: '', label: 'Obras en cartera' },
  { value: 805, suffix: '+', label: 'Departamentos' },
  { value: 82, suffix: '%', label: 'Avance promedio' },
  { value: 5, suffix: '', label: 'Sistemas por obra' },
]

export default function ProyectosInstalaciones() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-neb-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/general/nebchile-instalaciones.jpg"
            alt="Proyectos de Instalación NEB Chile"
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
              <span className="text-gray-400">Proyectos</span>
              <span className="text-gray-600">/</span>
              <span className="text-neb-gold">Instalaciones</span>
            </nav>
          </Reveal>
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neb-gold/15 border border-neb-gold/30 text-neb-gold text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neb-gold animate-pulse" />
              Obras activas
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1
              className="text-5xl lg:text-7xl font-extrabold leading-[1.02] mb-6 tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Proyectos de <span className="text-neb-gold">Instalación</span>
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              NEB se caracteriza por siempre entregar el mejor servicio. Estas son las obras en
              las que estamos trabajando hoy.
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

      {/* FEATURED PROJECTS */}
      <section className="relative py-24 lg:py-28 bg-gray-50 dark:bg-neb-dark-surface overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-50 dark:opacity-100 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                Obras en ejecución
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Edificios donde NEB está instalando hoy.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {PROYECTOS.map((p, i) => (
              <Reveal key={p.nombre} delay={(i % 3) * 100}>
                <div className="card-lift bg-white dark:bg-neb-black rounded-2xl overflow-hidden border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold hover:shadow-2xl dark:hover:shadow-neb-gold/10 group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden bg-black">
                    <Image
                      src={p.img}
                      alt={p.nombre}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="img-zoom object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-mono text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md tracking-[0.15em]">
                      OBRA / {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase bg-neb-gold text-neb-black px-2.5 py-1 rounded-md tracking-wider">
                      {p.constructora}
                    </span>
                    <h3
                      className="absolute bottom-4 left-5 right-5 text-xl lg:text-2xl font-extrabold text-white leading-tight"
                      style={{ textWrap: 'balance' } as React.CSSProperties}
                    >
                      {p.nombre}
                    </h3>
                  </div>

                  <div className="p-6 lg:p-7 flex-1 flex flex-col">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-1.5 font-semibold">
                          Pisos
                        </div>
                        <div className="text-sm font-bold text-neb-black dark:text-white leading-tight">
                          {p.pisos}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 mb-1.5 font-semibold">
                          Departamentos
                        </div>
                        <div className="text-3xl font-extrabold text-neb-gold tabular-nums leading-none">
                          {p.deptos}
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 font-semibold">
                          Avance
                        </span>
                        <span className="text-sm font-bold text-neb-gold tabular-nums">{p.avance}%</span>
                      </div>
                      <AnimatedProgress value={parseFloat(p.avance)} delay={i * 80} />
                    </div>

                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-auto pt-4 border-t border-gray-100 dark:border-neb-dark-border">
                      <span className="font-semibold text-neb-black dark:text-gray-300">Sistemas: </span>
                      {p.sistemas}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS PROYECTOS */}
      <section className="relative py-24 lg:py-28 bg-white dark:bg-neb-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-neb-gold" />
                <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                  En cartera
                </span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Otras obras en agenda
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              Proyectos en planificación o etapa inicial. Pronto agregaremos su ficha técnica.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {PROYECTOS_OTROS.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 80}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl card-lift group bg-black border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold">
                  <Image
                    src={p.img}
                    alt={p.nombre}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="img-zoom object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono text-neb-gold tracking-[0.18em]">
                    OBRA / {String(i + 6).padStart(2, '0')}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-base lg:text-lg font-extrabold text-white leading-tight mb-2">
                      {p.nombre}
                    </h4>
                    <span className="block h-px w-8 group-hover:w-16 bg-neb-gold transition-all duration-500" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
              ¿Quieres ver tu obra
              <br />
              en esta lista?
            </h2>
            <p className="text-neb-black/75 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Cuéntanos sobre tu proyecto. Te entregamos una propuesta técnica completa con costos
              y plazos certeros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 bg-neb-black text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all hover:scale-[1.02]"
              >
                Solicitar cotización
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
