import Reveal from '@/components/Reveal'
import AnimatedCounter from '@/components/AnimatedCounter'

const STATS = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Proyectos entregados' },
  { value: 37, suffix: '%', label: 'Ahorro promedio en gas' },
  { value: 24, suffix: '/7', label: 'Servicio técnico' },
]

export default function StatsStrip() {
  return (
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
              <div className="text-sm uppercase tracking-wider text-gray-400 font-medium">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
