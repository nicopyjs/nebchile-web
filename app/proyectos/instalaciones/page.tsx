import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Proyectos de Instalación',
  description: 'Nuestros proyectos de instalación de sistemas de climatización en edificios.',
}

const PROYECTOS = [
  { nombre: 'VESPUCIO MACUL TORRE E', constructora: 'SANTOLAYA', pisos: '23 + CUBIERTA + 2 SUBTERRÁNEOS', deptos: '247', avance: '94%', sistemas: 'Extracción de baños, extracción de subterráneos y presurización' },
  { nombre: 'BUZETA', constructora: 'SANTOLAYA', pisos: '19 + CUBIERTA + 2 SUBTERRÁNEOS', deptos: '234', avance: '80%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización' },
  { nombre: 'ARGOMEDO', constructora: 'SANTA FE', pisos: '12 + CUBIERTA + 2 SUBTERRÁNEOS', deptos: '177', avance: '85%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización' },
  { nombre: 'COLÓN', constructora: 'SANTA FE', pisos: '14 + CUBIERTA + 3 SUBTERRÁNEOS', deptos: '52', avance: '82%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización. Calefacción a 1 departamento.' },
  { nombre: 'LAS TRANQUERAS', constructora: 'SANTOLAYA', pisos: '9 + CUBIERTA + 4 SUBTERRÁNEOS', deptos: '95', avance: '71.4%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización' },
]

export default function ProyectosInstalaciones() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-4">Proyectos de Instalación</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
        NEB se caracteriza por siempre entregar el Mejor Servicio, desde la asesoría hasta entregar Informes claros y precisos. Para nosotros cada cliente merece un trato preferencial.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {PROYECTOS.map((p) => (
          <div key={p.nombre} className="bg-white dark:bg-neb-dark-surface border border-gray-200 dark:border-neb-dark-border rounded-xl p-6 hover:shadow-md dark:hover:border-neb-gold transition-all">
            <h2 className="text-lg font-bold text-neb-black dark:text-neb-gold mb-4">{p.nombre}</h2>
            <dl className="space-y-2 text-sm">
              <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Constructora</dt><dd className="text-gray-800 dark:text-gray-200">{p.constructora}</dd></div>
              <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Pisos</dt><dd className="text-gray-800 dark:text-gray-200">{p.pisos}</dd></div>
              <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Departamentos</dt><dd className="text-gray-800 dark:text-gray-200">{p.deptos}</dd></div>
              <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Avance</dt>
                <dd className="text-gray-800 dark:text-gray-200">
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 dark:bg-neb-dark-border rounded-full h-2">
                      <div className="bg-neb-gold h-2 rounded-full" style={{ width: p.avance }} />
                    </div>
                    <span className="text-neb-gold font-semibold">{p.avance}</span>
                  </div>
                </dd>
              </div>
              <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Sistemas</dt><dd className="text-gray-700 dark:text-gray-300 capitalize">{p.sistemas}</dd></div>
            </dl>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/contacto"
          className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
          Solicitar cotización
        </Link>
      </div>
    </div>
  )
}
