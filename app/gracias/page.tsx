import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Mensaje enviado' }

export default function Gracias() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-neb-black dark:text-white mb-4">¡Mensaje enviado!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Gracias por contactarnos. Te responderemos a la brevedad.</p>
        <Link href="/"
          className="inline-block bg-neb-gold text-neb-black font-semibold px-8 py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
