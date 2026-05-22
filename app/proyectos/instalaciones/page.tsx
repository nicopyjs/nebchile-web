import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Proyectos de Instalación',
  description: 'Nuestros proyectos de instalación de sistemas de climatización en edificios.',
}

const PROYECTOS = [
  { nombre: 'VESPUCIO MACUL TORRE E', constructora: 'SANTOLAYA', pisos: '23 + CUBIERTA + 2 SUBTERRÁNEOS', deptos: '247', avance: '94%', sistemas: 'Extracción de baños, extracción de subterráneos y presurización', img: 'https://www.nebchile.cl/hubfs/VESPUCIO-MACUL-TORRE-E-1.jpg' },
  { nombre: 'BUZETA', constructora: 'SANTOLAYA', pisos: '19 + CUBIERTA + 2 SUBTERRÁNEOS', deptos: '234', avance: '80%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización', img: 'https://www.nebchile.cl/hubfs/BUZETA.jpg' },
  { nombre: 'ARGOMEDO', constructora: 'SANTA FE', pisos: '12 + CUBIERTA + 2 SUBTERRÁNEOS', deptos: '177', avance: '85%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización', img: 'https://www.nebchile.cl/hubfs/ARGOMEDO.jpg' },
  { nombre: 'COLÓN', constructora: 'SANTA FE', pisos: '14 + CUBIERTA + 3 SUBTERRÁNEOS', deptos: '52', avance: '82%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización. Calefacción a 1 departamento.', img: 'https://www.nebchile.cl/hubfs/COLON.jpg' },
  { nombre: 'LAS TRANQUERAS', constructora: 'SANTOLAYA', pisos: '9 + CUBIERTA + 4 SUBTERRÁNEOS', deptos: '95', avance: '71.4%', sistemas: 'Extracción de baños, extracción de cocinas, extracción de subterráneos y presurización', img: 'https://www.nebchile.cl/hubfs/LAS-TRANQUERAS.jpg' },
  { nombre: 'SANTA CRISTINA', constructora: '', pisos: '', deptos: '', avance: '', sistemas: '', img: 'https://www.nebchile.cl/hubfs/SANTA-CRISTINA.jpg' },
  { nombre: 'LINCOYAN', constructora: '', pisos: '', deptos: '', avance: '', sistemas: '', img: 'https://www.nebchile.cl/hubfs/LINCOYAN-2.jpg' },
  { nombre: 'CHRISTIENSEN', constructora: '', pisos: '', deptos: '', avance: '', sistemas: '', img: 'https://www.nebchile.cl/hubfs/CHRISTIENSEN.jpg' },
  { nombre: 'ECO QUILIN I', constructora: '', pisos: '', deptos: '', avance: '', sistemas: '', img: 'https://www.nebchile.cl/hubfs/ECO-QUILIN-I.jpg' },
]

export default function ProyectosInstalaciones() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Banner */}
      <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-12">
        <Image src="https://www.nebchile.cl/hubfs/nebchile-instalaciones.jpg" alt="Proyectos de Instalación NEB Chile" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-end p-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Proyectos de Instalación</h1>
            <p className="text-gray-200 text-lg">NEB se caracteriza por siempre entregar el Mejor Servicio.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {PROYECTOS.map((p) => (
          <div key={p.nombre} className="bg-white dark:bg-neb-dark-surface border border-gray-200 dark:border-neb-dark-border rounded-xl overflow-hidden hover:shadow-md dark:hover:border-neb-gold transition-all">
            <div className="relative h-44">
              <Image src={p.img} alt={p.nombre} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-bold text-neb-black dark:text-neb-gold mb-3">{p.nombre}</h2>
              <dl className="space-y-2 text-sm">
                {p.constructora && <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Constructora</dt><dd className="text-gray-800 dark:text-gray-200">{p.constructora}</dd></div>}
                {p.pisos && <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Pisos</dt><dd className="text-gray-800 dark:text-gray-200">{p.pisos}</dd></div>}
                {p.deptos && <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Departamentos</dt><dd className="text-gray-800 dark:text-gray-200">{p.deptos}</dd></div>}
                {p.avance && (
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
                )}
                {p.sistemas && <div><dt className="text-gray-500 dark:text-gray-400 font-medium">Sistemas</dt><dd className="text-gray-700 dark:text-gray-300">{p.sistemas}</dd></div>}
              </dl>
            </div>
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
