import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Renovación de Centrales Térmicas',
  description: 'Renovamos tu Central Térmica con la mejor tecnología del mercado.',
}

export default function RenovacionCentralesTermicas() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/servicios" className="hover:text-neb-gold transition-colors">Servicios</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 dark:text-gray-200">Renovación de Centrales Térmicas</span>
      </nav>

      {/* Banner */}
      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-10">
        <Image src="https://www.nebchile.cl/hubfs/nebchile-servicios-9.jpg" alt="Renovación de Centrales Térmicas NEB Chile" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-end p-8">
          <h1 className="text-4xl font-bold text-white">Renovación de Centrales Térmicas</h1>
        </div>
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        Renovamos tu Central Térmica, con la mejor tecnología del mercado. Contamos con el respaldo de marcas reconocidas en el rubro, y con un departamento de Ingeniería y Montaje especializado, para hacer frente a la evolución de la tecnología en las centrales del país.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        NEB se caracteriza por siempre entregar el Mejor Servicio, desde la asesoría hasta entregar Informes claros y precisos. Para nosotros cada cliente merece un trato preferencial.
      </p>
      <div className="bg-neb-gold/10 dark:bg-neb-dark-surface border border-neb-gold/30 dark:border-neb-dark-border rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-neb-black dark:text-neb-gold mb-3">¿Por qué renovar tu Central Térmica?</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2"><span className="text-neb-gold mt-1">→</span> Reducción significativa en el consumo de gas</li>
          <li className="flex items-start gap-2"><span className="text-neb-gold mt-1">→</span> Mayor eficiencia energética</li>
          <li className="flex items-start gap-2"><span className="text-neb-gold mt-1">→</span> Menor impacto ambiental</li>
          <li className="flex items-start gap-2"><span className="text-neb-gold mt-1">→</span> Cumplimiento de normativa vigente</li>
          <li className="flex items-start gap-2"><span className="text-neb-gold mt-1">→</span> Tecnología moderna con mayor vida útil</li>
        </ul>
      </div>
      <Link href="/contacto"
        className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
        Solicitar cotización
      </Link>
    </div>
  )
}
