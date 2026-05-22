'use client'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export type Proyecto = {
  nombre: string
  direccion: string
  comuna: string
  edificios: number
  sistemas: string[]
  img: string
}

type Props = {
  proyectos: Proyecto[]
}

/**
 * Interactive filter by comuna + responsive grid of project cards.
 * Used inside the /proyectos/mantenciones server page.
 */
export default function MantencionesFilter({ proyectos }: Props) {
  const [filter, setFilter] = useState('Todas')

  const { comunas, comunaCounts } = useMemo(() => {
    const counts: Record<string, number> = {}
    proyectos.forEach((p) => {
      if (p.comuna) counts[p.comuna] = (counts[p.comuna] || 0) + 1
    })
    const list = ['Todas', ...Object.keys(counts).sort((a, b) => counts[b] - counts[a])]
    return { comunas: list, comunaCounts: counts }
  }, [proyectos])

  const filtered =
    filter === 'Todas' ? proyectos : proyectos.filter((p) => p.comuna === filter)

  return (
    <>
      {/* Comuna chips */}
      <Reveal className="mb-10">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mr-2">
            Comuna
          </span>
          {comunas.map((c) => {
            const active = c === filter
            const count = c === 'Todas' ? proyectos.length : comunaCounts[c]
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={
                  'inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ' +
                  (active
                    ? 'bg-neb-gold text-neb-black shadow-lg shadow-neb-gold/20'
                    : 'bg-white dark:bg-neb-black text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold hover:text-neb-gold dark:hover:text-neb-gold')
                }
              >
                {c}
                <span
                  className={
                    'tabular-nums text-[10px] ' +
                    (active ? 'text-neb-black/60' : 'text-gray-400')
                  }
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {filtered.map((p, i) => (
          <Reveal key={p.nombre} delay={(i % 3) * 80}>
            <div className="card-lift bg-white dark:bg-neb-black rounded-2xl overflow-hidden border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold hover:shadow-2xl dark:hover:shadow-neb-gold/10 group h-full flex flex-col">
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-black">
                <Image
                  src={p.img}
                  alt={p.nombre}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="img-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono text-white bg-black/55 backdrop-blur-sm px-2 py-1 rounded-md tracking-[0.15em]">
                  MANT / {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm px-2 py-1 rounded-md">
                  <span className="text-[10px] text-white font-bold tabular-nums">
                    {p.edificios}×
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: Math.min(p.edificios, 4) }).map((_, k) => (
                      <span key={k} className="w-1 h-3 bg-neb-gold rounded-sm" />
                    ))}
                  </div>
                </div>
                {p.comuna && (
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase bg-neb-gold text-neb-black px-2 py-1 rounded-md tracking-wider">
                    {p.comuna}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5 lg:p-6 flex-1 flex flex-col">
                <h3 className="font-extrabold text-base lg:text-lg text-neb-black dark:text-white mb-1.5 leading-tight">
                  {p.nombre}
                </h3>
                {p.direccion && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 flex items-start gap-1.5">
                    <span className="text-neb-gold mt-0.5 flex-shrink-0">▸</span>
                    {p.direccion}
                  </p>
                )}

                {p.sistemas.length > 0 ? (
                  <ul className="space-y-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-neb-dark-border">
                    {p.sistemas.map((s) => (
                      <li
                        key={s}
                        className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2 leading-snug"
                      >
                        <span className="text-neb-gold flex-shrink-0 mt-0.5 font-bold">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neb-dark-border">
                    <span className="text-xs italic text-gray-400 dark:text-gray-500">
                      Ficha técnica próximamente
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No hay proyectos en esa comuna.
        </div>
      )}
    </>
  )
}
