import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para solicitar una cotización o más información sobre nuestros servicios.',
}

export default function Contacto() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-4">Contacto</h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-14">Cuéntanos tu proyecto y te respondemos a la brevedad.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Formulario */}
        <div>
          <form action="https://formsubmit.co/servicios@nebchile.cl" method="POST" className="space-y-5">
            <input type="hidden" name="_subject" value="Nuevo contacto desde nebchile.cl" />
            <input type="hidden" name="_next" value="/gracias" />
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre *</label>
              <input id="nombre" name="nombre" type="text" required
                className="w-full border border-gray-300 dark:border-neb-dark-border rounded-lg px-4 py-3 text-sm bg-white dark:bg-neb-dark-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-neb-gold focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo electrónico *</label>
              <input id="email" name="email" type="email" required
                className="w-full border border-gray-300 dark:border-neb-dark-border rounded-lg px-4 py-3 text-sm bg-white dark:bg-neb-dark-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-neb-gold focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono</label>
              <input id="telefono" name="telefono" type="tel"
                className="w-full border border-gray-300 dark:border-neb-dark-border rounded-lg px-4 py-3 text-sm bg-white dark:bg-neb-dark-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-neb-gold focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Servicio de interés</label>
              <select id="servicio" name="servicio"
                className="w-full border border-gray-300 dark:border-neb-dark-border rounded-lg px-4 py-3 text-sm bg-white dark:bg-neb-dark-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-neb-gold focus:border-transparent">
                <option value="">Selecciona un servicio</option>
                <option value="instalaciones">Área de Instalaciones</option>
                <option value="mantencion">Área de Mantención</option>
                <option value="renovacion">Renovación de Centrales Térmicas</option>
                <option value="proyectos">Generación de Proyectos</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje *</label>
              <textarea id="mensaje" name="mensaje" rows={5} required
                className="w-full border border-gray-300 dark:border-neb-dark-border rounded-lg px-4 py-3 text-sm bg-white dark:bg-neb-dark-surface text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-neb-gold focus:border-transparent resize-none" />
            </div>
            <button type="submit"
              className="w-full bg-neb-gold text-neb-black font-semibold py-3 rounded-lg hover:bg-neb-gold-dark transition-colors">
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Datos de contacto */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-neb-black dark:text-white mb-4">Información de contacto</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-neb-gold text-xl mt-0.5">✉</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Correo</p>
                  <a href="mailto:servicios@nebchile.cl" className="text-gray-800 dark:text-gray-200 hover:text-neb-gold dark:hover:text-neb-gold transition-colors">servicios@nebchile.cl</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neb-gold text-xl mt-0.5">📞</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Teléfono</p>
                  <a href="tel:+56964941468" className="text-gray-800 dark:text-gray-200 hover:text-neb-gold dark:hover:text-neb-gold transition-colors">+56 9 6494 1468</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">💬</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">WhatsApp</p>
                  <a href="https://wa.me/56964941468" target="_blank" rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:text-neb-gold dark:hover:text-neb-gold transition-colors">Escríbenos directamente</a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-neb-black dark:text-white mb-4">Redes Sociales</h2>
            <ul className="space-y-2">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nebchile' },
                { label: 'Facebook', href: 'https://www.facebook.com/nebchile' },
                { label: 'Instagram', href: 'https://www.instagram.com/nebchile' },
              ].map((r) => (
                <li key={r.label}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer"
                    className="text-neb-gold hover:underline text-sm">{r.label} →</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
