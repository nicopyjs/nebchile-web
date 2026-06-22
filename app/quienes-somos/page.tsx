import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description:
    'Somos un grupo de ingenieros y técnicos profesionales, especializados en la climatización. Conoce al equipo NEB Chile.',
}

const CLIENT_LOGOS = [
  { src: '/images/general/nebchile-client-1.png', name: 'Anwo' },
  { src: '/images/general/nebchile-client-2.png', name: 'Cosmoplas' },
  { src: '/images/general/nebchile-client-3.png', name: 'Ariston' },
  { src: '/images/general/nebchile-client-4.png', name: 'Immergas' },
  { src: '/images/general/nebchile-client-5.png', name: 'Baxi' },
  { src: '/images/general/nebchile-client-6.png', name: 'Rinnai' },
  { src: '/images/general/nebchile-client-7.png', name: 'NovaClima' },
  { src: '/images/general/nebchile-client-8.png', name: 'Winter' },
  { src: '/images/general/nebchile-client-9.png', name: 'Sime' },
]

const STATS = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Proyectos entregados' },
  { value: 9, suffix: '', label: 'Marcas aliadas' },
  { value: 100, suffix: '%', label: 'Personal certificado SEC' },
]

const TEAM_HERO = '/images/general/nebchile-nosotros-OK.jpg'
const LEADER_PHOTO = '/images/general/nebchile-heads-1.jpg'
const SEC_BADGE =
  '/images/general/nebchile-SEC-300x300.jpg'

