import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Proyectos de Mantención',
  description: 'Nuestros proyectos de mantención de sistemas de climatización en edificios de Santiago.',
}

const PROYECTOS = [
  { nombre: 'ECO CAPITAL', direccion: 'Av. Libertador Bernardo O\'Higgins #4103, Estación Central', edificios: 2, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua fría y caliente', 'Manejo de Aire'] },
  { nombre: 'ECO ORIGEN', direccion: 'Av. Víctor Jara #3866, Estación Central', edificios: 1, sistemas: ['1 Central Térmica', '1 Sala de Bombas', 'Verticales de distribución de agua fría y caliente', 'Manejo de Aire'] },
  { nombre: 'ELIODORO MIX', direccion: 'Av. Hernando de Aguirre #1191, Providencia', edificios: 2, sistemas: ['2 Centrales Térmicas', 'Calefacción', '1 Sala de Bombas', '2 Chillers', 'Manejo de Aire'] },
  { nombre: 'ECO FUTURO II', direccion: 'Av. Radal #066, Estación Central', edificios: 2, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire', 'Paneles Solares Térmicos'] },
  { nombre: 'EL TAMARUGO', direccion: 'Av. El Tamarugo #1080, Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción'] },
  { nombre: 'LOS CIPRESES', direccion: 'Av. Presidente Kennedy #5334, Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción'] },
  { nombre: 'LOS CASTAÑOS', direccion: 'Av. Nilo Azul #1820, Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción'] },
  { nombre: 'SANTA MAGDALENA', direccion: 'Av. Santa Magdalena #10, Providencia', edificios: 1, sistemas: ['1 Central Térmica'] },
  { nombre: 'AGUSTÍN DEL CASTILLO', direccion: 'Av. Agustín del Castillo #2841, Vitacura', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire'] },
  { nombre: 'SANTA ELENA', direccion: 'Av. Padre Orellana #1656, Santiago', edificios: 2, sistemas: ['2 Centrales Térmicas'] },
  { nombre: 'GRAN MANANTIAL', direccion: 'C. San Ignacio de Loyola #1372, Santiago', edificios: 1, sistemas: ['1 Central Térmica'] },
  { nombre: 'ECO ENCALADA', direccion: 'Av. Almirante Blanco Encalada #2527, Santiago', edificios: 3, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire'] },
  { nombre: 'ECO URBE', direccion: 'Av. Mujica #55, Ñuñoa', edificios: 2, sistemas: ['2 Centrales Térmicas', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire', 'Paneles Solares Térmicos'] },
  { nombre: 'HERMANOS CABOT C', direccion: 'Av. Hermanos Cabot #6671, Las Condes', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire'] },
  { nombre: 'LUIS THAYER OJEDA', direccion: 'Av. Luis Thayer Ojeda #1153, Providencia', edificios: 1, sistemas: ['1 Central Térmica', 'Calefacción', '1 Sala de Bombas', 'Verticales de distribución de agua', 'Manejo de Aire', 'Paneles Solares Térmicos'] },
]

export default function ProyectosMantenciones() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-4">Proyectos de Mantención</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
        NEB se caracteriza por siempre entregar el Mejor Servicio, desde la asesoría hasta entregar Informes claros y precisos. Para nosotros cada cliente merece un trato preferencial.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {PROYECTOS.map((p) => (
          <div key={p.nombre} className="bg-white dark:bg-neb-dark-surface border border-gray-200 dark:border-neb-dark-border rounded-xl p-6 hover:shadow-md dark:hover:border-neb-gold transition-all">
            <h2 className="text-base font-bold text-neb-black dark:text-neb-gold mb-1">{p.nombre}</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{p.direccion}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{p.edificios} {p.edificios === 1 ? 'Edificio' : 'Edificios'}</p>
            <ul className="space-y-1">
              {p.sistemas.map((s) => (
                <li key={s} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-neb-gold mt-0.5 flex-shrink-0">•</span>{s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/contacto"
          className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
          Solicitar mantención
        </Link>
      </div>
    </div>
  )
}
