import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de NEB Chile.',
}

export default function PoliticaPrivacidad() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-neb-black dark:text-white mb-8">Política de Privacidad</h1>
      <div className="prose max-w-none text-gray-700 dark:text-gray-300 space-y-6">
        <p>NEB Chile SpA se compromete a proteger la privacidad de los datos personales de sus usuarios y clientes, de acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile.</p>
        <h2 className="text-xl font-bold text-neb-gold">Datos que recopilamos</h2>
        <p>Recopilamos información que usted nos proporciona directamente a través de nuestros formularios de contacto, incluyendo: nombre, correo electrónico, número de teléfono y el contenido de sus mensajes.</p>
        <h2 className="text-xl font-bold text-neb-gold">Uso de la información</h2>
        <p>Utilizamos la información recopilada exclusivamente para responder a sus consultas y proporcionar los servicios solicitados. No compartimos sus datos personales con terceros sin su consentimiento expreso.</p>
        <h2 className="text-xl font-bold text-neb-gold">Cookies</h2>
        <p>Este sitio web puede utilizar cookies para mejorar la experiencia del usuario. Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envía una.</p>
        <h2 className="text-xl font-bold text-neb-gold">Contacto</h2>
        <p>Si tiene preguntas sobre esta política de privacidad, puede contactarnos en servicios@nebchile.cl.</p>
      </div>
    </div>
  )
}
