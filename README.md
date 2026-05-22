# nebchile.cl — Sitio Web en Next.js

Migración del sitio de HubSpot a Next.js 14 + Tailwind CSS, listo para desplegar en Vercel.

## Tecnologías

- **Next.js 14** con App Router
- **TypeScript**
- **Tailwind CSS**
- **Formulario de contacto** via [FormSubmit](https://formsubmit.co) (sin backend, gratis)
- **Despliegue** en [Vercel](https://vercel.com) (plan gratuito)

## Estructura

```
nebchile-web/
├── app/                   # Páginas (App Router)
│   ├── page.tsx           # Home
│   ├── quienes-somos/
│   ├── servicios/
│   │   ├── area-de-instalaciones/
│   │   ├── area-de-mantencion/
│   │   ├── renovacion-de-centrales-termicas/
│   │   └── generacion-de-proyectos/
│   ├── proyectos/
│   │   ├── instalaciones/
│   │   └── mantenciones/
│   ├── noticias/
│   │   └── [slug]/
│   ├── contacto/
│   ├── gracias/
│   └── politica-de-privacidad/
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── content/posts/         # Blog posts en JSON (44 artículos)
└── lib/posts.ts           # Helpers para leer posts
```

## Cómo usar

### 1. Instalar dependencias
```bash
cd nebchile-web
npm install
```

### 2. Desarrollo local
```bash
npm run dev
# Abre http://localhost:3000
```

### 3. Subir a Vercel

**Opción A — Interfaz web (más fácil):**
1. Sube esta carpeta a GitHub (nuevo repositorio)
2. Ve a [vercel.com](https://vercel.com) → New Project
3. Importa el repositorio → Deploy

**Opción B — CLI:**
```bash
npm install -g vercel
vercel
```

## Formulario de contacto

El formulario usa [FormSubmit.co](https://formsubmit.co) — es gratis y sin backend.
Los mensajes llegan directamente a `servicios@nebchile.cl`.
La primera vez que alguien envíe un formulario, FormSubmit enviará un email de activación.

## Agregar/editar noticias

Los posts están en `content/posts/`. Cada archivo JSON tiene:
```json
{
  "slug": "nombre-del-articulo",
  "title": "Título del artículo",
  "description": "Descripción breve",
  "date": "2024-11-26",
  "featuredImage": "https://...",
  "content": [
    { "type": "p", "text": "Párrafo..." },
    { "type": "h2", "text": "Subtítulo" }
  ]
}
```
También actualiza `content/posts/_index.json` con el resumen del nuevo post.

## Dominio personalizado en Vercel

1. En Vercel → Settings → Domains → agrega `nebchile.cl` y `www.nebchile.cl`
2. Apunta los DNS de tu dominio a los servidores de Vercel (te aparecen las instrucciones)
