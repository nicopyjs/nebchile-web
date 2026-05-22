'use client'
import { useEffect, useState } from 'react'
import { useInView } from './hooks/useInView'

type Props = {
  to: number
  suffix?: string
  duration?: number
}

/**
 * Animated number that counts up from 0 → `to` when scrolled into view.
 */
export default function AnimatedCounter({ to, suffix = '', duration = 1600 }: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setVal(Math.round(to * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}
