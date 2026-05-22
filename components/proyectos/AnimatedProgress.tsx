'use client'
import { useEffect, useState } from 'react'
import { useInView } from '@/components/hooks/useInView'

type Props = {
  /** Percentage 0–100 (no % suffix) */
  value: number
  /** Stagger delay in ms */
  delay?: number
}

/**
 * Gold progress bar that animates from 0% to `value` once it scrolls into view.
 */
export default function AnimatedProgress({ value, delay = 0 }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setAnimated(true), delay)
    return () => clearTimeout(t)
  }, [inView, delay])

  return (
    <div
      ref={ref}
      className="w-full bg-gray-200 dark:bg-neb-dark-border rounded-full h-1.5 overflow-hidden"
    >
      <div
        className="h-full bg-neb-gold rounded-full"
        style={{
          width: animated ? `${value}%` : '0%',
          transition: 'width 1.6s cubic-bezier(.2,.7,.2,1)',
        }}
      />
    </div>
  )
}
