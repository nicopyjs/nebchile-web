import type { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeaturePoints from '@/components/services/ServiceFeaturePoints'
import ServiceItemsGrid from '@/components/services/ServiceItemsGrid'
import ServiceQuote from '@/components/services/ServiceQuote'
import ServiceCta from '@/components/services/ServiceCta'

export const metadata: Metadata = {
  title: 'Área de Instalaciones',
  description:
    'Instalamos sistemas de climatización en proyectos en construcción, con un alto nivel de profesionalismo y los mejores estándares de calidad.',
}

const ITEMS = [
  { label: 'Extracción de aire en Baños, Cocinas, Quinchos, Subterráneos, entre otros.', img: 'https://www.nebchile.cl/hubfs/1-2.png' },
  { label: 'Sistemas de Presurización', img: 'https://www.nebchile.cl/hubfs/2-1.png' },
  { label: 'Calefacción', img: 'https://www.nebchile.cl/hubfs/3-1.png' },
  { label: 'Centrales Térmicas', img: 'https://www.nebchile.cl/hubfs/4-1.png' },
  { label: 'Redes de Baja Presión y Tratamientos de Agua', img: 'https://www.nebchile.cl/hubfs/5.png' },
  { label: 'Aire Acondicionado', img: 'https://www.nebchile.cl/hubfs/6.png' },
]

const FEATURE_POINTS = [
  { kicker: 'Asesoría', text: 'Acompañamos desde el diseño hasta la puesta en marcha.' },
  { kicker: 'Calidad', text: 'Estándares técnicos rigurosos y materiales certificados.' },
  { kicker: 'Plazos', text: 'Costos y plazos certeros, comunicados desde el día uno.' },
]

export default function AreaInstalaciones() {
  return (
    <>
      <ServiceHero
        num="01"
        breadcrumb="Área de Instalaciones"
        titleStart="Área de"
        titleGold="Instalaciones"
        subtitle="Instalamos sistemas de climatización en proyectos en construcción, con un alto nivel de profesionalismo y los mejores estándares de calidad."
        image="https://www.nebchile.cl/hubfs/nebchile-servicios-6.jpg"
      />
      <ServiceFeaturePoints items={FEATURE_POINTS} />
      <ServiceItemsGrid
        eyebrow="Qué instalamos"
        title="Sistemas que diseñamos, instalamos y entregamos llave en mano."
        prefix="INST"
        items={ITEMS}
      />
      <ServiceQuote
        prefix="NEB se caracteriza por siempre entregar"
        highlight="el mejor servicio"
        suffix=", desde la asesoría hasta entregar informes claros y precisos. Para nosotros, cada cliente merece un trato preferencial."
      />
      <ServiceCta
        kicker="Tu proyecto"
        titleLine1="¿Tienes un proyecto"
        titleLine2="en construcción?"
        subtitle="Te entregamos una propuesta técnica completa con costos y plazos certeros. Sin compromiso."
        primaryLabel="Contáctanos"
      />
    </>
  )
}
