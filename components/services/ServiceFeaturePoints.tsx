import Reveal from '@/components/Reveal'

type FeaturePoint = { kicker: string; text: string }

type Props = {
  items: FeaturePoint[]
}

export default function ServiceFeaturePoints({ items }: Props) {
  return (
    <section className="relative py-10 lg:py-14 bg-white dark:bg-neb-dark-bg border-b border-gray-100 dark:border-neb-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {items.map((f, i) => (
            <Reveal key={f.kicker} delay={i * 100}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neb-gold/10 border border-neb-gold/40 flex items-center justify-center">
                  <span className="w-2 h-2 bg-neb-gold rounded-sm" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-neb-gold mb-1.5">
                    {f.kicker}
                  </div>
                  <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-snug">
                    {f.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
