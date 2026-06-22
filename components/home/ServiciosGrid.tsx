import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

const SERVICIOS = [
  {
    title: 'Área de Instalaciones',
    href: '/servicios/area-de-instalaciones',
    desc: 'Instalamos sistemas de climatización en proyectos en construcción.',
    image: '/images/posts/53049.png',
  },
  {
    title: 'Área de Mantención',
    href: '/servicios/area-de-mantencion',
    desc: 'Mantenemos tus sistemas en perfecto estado de funcionamiento.',
    image:
      '/images/posts/Captura_de_pantalla_2025-01-15_a_la(s)_5.19.56_p._m..png',
  },
  {
    title: 'Renovación de Centrales Térmicas',
    href: '/servicios/renovacion-de-centrales-termicas',
    desc: 'Renovamos tu Central Térmica con la mejor tecnología del mercado.',
    image:
      '/images/posts/Captura_de_pantalla_2025-01-15_a_la(s)_5.09.37_p._m..png',
  },
  {
    title: 'Generación de Proyectos',
    href: '/servicios/generacion-de-proyectos',
    desc: 'Desde la ingeniería hasta la entrega final del proyecto.',
    image:
      '/images/posts/unwatermarked_Gemini_Generated_Image_ruf9v9ruf9v9ruf9.png',
  },
]

export default function ServiciosGrid() {
  return (
    <section className="py-24 lg:py-28 bg-white dark:bg-neb-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-neb-gold" />
              <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">Servicios</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight">
              Soluciones integrales en climatización
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
              Para edificios residenciales y comerciales, desde la ingeniería hasta la posventa.
            </p>
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neb-gold group self-start lg:self-auto"
          >
            <span className="gold-underline">Ver todos los servicios</span>
            <span className="arrow-slide inline-block">→</span>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.href} delay={i * 100}>
              <Link
                href={s.href}
                className="relative block card-lift group rounded-2xl overflow-hidden h-[380px] lg:h-[420px] border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold bg-black"
              >
                <div className="absolute inset-0">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="img-zoom object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="text-[11px] font-mono text-neb-gold tracking-wider">
                    SERV / {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/30 group-hover:border-neb-gold group-hover:bg-neb-gold flex items-center justify-center transition-colors duration-500">
                  <span className="text-white group-hover:text-neb-black arrow-slide inline-block text-sm">↗</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-neb-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed max-h-0 group-hover:max-h-32 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {s.desc}
                  </p>
                  <span className="block mt-4 h-px w-8 group-hover:w-24 bg-neb-gold transition-all duration-500" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
