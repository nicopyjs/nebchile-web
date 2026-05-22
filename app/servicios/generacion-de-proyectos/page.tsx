import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Generación de Proyectos',
  description: 'Ingeniería y generación de proyectos de climatización desde el diseño hasta la entrega.',
}

export default function GeneracionProyectos() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/servicios" className="hover:text-neb-gold transition-colors">Servicios</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900 dark:text-gray-200">Generación de Proyectos</span>
      </nav>
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-6">Generación de Proyectos</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
        Desde la ingeniería y diseño hasta la entrega final del proyecto, acompañamos a nuestros clientes en cada etapa con asesoría técnica de alto nivel e informes claros y precisos.
      </p>
      <Link href="/contacto"
        className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
        Consultar
      </Link>
    </div>
  )
}
