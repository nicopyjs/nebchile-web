'use client'
import { ElementType, ReactNode } from 'react'
import { useInView } from './hooks/useInView'

type Props = {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
}

/**
 * Fades + slides in its children when scrolled into view.
 * Stagger siblings with the `delay` prop (ms).
 */
export default function Reveal({ children, delay = 0, as: As = 'div', className = '' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const cls = 'reveal ' + (inView ? 'in-view ' : '') + className
  return (
    <As ref={ref} className={cls} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </As>
  )
}
