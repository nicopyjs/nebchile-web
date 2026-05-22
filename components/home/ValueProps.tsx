import Link from 'next/link'
import Reveal from '@/components/Reveal'

const VALUE_PROPS = [
  {
    num: '01',
    title: '¿QUÉ HACEMOS?',
    desc: 'Aseguramos que tu Caldera esté en las Mejores Condiciones. Instalación, mantención y renovación de sistemas de climatización.',
    href: '/servicios',
    cta: 'Ver servicios',
  },
  {
    num: '02',
    title: '¿QUIÉNES SOMOS?',
    desc: 'Somos Ingenieros Expertos en Climatización y Calderas, con años de experiencia en el rubro.',
    href: '/quienes-somos',
    cta: 'Conoce al equipo',
  },
  {
    num: '03',
    title: '¿POR QUÉ NEB?',
    desc: 'Mejoramos la Calidad y Eficiencia, con Costos y Plazos Certeros. Tu aliado técnico de confianza.',
    href: '/contacto',
    cta: 'Habla con nosotros',
  },
]

export default function ValueProps() {
  return (
    <section className="relative py-24 lg:py-28 bg-gray-50 dark:bg-neb-dark-surface overflow-hidden">
      <div className="absolute inset-0 pattern-grid-dark opacity-50 dark:opacity-100 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-neb-gold" />
            <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">Por qué NEB</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Tres razones para confiar tu sala de calderas a nosotros.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VALUE_PROPS.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <Link
                href={item.href}
                className="relative card-lift block h-full bg-white dark:bg-neb-black rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold shadow-sm hover:shadow-2xl dark:hover:shadow-neb-gold/10 group overflow-hidden"
              >
                <div className="absolute top-4 right-5 text-7xl lg:text-8xl font-extrabold num-outline opacity-30 group-hover:opacity-70 transition-opacity duration-500 leading-none select-none">
                  {item.num}
                </div>

                <div className="relative mb-8 inline-flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-neb-gold/10 border border-neb-gold/40 group-hover:bg-neb-gold group-hover:border-neb-gold flex items-center justify-center transition-colors duration-500">
                    <div className="w-3 h-3 rounded-sm bg-neb-gold group-hover:bg-neb-black transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="relative text-xl font-bold text-neb-black dark:text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{item.desc}</p>

                <div className="relative inline-flex items-center gap-2 text-sm font-semibold text-neb-gold">
                  <span className="gold-underline">{item.cta}</span>
                  <span className="arrow-slide inline-block">→</span>
                </div>

                <span className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full bg-neb-gold transition-all duration-700" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
