import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Área de Instalaciones',
  description: 'Instalamos con alto nivel de profesionalismo sistemas de climatización en proyectos en construcción.',
}

export default function AreaInstalaciones() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/servicios" className="hover:text-neb-gold transition-colors">Servicios</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 dark:text-gray-200">Área de Instalaciones</span>
      </nav>
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-6">Área de Instalaciones</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        Instalamos, con un alto nivel de profesionalismo y los mejores estándares de calidad, los siguientes sistemas en proyectos en construcción:
      </p>
      <ul className="space-y-4 mb-10">
        {[
          'Extracción de aire en Baños, Cocinas, Quinchos, Subterráneos, entre otros.',
          'Sistemas de Presurización',
          'Calefacción',
          'Centrales Térmicas',
          'Redes de Baja Presión y Tratamientos de Agua',
          'Aire Acondicionado',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 w-5 h-5 rounded-full bg-neb-gold text-neb-black flex items-center justify-center text-xs flex-shrink-0 font-bold">✓</span>
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
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
