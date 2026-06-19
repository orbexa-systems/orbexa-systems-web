# Orbexa Systems — Landing Page

Landing page profesional para empresa de tecnología/consultoría IT. Construida con Next.js 15, React, TypeScript y Tailwind CSS. Orientada a generación de leads B2B.

## Stack

- Next.js 16 (App Router) + Turbopack
- React + TypeScript
- Tailwind CSS v4
- lucide-react (iconos)
- Fuente: Inter (Google Fonts)

## Estructura

```
app/
  layout.tsx        — metadata SEO, Schema.org JSON-LD, fuente Inter
  page.tsx          — ensambla todos los componentes en orden
  globals.css       — animaciones globales (float, fade-in-up, card-hover, tech-item)

components/
  Navbar.tsx        — fija al scroll, se torna blanca con blur, mobile menu
  Hero.tsx          — fondo con grid + glow blobs, code mockup animado, 3 métricas
  Services.tsx      — 6 tarjetas (Soft, Web, APIs, Cloud, IA, Soporte)
  WhyUs.tsx         — 2 columnas: texto+stats / 6 razones con íconos
  Technologies.tsx  — 5 categorías (Frontend, Backend, DB, Cloud, CI/CD) con emojis
  CaseStudies.tsx   — 3 casos (Fintech, Retail, Salud) con métricas de resultado
  Process.tsx       — timeline de 6 pasos con íconos y duración estimada
  Testimonials.tsx  — 3 testimonios en sección oscura con estrellas
  CTA.tsx           — banner azul degradado con llamada a acción principal
  Contact.tsx       — formulario controlado + info de contacto + estado de éxito
  Footer.tsx        — 4 columnas + redes sociales (SVG inline) + copyright
```

## Paleta y estilo

| Token | Valor |
|---|---|
| Dark | `#0F172A` |
| Primary | `#2563EB` |
| Light blue | `#3B82F6` |
| Background | `#F8FAFC` |
| White | `#FFFFFF` |

Diseño mobile-first, bordes suaves (`rounded-xl`, `rounded-2xl`), sombras sutiles, hover con `translateY(-6px)`.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:3000
npm run build    # build de producción
npm run start    # servidor de producción
```

## Personalización rápida

- **Nombre empresa**: buscar y reemplazar `Orbexa` / `Orbexa Systems` en todos los archivos
- **Colores**: cambiar en `globals.css` y clases Tailwind (`blue-600`, `slate-900`)
- **Contenido**: cada componente tiene sus datos como arrays/objetos al inicio del archivo
- **Formulario de contacto**: `Contact.tsx` línea `await new Promise(...)` — reemplazar con llamada real a backend/API
- **URLs reales**: `layout.tsx` → `metadataBase`, redes sociales en `Footer.tsx`
- **SEO**: `layout.tsx` → objeto `metadata` y `jsonLd`

## Secciones (en orden de aparición)

1. Navbar
2. Hero — métricas: +50 proyectos, +20 clientes, 99.9% uptime
3. Servicios — 6 tarjetas con color por categoría
4. ¿Por qué elegirnos? — 6 ventajas + stats globales
5. Tecnologías — grid por categoría
6. Casos de éxito — Fintech / Retail / Salud
7. Nuestro proceso — 6 pasos con duración
8. Testimonios — sección oscura con 3 clientes
9. CTA — banner de conversión
10. Contacto — formulario + datos de contacto
11. Footer

## Notas técnicas

- Todos los componentes son `"use client"` donde usan hooks o eventos
- El scroll suave entre secciones usa `element.scrollIntoView({ behavior: "smooth" })`
- La Navbar detecta scroll con `window.addEventListener("scroll", ...)` y limpia en unmount
- El formulario de contacto usa estado local; no tiene integración backend (pendiente)
- Los iconos de redes sociales en el Footer son SVG inline (lucide-react no los incluye)
- Build limpio: 0 errores TypeScript, 0 errores ESLint