export default function QuienesSomos() {
  return (
    <>
      {/* ============================================================
          PAGE HERO
          ============================================================ */}
      <section className="relative bg-neb-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={TEAM_HERO}
            alt="Equipo NEB Chile"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 25%' }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full bg-neb-gold/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[480px] md:h-[540px] lg:h-[600px] flex flex-col justify-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neb-gold/15 border border-neb-gold/30 text-neb-gold text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neb-gold" />
              Acerca de NEB Chile
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="text-5xl lg:text-7xl font-extrabold leading-[1.02] mb-6 tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Quiénes <span className="text-neb-gold">Somos</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Un equipo de ingenieros y técnicos comprometidos con la profesionalización del rubro
              de la climatización en Chile.
            </p>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neb-gold/60 to-transparent" />
      </section>

      {/* ============================================================
          INTRO — text + leader photo + SEC badge
          ============================================================ */}
      <section className="relative py-24 lg:py-28 bg-white dark:bg-neb-dark-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-neb-gold" />
                <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                  Nuestra historia
                </span>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight mb-8"
                style={{ textWrap: 'balance' } as React.CSSProperties}
              >
                Un servicio de alto estándar a un precio justo, es posible.
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  Somos un grupo de ingenieros y técnicos profesionales especializados en la
                  climatización, quienes creen que entregar un servicio de alto estándar a un
                  precio justo es posible. Por ello decidimos formar{' '}
                  <strong className="text-neb-black dark:text-white">NEB Chile</strong>, una
                  empresa ágil y moderna orientada a dar soluciones y transformarnos en un aliado
                  para nuestros clientes.
                </p>
                <p>
                  El manejo de calderas en comunidades de edificios residenciales requiere de un
                  trabajo profesional y de alta calidad que entregue confianza y seguridad a las
                  personas. Ese tipo de instalaciones no pueden estar en manos inexpertas. En NEB
                  nos preocupamos por cumplir todos los estándares de calidad y respaldo para así
                  entregar el mejor servicio.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-5">
              <div className="relative flex flex-col items-center lg:items-end">
                <div className="absolute -top-6 -left-6 lg:left-6 w-32 h-32 pattern-dots opacity-40 dark:opacity-25 pointer-events-none" />

                <div className="relative">
                  <div className="absolute -inset-3 rounded-full border-2 border-neb-gold/40" />
                  <div className="absolute -inset-6 rounded-full border border-neb-gold/15" />
                  <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-4 ring-neb-gold shadow-2xl">
                    <Image
                      src={LEADER_PHOTO}
                      alt="Equipo NEB Chile"
                      fill
                      sizes="288px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-4 bg-gray-50 dark:bg-neb-black border border-gray-200 dark:border-neb-dark-border rounded-xl p-4 pr-6 shadow-sm">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={SEC_BADGE}
                      alt="Certificación SEC"
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-neb-gold font-bold mb-1">
                      Certificación
                    </div>
                    <div className="font-bold text-neb-black dark:text-white">
                      Personal Certificado SEC
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Superintendencia de Electricidad y Combustibles
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS STRIP
          ============================================================ */}
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

      {/* ============================================================
          MISIÓN & VISIÓN
          ============================================================ */}
      <section className="py-24 lg:py-28 bg-gray-50 dark:bg-neb-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-40 dark:opacity-100 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                Propósito
              </span>
              <span className="w-8 h-px bg-neb-gold" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white">
              Misión &amp; Visión
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Reveal delay={0}>
              <div className="relative card-lift bg-neb-gold text-neb-black rounded-2xl p-10 lg:p-12 overflow-hidden h-full">
                <div className="absolute top-0 right-0 text-[180px] font-extrabold leading-none text-neb-black/10 select-none pointer-events-none">
                  01
                </div>
                <div className="relative">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] mb-4">Misión</div>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-6 leading-tight"
                    style={{ textWrap: 'balance' } as React.CSSProperties}
                  >
                    Profesionalizar el rubro de la climatización.
                  </h3>
                  <p className="text-neb-black/85 leading-relaxed text-lg">
                    Satisfacer el mercado nacional en todas las ramas de la climatización, mediante
                    el profesionalismo y la técnica aplicada a los procesos y, al mismo tiempo,
                    enorgullecer a quienes han optado por NEB Chile como su proveedor de servicios.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative card-lift bg-neb-black text-white rounded-2xl p-10 lg:p-12 overflow-hidden h-full border border-neb-dark-border">
                <div className="absolute top-0 right-0 text-[180px] font-extrabold leading-none num-outline opacity-30 select-none pointer-events-none">
                  02
                </div>
                <div className="relative">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] mb-4 text-neb-gold">
                    Visión
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-6 leading-tight"
                    style={{ textWrap: 'balance' } as React.CSSProperties}
                  >
                    Ser el referente en climatización de edificios.
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Liderar el mercado nacional de climatización de edificios, siendo el referente
                    en calidad, profesionalismo y servicio para nuestros clientes y competidores.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          NUESTROS CLIENTES — big logo grid
          ============================================================ */}
      <section className="py-24 lg:py-28 bg-white dark:bg-neb-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                Aliados
              </span>
              <span className="w-8 h-px bg-neb-gold" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white mb-4">
              Marcas que confían en NEB
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Trabajamos con los principales fabricantes y proveedores del rubro a nivel nacional e
              internacional.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {CLIENT_LOGOS.map((c, i) => (
              <Reveal key={c.name} delay={(i % 5) * 60}>
                <div className="group relative h-28 lg:h-32 bg-white rounded-xl p-6 flex items-center justify-center border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold hover:shadow-lg card-lift">
                  <Image
                    src={c.src}
                    alt={c.name}
                    title={c.name}
                    width={160}
                    height={80}
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-neb-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA FINAL
          ============================================================ */}
      <section className="relative py-24 lg:py-32 bg-neb-gold text-neb-black overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50 pointer-events-none" />
        <div className="absolute top-10 left-10 w-16 h-16 border-l-2 border-t-2 border-neb-black/30 hidden md:block" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-neb-black/30 hidden md:block" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-neb-black/50" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neb-black/70">
                Hablemos
              </span>
              <span className="w-10 h-px bg-neb-black/50" />
            </div>
            <h2
              className="text-4xl lg:text-6xl font-extrabold mb-6 leading-[1.05]"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              ¿Quieres trabajar
              <br />
              con nosotros?
            </h2>
            <p className="text-neb-black/75 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Contáctanos y cuéntanos tu proyecto. Te respondemos a la brevedad con costos y plazos
              certeros.
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
                href="https://wa.me/56972932533"
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
