'use client'
import { useEffect, useRef, useState } from 'react'

type Opts = { threshold?: number; rootMargin?: string; once?: boolean }

/**
 * Triggers a flag once the element scrolls into view.
 * Disconnects after first hit by default (one-shot reveal).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(opts: Opts = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            if (opts.once !== false) obs.disconnect()
          } else if (opts.once === false) {
            setInView(false)
          }
        })
      },
      {
        threshold: opts.threshold ?? 0.15,
        rootMargin: opts.rootMargin ?? '0px 0px -50px 0px',
      }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [opts.threshold, opts.rootMargin, opts.once])

  return [ref, inView] as const
}
