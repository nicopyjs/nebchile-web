import type { Metadata } from 'next'
import HeroCarousel from '@/components/HeroCarousel'
import ValueProps from '@/components/home/ValueProps'
import StatsStrip from '@/components/home/StatsStrip'
import ServiciosGrid from '@/components/home/ServiciosGrid'
import NoticiasGrid from '@/components/home/NoticiasGrid'
import CtaFinal from '@/components/home/CtaFinal'

export const metadata: Metadata = {
  title: 'NEB Chile | Ingeniería en Climatización',
  description:
    'NEB Chile es una empresa que se dedica al rubro de la instalación de Manejo de aire y Climatización en los edificios.',
}

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ValueProps />
      <StatsStrip />
      <ServiciosGrid />
      <NoticiasGrid />
      <CtaFinal />
    </>
  )
}
