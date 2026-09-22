# Germán Montenegro — Fisioterapia Deportiva Bogotá

Sitio web implementado en **Next.js 14 (App Router)** a partir del prototipo de Claude Design. Elegido por ser el mejor stack para **SEO** (renderizado en servidor, meta tags reales por página, sitemap/robots) y buena **UX**.

## Cómo ejecutarlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
```

## Estructura

- `app/` — rutas (una carpeta = una URL) con su `metadata` SEO por página, más `layout.js` y `globals.css`.
- `components/SiteApp.jsx` — carga la app cliente con prerenderizado en servidor (`ssr: true`).
- `components/ClientApp.jsx` — navega con el App Router de Next.js para actualizar contenido, título y canonical juntos. La página activa procede de la ruta, también al usar Atrás/Adelante.
- `scripts/gen-seo-files.mjs` — genera los sitemaps y robots.txt como archivos estáticos en `public/` antes del build.
- `components/prototype/bundle.jsx` — el prototipo completo (todos los componentes) en un módulo. **Generado** a partir de los archivos originales del diseño.
- `lib/routes.js` — mapa único entre las claves internas de página y las URLs (slugs en español para SEO local).

## Rutas

Home `/`, `/fisioterapia-deportiva-bogota`, `/lesiones` (+ pubalgia, ciatica, tendinitis, hombro, bursitis, condromalacia, contractura, periostitis, epitrocleitis), `/deportes` (+ crossfit, weightlifting, bjj, boxeo), `/servicios/*` (quiropraxia, puncion-seca, masajes-deportivos, readaptacion-deportiva), `/metodologia`, `/sobre-german-montenegro`.

## Cómo regenerar el bundle

El diseño se entregó como múltiples archivos `.jsx` con scope global. `bundle.jsx` los concatena en orden de dependencias, inyecta los hooks de React y `THREE`, y protege los accesos a `window` para que el build de servidor no falle. Si editas los `.jsx` originales, vuelve a generar el bundle con el mismo orden.

## SEO incluido

- Meta `title`/`description` por ruta + Open Graph y Twitter Cards en el layout.
- `sitemap.xml` y `robots.txt` automáticos.
- `lang="es"`, URLs en español. El dominio se configura en `app/layout.js` y `scripts/gen-seo-files.mjs`.

## Pendiente / mejora

- El contenido textual se prerenderiza y React lo hidrata en el navegador. Three.js se inicializa en efectos del cliente. Comprueba con `npm run build` qué rutas se generan estáticamente; los metadatos y el contenido deben coincidir tanto al abrir una URL directamente como al navegar desde otra página.
- Completar teléfonos, imágenes de ejemplo y enlaces sociales/legales antes de dar por terminada la publicación. Un sitemap válido permite descubrir URLs, pero no garantiza su indexación.
