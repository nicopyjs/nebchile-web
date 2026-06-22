import type { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceFeaturePoints from '@/components/services/ServiceFeaturePoints'
import ServiceItemsGrid from '@/components/services/ServiceItemsGrid'
import ServiceQuote from '@/components/services/ServiceQuote'
import ServiceCta from '@/components/services/ServiceCta'

export const metadata: Metadata = {
  title: 'Área de Mantención',
  description:
    'Mantenemos y operamos sistemas de calderas, climatización y redes de agua en edificios residenciales con altos estándares de calidad y seguridad.',
}

const ITEMS = [
  { label: 'Mantención de Calderas y Sistemas de Calefacción', img: '/images/general/1a.png' },
  { label: 'Operación de Centrales Térmicas', img: '/images/general/2a.png' },
  { label: 'Revisión y Mantención de Sistemas de Presurización', img: '/images/general/3a.png' },
  { label: 'Mantención de Redes de Agua', img: '/images/general/4a.png' },
  { label: 'Mantención de Sistemas de Extracción de Aire e Informes Técnicos periódicos', img: '/images/general/5a.png' },
]

const FEATURE_POINTS = [
  { kicker: 'Operación', text: 'Operamos las salas de calderas y mantenemos los equipos en óptimas condiciones.' },
  { kicker: 'Inspección', text: 'Revisiones programadas para anticipar fallas y prolongar vida útil.' },
  { kicker: 'Reportes', text: 'Informes técnicos periódicos, claros y trazables.' },
]

export default function AreaMantencion() {
  return (
    <>
      <ServiceHero
        num="02"
        breadcrumb="Área de Mantención"
        titleStart="Área de"
        titleGold="Mantención"
        subtitle="Mantenemos y operamos sistemas de calderas, climatización y redes de agua en edificios residenciales con los más altos estándares de calidad y seguridad."
        image="/images/general/nebchile-servicios-8.jpg"
      />
      <ServiceFeaturePoints items={FEATURE_POINTS} />
      <ServiceItemsGrid
        eyebrow="Qué mantenemos"
        title="Equipos, redes y sistemas operando como el primer día."
        prefix="MANT"
        items={ITEMS}
      />
      <ServiceQuote
        prefix="NEB se caracteriza por siempre entregar"
        highlight="el mejor servicio"
        suffix=", desde la asesoría hasta entregar informes claros y precisos. Para nosotros, cada cliente merece un trato preferencial."
      />
      <ServiceCta
        kicker="Plan de mantención"
        titleLine1="¿Necesitas un plan"
        titleLine2="de mantención?"
        subtitle="Te visitamos, evaluamos y te entregamos una propuesta con costos y frecuencias certeras."
        primaryLabel="Contáctanos"
      />
    </>
  )
}
