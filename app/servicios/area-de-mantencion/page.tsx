import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Área de Mantención',
  description: 'Servicio de mantención y operación de sistemas de calderas y climatización en edificios.',
}

const ITEMS = [
  { label: 'Mantención de Calderas y Sistemas de Calefacción', img: 'https://www.nebchile.cl/hubfs/1a.png' },
  { label: 'Operación de Centrales Térmicas', img: 'https://www.nebchile.cl/hubfs/2a.png' },
  { label: 'Revisión y Mantención de Sistemas de Presurización', img: 'https://www.nebchile.cl/hubfs/3a.png' },
  { label: 'Mantención de Redes de Agua', img: 'https://www.nebchile.cl/hubfs/4a.png' },
  { label: 'Mantención de Sistemas de Extracción de Aire e Informes Técnicos periódicos', img: 'https://www.nebchile.cl/hubfs/5a.png' },
]

export default function AreaMantencion() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/servicios" className="hover:text-neb-gold transition-colors">Servicios</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 dark:text-gray-200">Área de Mantención</span>
      </nav>

      {/* Banner */}
      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-10">
        <Image src="https://www.nebchile.cl/hubfs/nebchile-servicios-8.jpg" alt="Área de Mantención NEB Chile" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-end p-8">
          <h1 className="text-4xl font-bold text-white">Área de Mantención</h1>
        </div>
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        Mantenemos y operamos los sistemas de calderas, climatización y redes de agua en edificios residenciales con los más altos estándares de calidad y seguridad.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
        {ITEMS.map((item) => (
          <div key={item.label} className="bg-white dark:bg-neb-dark-surface border border-gray-200 dark:border-neb-dark-border rounded-xl p-4 flex flex-col items-center text-center gap-3 hover:border-neb-gold dark:hover:border-neb-gold transition-colors">
            <div className="relative w-16 h-16">
              <Image src={item.img} alt={item.label} fill className="object-contain" />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        NEB se caracteriza por siempre entregar el Mejor Servicio, desde la asesoría hasta entregar Informes claros y precisos. Para nosotros cada cliente merece un trato preferencial.
      </p>
      <Link href="/contacto"
        className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
        Contáctanos
      </Link>
    </div>
  )
}
