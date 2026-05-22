import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neb-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/Logo NEB Chile oscuro.jpg"
              alt="NEB Chile"
              width={140}
              height={49}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              NEB Chile es una empresa que se dedica al rubro de la instalación de Manejo de aire y Climatización en los edificios. Contamos con ingenieros expertos en la industria, desde la génesis del proyecto hasta una futura posventa y mantención.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neb-gold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['Quiénes Somos', '/quienes-somos'],
                ['Servicios', '/servicios'],
                ['Proyectos', '/proyectos/instalaciones'],
                ['Noticias', '/noticias'],
                ['Contacto', '/contacto'],
                ['Política de Privacidad', '/politica-de-privacidad'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-neb-gold text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neb-gold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:servicios@nebchile.cl" className="hover:text-neb-gold transition-colors">
                  servicios@nebchile.cl
                </a>
              </li>
              <li>
                <a href="tel:+56972932533" className="hover:text-neb-gold transition-colors">
                  +56 9 7293 2533
                </a>
              </li>
              <li>
                <a href="https://wa.me/56972932533" target="_blank" rel="noopener noreferrer"
                  className="hover:text-neb-gold transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/nebchile" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-neb-gold transition-colors text-sm">LinkedIn</a>
              <a href="https://www.facebook.com/nebchile" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-neb-gold transition-colors text-sm">Facebook</a>
              <a href="https://www.instagram.com/nebchile" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-neb-gold transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-neb-dark-border mt-10 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} NEB Chile SpA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
