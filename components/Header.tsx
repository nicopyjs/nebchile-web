'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  {
    label: 'Servicios',
    href: '/servicios',
    children: [
      { label: 'Área de Instalaciones', href: '/servicios/area-de-instalaciones' },
      { label: 'Área de Mantención', href: '/servicios/area-de-mantencion' },
      { label: 'Renovación de Centrales Térmicas', href: '/servicios/renovacion-de-centrales-termicas' },
      { label: 'Generación de Proyectos', href: '/servicios/generacion-de-proyectos' },
    ],
  },
  {
    label: 'Proyectos',
    href: '/proyectos',
    children: [
      { label: 'Instalaciones', href: '/proyectos/instalaciones' },
      { label: 'Mantenciones', href: '/proyectos/mantenciones' },
    ],
  },
  { label: 'Noticias', href: '/noticias' },
  { label: 'Contacto', href: '/contacto' },
]

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme, toggle } = useTheme()

  return (
    <header className="bg-white dark:bg-neb-black shadow-sm dark:shadow-neb-dark-border sticky top-0 z-50 border-b border-transparent dark:border-neb-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* Logo claro (modo claro) */}
            <Image
              src="https://www.nebchile.cl/hs-fs/hubfs/nebchile-logo-1.png?width=200&height=70&name=nebchile-logo-1.png"
              alt="NEB Chile - Ingeniería en Climatización"
              width={160}
              height={56}
              className="h-14 w-auto block dark:hidden"
              priority
            />
            {/* Logo oscuro (modo oscuro) */}
            <Image
              src="/Logo NEB Chile oscuro.jpg"
              alt="NEB Chile - Ingeniería en Climatización"
              width={160}
              height={56}
              className="h-14 w-auto hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-neb-gold dark:hover:text-neb-gold rounded-md transition-colors"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-xs">▾</span>}
                </Link>
                {item.children && (
                  <div
                    className="absolute left-0 mt-0 w-64 bg-white dark:bg-neb-dark-surface shadow-lg rounded-md border border-gray-100 dark:border-neb-dark-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neb-dark-border hover:text-neb-gold dark:hover:text-neb-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="ml-2 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neb-dark-surface transition-colors"
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            <Link
              href="/contacto"
              className="ml-2 px-4 py-2 bg-neb-gold text-neb-black text-sm font-semibold rounded-md hover:bg-neb-gold-dark transition-colors"
            >
              Contáctanos
            </Link>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neb-dark-surface transition-colors"
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current mb-1.5" />
              <span className="block w-6 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-neb-black border-t border-gray-100 dark:border-neb-dark-border px-4 py-4 space-y-2">
          {NAV.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-neb-gold dark:hover:text-neb-gold"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-neb-gold dark:hover:text-neb-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
