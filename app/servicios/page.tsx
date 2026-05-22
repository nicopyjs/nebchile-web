import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Área de Instalaciones, Mantención, Renovación de Centrales Térmicas y Generación de Proyectos.',
}

const SERVICIOS = [
  {
    title: 'Área de Instalaciones',
    href: '/servicios/area-de-instalaciones',
    icon: '🏗️',
    desc: 'Instalamos sistemas de climatización en proyectos en construcción: extracción de aire, presurización, calefacción, centrales térmicas y más.',
  },
  {
    title: 'Área de Mantención',
    href: '/servicios/area-de-mantencion',
    icon: '🔩',
    desc: 'Mantenemos y operamos los sistemas de calderas, climatización y redes de agua en edificios residenciales.',
  },
  {
    title: 'Renovación de Centrales Térmicas',
    href: '/servicios/renovacion-de-centrales-termicas',
    icon: '♨️',
    desc: 'Renovamos tu Central Térmica con la mejor tecnología del mercado, con respaldo de marcas reconocidas en el rubro.',
  },
  {
    title: 'Generación de Proyectos',
    href: '/servicios/generacion-de-proyectos',
    icon: '📐',
    desc: 'Desde la ingeniería y diseño hasta la entrega del proyecto, con asesoría e informes técnicos claros y precisos.',
  },
]

export default function Servicios() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-4">Nuestros Servicios</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-14 max-w-2xl">
        NEB se caracteriza por siempre entregar el Mejor Servicio, desde la asesoría hasta entregar Informes claros y precisos. Para nosotros cada cliente merece un trato preferencial.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {SERVICIOS.map((s) => (
          <Link key={s.href} href={s.href}
            className="bg-white dark:bg-neb-dark-surface border border-gray-200 dark:border-neb-dark-border rounded-xl p-8 hover:shadow-lg hover:border-neb-gold dark:hover:border-neb-gold transition-all group">
            <div className="text-4xl mb-4">{s.icon}</div>
            <h2 className="text-xl font-bold text-neb-black dark:text-white mb-3 group-hover:text-neb-gold dark:group-hover:text-neb-gold transition-colors">{s.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            <p className="mt-4 text-neb-gold text-sm font-medium">Ver más →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
