import Image from 'next/image'
import Reveal from '@/components/Reveal'

type Item = { label: string; img: string }

type Props = {
  eyebrow: string // "Qué instalamos"
  title: string
  prefix: string // "INST" / "MANT"
  items: Item[]
}

/**
 * Grid of service icon cards used by Instalaciones and Mantención.
 */
export default function ServiceItemsGrid({ eyebrow, title, prefix, items }: Props) {
  return (
    <section className="relative py-24 lg:py-28 bg-gray-50 dark:bg-neb-dark-surface overflow-hidden">
      <div className="absolute inset-0 pattern-grid-dark opacity-50 dark:opacity-100 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-neb-gold" />
            <span className="text-neb-gold text-xs font-bold uppercase tracking-[0.2em]">
              {eyebrow}
            </span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-neb-black dark:text-white leading-tight"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            {title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 100}>
              <div className="relative card-lift bg-white dark:bg-neb-black rounded-2xl p-8 lg:p-10 border border-gray-200 dark:border-neb-dark-border hover:border-neb-gold dark:hover:border-neb-gold hover:shadow-2xl dark:hover:shadow-neb-gold/10 group overflow-hidden h-full flex flex-col items-center text-center min-h-[320px]">
                <span className="absolute top-5 left-6 text-[10px] font-mono text-neb-gold tracking-[0.18em]">
                  {prefix} / {String(i + 1).padStart(2, '0')}
                </span>
                <div className="absolute -bottom-8 -right-3 text-[150px] lg:text-[180px] font-extrabold num-outline opacity-[0.12] group-hover:opacity-30 transition-opacity duration-500 leading-none select-none pointer-events-none">
                  {i + 1}
                </div>
                <div className="relative mt-8 mb-6 w-24 h-24 lg:w-28 lg:h-28 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[6deg]">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <h3 className="relative font-bold text-base lg:text-lg text-neb-black dark:text-white leading-snug mb-auto max-w-[260px]">
                  {item.label}
                </h3>
                <span className="relative block mt-6 h-0.5 w-12 group-hover:w-32 bg-neb-gold transition-all duration-500" />
                <span className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full bg-neb-gold transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
