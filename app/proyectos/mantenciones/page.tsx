import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import MantencionesFilter, { Proyecto } from '@/components/proyectos/MantencionesFilter'

export const metadata: Metadata = {
  title: 'Proyectos de Mantención',
  description:
    'Edificios donde NEB mantiene y opera sistemas de climatización, redes de agua y centrales térmicas en Santiago.',
}

const PROYECTOS: Proyecto[] = [
  { nombre: 'ECO CAPITAL', direccion: "Av. Libertador Bernardo O'Higgins #4103", comuna: 'Estación Central', edificios: 2, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua fría y caliente', 'Manejo de Aire'], img: '/images/general/ECO-CAPITAL.jpg' },
  { nombre: 'ECO ORIGEN', direccion: 'Av. Víctor Jara #3866', comuna: 'Estación Central', edificios: 1, sistemas: ['1 Central Térmica', '1 Sala de Bombas', 'Verticales de distribución de agua fría y caliente', 'Manejo de Aire'], img: '/images/general/ECO-ORIGEN-1.jpg' },
  { nombre: 'ELIODORO MIX', direccion: 'Av. Hernando de Aguirre #1191', comuna: 'Providencia', edificios: 2, sistemas: ['2 Centrales Térmicas', 'Calefacción', '1 Sala de Bombas', '2 Chillers', 'Manejo de Aire'], img: '/images/general/ELIODORO-MIX.jpg' },
  { nombre: 'ECO FUTURO II', direccion: 'Av. Radal #066', comuna: 'Estación Central', edificios: 2, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire', 'Paneles Solares Térmicos'], img: '/images/general/ECO-FUTURO-II.jpg' },
  { nombre: 'EL TAMARUGO', direccion: 'Av. El Tamarugo #1080', comuna: 'Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción'], img: '/images/general/EL-TAMARUGO.jpg' },
  { nombre: 'LOS CIPRESES', direccion: 'Av. Presidente Kennedy #5334', comuna: 'Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción'], img: '/images/general/LOS-CIPRESES.jpg' },
  { nombre: 'LOS CASTAÑOS', direccion: 'Av. Nilo Azul #1820', comuna: 'Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción'], img: '/images/general/LOS-CASTANOS.jpg' },
  { nombre: 'SANTA MAGDALENA', direccion: 'Av. Santa Magdalena #10', comuna: 'Providencia', edificios: 1, sistemas: ['1 Central Térmica'], img: '/images/general/SANTA-MAGDALENA.jpg' },
  { nombre: 'AGUSTÍN DEL CASTILLO', direccion: 'Av. Agustín del Castillo #2841', comuna: 'Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire'], img: '/images/general/AGUSTIN-DEL-CASTILLO.jpg' },
  { nombre: 'SANTA ELENA', direccion: 'Av. Padre Orellana #1656', comuna: 'Santiago', edificios: 2, sistemas: ['2 Centrales Térmicas'], img: '/images/general/SANTA-ELENA.jpg' },
  { nombre: 'GRAN MANANTIAL', direccion: 'C. San Ignacio de Loyola #1372', comuna: 'Santiago', edificios: 1, sistemas: ['1 Central Térmica'], img: '/images/general/GRAN-MANANTIAL.jpg' },
  { nombre: 'ECO ENCALADA', direccion: 'Av. Almirante Blanco Encalada #2527', comuna: 'Santiago', edificios: 3, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire'], img: '/images/general/ECO-ENCALADA.jpg' },
  { nombre: 'CONQUISTA ESPAÑA', direccion: '', comuna: '', edificios: 1, sistemas: [], img: '/images/general/CONQUISTA-ESPANA.jpg' },
  { nombre: 'ECO URBE', direccion: 'Av. Mujica #55', comuna: 'Ñuñoa', edificios: 2, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire', 'Paneles Solares Térmicos'], img: '/images/general/ECO-URBE.jpg' },
  { nombre: 'HERMANOS CABOT C', direccion: 'Av. Hermanos Cabot #6671', comuna: 'Las Condes', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire'], img: '/images/general/HERMANOS-CABOT-C.jpg' },
  { nombre: 'LUIS THAYER OJEDA', direccion: 'Av. Luis Thayer Ojeda #1153', comuna: 'Providencia', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire', 'Paneles Solares Térmicos'], img: '/images/general/LUIS-THAYER-OJEDA.jpg' },
]

const STATS = [
  { value: 16, suffix: '', label: 'Obras en mantención' },
  { value: 23, suffix: '', label: 'Edificios atendidos' },
  { value: 21, suffix: '+', label: 'Centrales térmicas' },
  { value: 6, suffix: '', label: 'Comunas en Santiago' },
]

export default function ProyectosMantenciones() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-neb-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/general/BANNERS_HEAD-5.jpg"
            alt="Proyectos de Mantención NEB Chile"
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
              <span className="text-neb-gold">Mantenciones</span>
            </nav>
          </Reveal>
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neb-gold/15 border border-neb-gold/30 text-neb-gold text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neb-gold animate-pulse" />
              Servicio continuo
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h1
              className="text-5xl lg:text-7xl font-extrabold leading-[1.02] mb-6 tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Proyectos de <span className="text-neb-gold">Mantención</span>
            </h1>
          </Reveal>
          <Reveal delay={320}>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Edificios donde NEB mantiene y opera sistemas de climatización, redes de agua y
              centrales térmicas todos los días del año.
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

      {/* FILTER + GRID */}
      <section className="relative py-24 lg:py-28 bg-gray-50 dark:bg-neb-dark-surface overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-50 dark:opacity-100 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                En servicio
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Edificios donde estamos hoy.
            </h2>
          </Reveal>

          <MantencionesFilter proyectos={PROYECTOS} />
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
                Plan de mantención
              </span>
              <span className="w-10 h-px bg-neb-black/50" />
            </div>
            <h2
              className="text-4xl lg:text-6xl font-extrabold mb-6 leading-[1.05]"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              ¿Sumamos tu edificio
              <br />
              a esta lista?
            </h2>
            <p className="text-neb-black/75 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Te visitamos, evaluamos el estado de tu sala de calderas y te entregamos una
              propuesta de mantención a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 bg-neb-black text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-all hover:scale-[1.02]"
              >
                Solicitar mantención
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
