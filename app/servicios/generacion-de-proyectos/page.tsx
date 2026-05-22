import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeaturePoints from '@/components/services/ServiceFeaturePoints'
import ServiceQuote from '@/components/services/ServiceQuote'
import ServiceCta from '@/components/services/ServiceCta'

export const metadata: Metadata = {
  title: 'Generación de Proyectos',
  description:
    'Desde la ingeniería y diseño hasta la entrega final del proyecto, acompañamos a nuestros clientes en cada etapa con asesoría técnica de alto nivel.',
}

const PROCESS = [
  { num: '01', title: 'Ingeniería', desc: 'Análisis técnico y dimensionamiento según las necesidades del proyecto.' },
  { num: '02', title: 'Diseño', desc: 'Planos, especificaciones y propuesta económica detallada.' },
  { num: '03', title: 'Ejecución', desc: 'Instalación y montaje en obra con personal certificado.' },
  { num: '04', title: 'Entrega', desc: 'Pruebas, certificación SEC y traspaso documentado al cliente.' },
]

const FEATURE_POINTS = [
  { kicker: 'Ingeniería', text: 'Asesoría técnica desde la primera reunión.' },
  { kicker: 'Diseño', text: 'Soluciones a medida según tipo de edificación.' },
  { kicker: 'Informes', text: 'Documentación clara, trazable y completa.' },
]

export default function GeneracionProyectos() {
  return (
    <>
      <ServiceHero
        num="04"
        breadcrumb="Generación de Proyectos"
        titleStart="Generación de"
        titleGold="Proyectos"
        subtitle="Desde la ingeniería y diseño hasta la entrega final del proyecto, acompañamos a nuestros clientes en cada etapa con asesoría técnica de alto nivel."
        image="https://www.nebchile.cl/hubfs/nebchile-heads-2.jpg"
        imagePosition="center 30%"
      />
      <ServiceFeaturePoints items={FEATURE_POINTS} />

      {/* PROCESS TIMELINE */}
      <section className="relative py-24 lg:py-28 bg-gray-50 dark:bg-neb-dark-surface overflow-hidden">
        <div className="absolute inset-0 pattern-grid-dark opacity-50 dark:opacity-100 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
                Cómo trabajamos
              </span>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Cuatro etapas, un equipo, un solo responsable.
            </h2>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-px bg-gradient-to-r from-neb-gold/0 via-neb-gold/40 to-neb-gold/0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
              {PROCESS.map((step, i) => (
                <Reveal key={step.num} delay={i * 120}>
                  <div className="relative card-lift bg-white dark:bg-neb-black rounded-2xl p-8 border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold hover:shadow-xl dark:hover:shadow-neb-gold/10 group overflow-hidden h-full">
                    <div className="relative mb-6 w-14 h-14 rounded-full bg-neb-gold text-neb-black font-extrabold text-lg flex items-center justify-center shadow-lg shadow-neb-gold/30 group-hover:scale-110 transition-transform duration-500 tabular-nums">
                      {step.num}
                    </div>
                    <h3 className="font-bold text-xl text-neb-black dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                    <span className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full bg-neb-gold transition-all duration-700" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceQuote
        prefix="Asesoría técnica de alto nivel e"
        highlight="informes claros y precisos"
        suffix=", en cada etapa del proyecto."
      />
      <ServiceCta
        kicker="Tu idea"
        titleLine1="¿Tienes un proyecto"
        titleLine2="en mente?"
        subtitle="Cuéntanos qué necesitas. Te entregamos asesoría, diseño y propuesta económica."
        primaryLabel="Consultar"
      />
    </>
  )
}
