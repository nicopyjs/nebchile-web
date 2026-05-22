import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description: 'Somos un grupo de ingenieros y técnicos profesionales, especializados en la climatización.',
}

export default function QuienesSomos() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-8">Quiénes Somos</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Somos un grupo de ingenieros y técnicos profesionales, especializados en la climatización, quienes creen que entregar un servicio de alto estándar a un precio justo es posible. Por ello decidimos formar NEB Chile, una empresa ágil y moderna orientada a dar Soluciones y transformarnos en un aliado para nuestros clientes.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
          El manejo de calderas en comunidades de edificios residenciales requiere de un trabajo profesional y de alta calidad que entregue confianza y seguridad a las personas. Ese tipo de instalaciones no pueden estar en manos inexpertas. En NEB, nos preocupamos por cumplir todos los estándares de calidad y respaldo para así entregar el mejor servicio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-neb-gold text-neb-black rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4">Nuestra Misión</h2>
          <p className="text-neb-black/80 leading-relaxed">
            Satisfacer el mercado nacional en todas las ramas de la climatización, mediante el profesionalismo y la técnica aplicada a los procesos y, al mismo tiempo, enorgullecer a quienes han optado por NEB Chile como su proveedor de servicios.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-neb-dark-surface rounded-xl p-8 border border-gray-200 dark:border-neb-dark-border">
          <h2 className="text-xl font-bold text-neb-black dark:text-neb-gold mb-4">Nuestra Visión</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Liderar el mercado nacional de climatización de edificios, siendo el referente en calidad, profesionalismo y servicio para nuestros clientes y competidores.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-neb-dark-surface rounded-xl p-10 text-center border border-gray-100 dark:border-neb-dark-border">
        <h2 className="text-2xl font-bold text-neb-black dark:text-white mb-4">¿Quieres trabajar con nosotros?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Contáctanos y cuéntanos tu proyecto.</p>
        <Link href="/contacto"
          className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
          Contáctanos
        </Link>
      </div>
    </div>
  )
}
