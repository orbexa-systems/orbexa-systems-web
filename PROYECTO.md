# Orbexa Systems — Landing Page

Landing page profesional para empresa de tecnología/consultoría IT. Construida con Next.js 15, React, TypeScript y Tailwind CSS. Orientada a generación de leads B2B.

## Stack

- Next.js 16 (App Router) + Turbopack
- React + TypeScript
- Tailwind CSS v4
- lucide-react (iconos)
- Resend (envío de emails)
- Fuente: Inter (Google Fonts)

## Deploy

- **Producción:** https://empresa-ecru.vercel.app
- **Repositorio:** https://github.com/shernandez2013/empresa
- CI/CD automático: Vercel despliega al hacer push/merge a `master`

## Branches

| Branch | Estado | Descripción |
|---|---|---|
| `master` | ✅ Producción | Rama principal — lo que está en Vercel |
| `develop` | ✅ Sincronizado | Rama de integración — siempre igual a master |
| `feature/rebranding` | ✅ Mergeado | Rebranding completo a Orbexa Systems |
| `feature/tech-carousel` | ✅ Mergeado | Carrusel infinito de tecnologías |
| `feature/contact-email` | ✅ Mergeado | Integración email Resend |

> **Flujo correcto:** crear branch desde `develop` → PR a `master` → Vercel despliega → sincronizar `develop` con `master`

## Variables de entorno

Archivo `.env.local` (local, nunca sube a Git):
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=siheca2013@gmail.com
```

En Vercel: Settings → Environment Variables (mismas variables configuradas).

## Estructura

```
app/
  layout.tsx              — metadata SEO, Schema.org JSON-LD, fuente Inter
  page.tsx                — ensambla todos los componentes en orden
  globals.css             — animaciones globales (float, fade-in-up, card-hover, tech-item)
  icon.svg                — favicon circular con ícono orbital Orbexa
  api/
    contact/
      route.ts            — POST /api/contact: recibe el formulario y envía email via Resend

components/
  Navbar.tsx              — siempre blanca, logo Orbexa Systems inline SVG, mobile menu
  Hero.tsx                — fondo con grid + glow blobs, code mockup animado, 3 métricas
  Services.tsx            — 6 tarjetas (Soft, Web, APIs, Cloud, IA, Soporte)
  WhyUs.tsx               — 2 columnas: texto+stats / 6 razones con íconos
  Technologies.tsx        — carrusel infinito de 2 filas animadas en direcciones opuestas
  CaseStudies.tsx         — 3 casos (Fintech, BarraFresh/Gastronomía, Salud)
  Process.tsx             — timeline de 6 pasos con íconos y duración estimada
  Testimonials.tsx        — 3 testimonios (incluye Mary González / BarraFresh)
  CTA.tsx                 — banner azul degradado con llamada a acción principal
  Contact.tsx             — formulario controlado + llamada real a /api/contact + éxito/error
  Footer.tsx              — 4 columnas + redes sociales + copyright

public/
  orbexa-systems-logo-completo.svg
  orbexa-logo-compacto.svg
  orbexa-logo-blanco-fondo-oscuro.svg
  orbexa-logo-negro.svg
```

## Paleta de marca Orbexa

| Token | Valor |
|---|---|
| Dark navy | `#042C53` |
| Primary blue | `#185FA5` |
| Light blue | `#378ADD` |
| Background | `#F8FAFC` |
| Dark text | `#2C2C2A` |

## Datos de contacto

- **Email:** siheca2013@gmail.com.mx
- **WhatsApp:** +52 55 8600 9578 → wa.me/525586009578
- **Dirección:** Lirio 20, Lomas de San Miguel, CP 52928

## Secciones (en orden de aparición)

1. Navbar — siempre blanca, logo completo Orbexa Systems
2. Hero — métricas: +50 proyectos, +20 clientes, 99.9% uptime
3. Servicios — 6 tarjetas con color por categoría
4. ¿Por qué elegirnos? — +20 clientes, 12+ años experiencia, 10+ equipo
5. Tecnologías — carrusel infinito de 2 filas (izq→der y der→izq)
6. Casos de éxito — Fintech / BarraFresh (Gastronomía) / Salud
7. Nuestro proceso — 6 pasos con duración
8. Testimonios — sección oscura con 3 clientes (Mary González / BarraFresh)
9. CTA — banner de conversión
10. Contacto — formulario real con integración Resend
11. Footer — logo blanco, redes sociales a nueva pestaña, datos de contacto

## Flujo del formulario de contacto

1. Usuario llena el formulario en la sección Contacto
2. El frontend hace `POST /api/contact` con los datos
3. `app/api/contact/route.ts` valida los campos requeridos (nombre, email, mensaje)
4. Resend envía email HTML a `CONTACT_EMAIL` con branding Orbexa Systems
5. El email incluye botón "Responder" con `replyTo` apuntando al correo del cliente
6. El formulario muestra mensaje de éxito o error

## Notas técnicas

- Navbar siempre con fondo blanco — sin modo transparente sobre el Hero
- Logo en Navbar: SVG inline del logo-completo con viewBox ajustado (sin fondo, sin recortes)
- Logo en Footer: mismo SVG con colores en blanco para fondo oscuro
- Favicon: `app/icon.svg` — ícono orbital circular sobre fondo `#042C53`
- Resend se instancia **dentro** del handler POST (no a nivel módulo) para evitar errores de build
- Carrusel de tecnologías usa `@keyframes` con `translateX(-50%)` sobre arrays duplicados
- Redes sociales en Footer usan `target="_blank"` y `rel="noopener noreferrer"`
- Build limpio: 0 errores TypeScript, 0 errores ESLint

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:3000
npm run build    # build de producción
npm run start    # servidor de producción
```
