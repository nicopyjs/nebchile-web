import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeaturePoints from '@/components/services/ServiceFeaturePoints'
import ServiceQuote from '@/components/services/ServiceQuote'
import ServiceCta from '@/components/services/ServiceCta'

export const metadata: Metadata = {
  title: 'Renovación de Centrales Térmicas',
  description:
    'Renovamos tu Central Térmica con la mejor tecnología del mercado y el respaldo de marcas reconocidas en el rubro.',
}

const BENEFITS = [
  { num: '01', title: 'Reducción significativa en consumo de gas', desc: 'Equipos modernos con eficiencias muy superiores a calderas antiguas.' },
  { num: '02', title: 'Mayor eficiencia energética', desc: 'Aprovechamos cada kWh con quemadores modulantes y controles inteligentes.' },
  { num: '03', title: 'Menor impacto ambiental', desc: 'Menos emisiones por la combustión más limpia y consumo optimizado.' },
  { num: '04', title: 'Cumplimiento de normativa vigente', desc: 'Diseño e instalación alineados con la reglamentación nacional SEC.' },
  { num: '05', title: 'Tecnología moderna con mayor vida útil', desc: 'Marcas reconocidas y respaldo técnico de largo plazo.' },
]

const FEATURE_POINTS = [
  { kicker: 'Ingeniería', text: 'Departamento técnico especializado en montaje y renovación.' },
  { kicker: 'Marcas', text: 'Respaldo de los principales fabricantes del mercado.' },
  { kicker: 'Eficiencia', text: 'Tecnología que se traduce en ahorro real y medible.' },
]

export default function RenovacionCentralesTermicas() {
  return (
    <>
      <ServiceHero
        num="03"
        breadcrumb="Renovación de Centrales Térmicas"
        titleStart="Renovación de"
        titleGold="Centrales Térmicas"
        subtitle="Renovamos tu central térmica con la mejor tecnología del mercado, respaldados por marcas reconocidas y un departamento de Ingeniería y Montaje especializado."
        image="https://www.nebchile.cl/hubfs/nebchile-servicios-9.jpg"
      />
      <ServiceFeaturePoints items={FEATURE_POINTS} />

      {/* HIGHLIGHT BANNER — Santos Dumont 37% */}
      <section className="relative py-20 lg:py-24 bg-gray-50 dark:bg-neb-dark-surface overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-50 dark:opacity-100 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white dark:bg-neb-black border border-gray-200 dark:border-neb-dark-border rounded-3xl p-8 lg:p-12 overflow-hidden shadow-sm">
              <div className="absolute -right-20 -top-20 w-[280px] h-[280px] rounded-full bg-neb-gold/10 blur-3xl pointer-events-none" />
              <div className="md:col-span-5 relative">
                <div className="text-7xl lg:text-8xl font-extrabold text-neb-gold tabular-nums leading-none mb-2">
                  <AnimatedCounter to={37} suffix="%" />
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                  Ahorro promedio en consumo de gas tras renovación
                </div>
              </div>
              <div className="md:col-span-7 relative">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-neb-gold mb-3">
                  Caso real
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-neb-black dark:text-white mb-4 leading-snug"
                  style={{ textWrap: 'balance' } as React.CSSProperties}
                >
                  El cambio de la sala de calderas de Santos Dumont generó un ahorro de 37%.
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Un caso documentado de cómo una renovación bien diseñada se traduce en ahorro
                  inmediato y eficiencia sostenida.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY RENOVATE */}
      <section className="relative py-24 lg:py-28 bg-white dark:bg-neb-dark-bg overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                Por qué renovar
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Cinco razones para actualizar tu central térmica.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.num} delay={(i % 3) * 100}>
                <div className="relative card-lift bg-white dark:bg-neb-black rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold hover:shadow-2xl dark:hover:shadow-neb-gold/10 group overflow-hidden h-full">
                  <div className="absolute top-4 right-5 text-7xl lg:text-8xl font-extrabold num-outline opacity-30 group-hover:opacity-70 transition-opacity duration-500 leading-none select-none">
                    {b.num}
                  </div>
                  <div className="relative mb-8 inline-flex items-center justify-center">
                    <div className="w-12 h-12 rounded-lg bg-neb-gold/10 border border-neb-gold/40 group-hover:bg-neb-gold group-hover:border-neb-gold flex items-center justify-center transition-colors duration-500">
                      <div className="w-3 h-3 rounded-sm bg-neb-gold group-hover:bg-neb-black transition-colors duration-500" />
                    </div>
                  </div>
                  <h3 className="relative text-lg font-bold text-neb-black dark:text-white mb-3 leading-snug pr-10">
                    {b.title}
                  </h3>
                  <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {b.desc}
                  </p>
                  <span className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full bg-neb-gold transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceQuote
        bg="dark"
        prefix="NEB se caracteriza por siempre entregar"
        highlight="el mejor servicio"
        suffix=", desde la asesoría hasta entregar informes claros y precisos. Para nosotros, cada cliente merece un trato preferencial."
      />
      <ServiceCta
        kicker="Cotización"
        titleLine1="¿Renovamos tu"
        titleLine2="central térmica?"
        subtitle="Visitamos, evaluamos y te entregamos una propuesta técnica con ROI estimado."
        primaryLabel="Solicitar cotización"
      />
    </>
  )
}
