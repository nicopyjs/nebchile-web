import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'NEB Chile | Ingeniería en Climatización',
  description: 'NEB Chile es una empresa que se dedica al rubro de la instalación de Manejo de aire y Climatización en los edificios.',
}

export default function Home() {
  const latestPosts = getPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neb-black dark:bg-neb-dark-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neb-black to-gray-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              MANTENCIÓN Y RENOVACIÓN DE SALAS DE CALDERA EN EDIFICIOS
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Aseguramos que tu Caldera esté en las Mejores Condiciones. Ingenieros expertos en Climatización con Costos y Plazos Certeros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto"
                className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-4 rounded-lg hover:bg-neb-gold-dark transition-colors text-center">
                Contáctanos
              </Link>
              <Link href="/quienes-somos"
                className="inline-block border-2 border-neb-gold text-neb-gold font-semibold px-8 py-4 rounded-lg hover:bg-neb-gold hover:text-neb-black transition-colors text-center">
                Quiénes Somos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="py-20 bg-gray-50 dark:bg-neb-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: '¿QUÉ HACEMOS?',
                desc: 'Aseguramos que tu Caldera esté en las Mejores Condiciones. Instalación, mantención y renovación de sistemas de climatización.',
                href: '/servicios',
              },
              {
                icon: '👷',
                title: '¿QUIÉNES SOMOS?',
                desc: 'Somos Ingenieros Expertos en Climatización y Calderas, con años de experiencia en el rubro.',
                href: '/quienes-somos',
              },
              {
                icon: '✅',
                title: '¿POR QUÉ NEB?',
                desc: 'Mejoramos la Calidad y Eficiencia, con Costos y Plazos Certeros. Tu aliado técnico de confianza.',
                href: '/contacto',
              },
            ].map((item) => (
              <Link key={item.title} href={item.href}
                className="bg-white dark:bg-neb-dark-bg rounded-xl p-8 shadow-sm hover:shadow-md dark:shadow-none dark:border dark:border-neb-dark-border transition-shadow group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2 className="text-lg font-bold text-neb-black dark:text-neb-gold mb-3 group-hover:text-neb-gold dark:group-hover:text-neb-gold-light transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-white dark:bg-neb-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-neb-black dark:text-white mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Soluciones integrales en climatización para edificios residenciales y comerciales.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Área de Instalaciones', href: '/servicios/area-de-instalaciones', icon: '🏗️', desc: 'Instalamos sistemas de climatización en proyectos en construcción.' },
              { title: 'Área de Mantención', href: '/servicios/area-de-mantencion', icon: '🔩', desc: 'Mantenemos tus sistemas en perfecto estado de funcionamiento.' },
              { title: 'Renovación de Centrales Térmicas', href: '/servicios/renovacion-de-centrales-termicas', icon: '♨️', desc: 'Renovamos tu Central Térmica con la mejor tecnología del mercado.' },
              { title: 'Generación de Proyectos', href: '/servicios/generacion-de-proyectos', icon: '📐', desc: 'Desde la ingeniería hasta la entrega final del proyecto.' },
            ].map((s) => (
              <Link key={s.href} href={s.href}
                className="border border-gray-200 dark:border-neb-dark-border rounded-xl p-6 hover:border-neb-gold dark:hover:border-neb-gold hover:shadow-md transition-all group bg-white dark:bg-neb-dark-surface">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-neb-black dark:text-white mb-2 group-hover:text-neb-gold dark:group-hover:text-neb-gold transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias recientes */}
      <section className="py-20 bg-gray-50 dark:bg-neb-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-neb-black dark:text-white">Noticias</h2>
            <Link href="/noticias" className="text-neb-gold font-medium hover:underline text-sm">
              Ver todas →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/noticias/${post.slug}`}
                className="bg-white dark:bg-neb-dark-bg rounded-xl overflow-hidden shadow-sm hover:shadow-md dark:shadow-none dark:border dark:border-neb-dark-border transition-shadow group">
                {post.featuredImage && (
                  <div className="relative h-48 bg-gray-100 dark:bg-neb-dark-surface">
                    <Image src={post.featuredImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  {post.date && <p className="text-xs text-gray-400 mb-2">{post.date}</p>}
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-neb-gold dark:group-hover:text-neb-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neb-gold mt-3 font-medium">Leer Más →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-neb-gold text-neb-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una cotización?</h2>
          <p className="text-neb-black/70 text-lg mb-8">Contáctanos y te responderemos a la brevedad.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="bg-neb-black text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors">
              Escríbenos
            </Link>
            <a href="https://wa.me/56972932533" target="_blank" rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-700 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
