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

- `app/` — rutas (una carpeta = una URL) con su `metadata` SEO por página, más `layout.js`, `sitemap.js`, `robots.js` y `globals.css`.
- `components/SiteApp.jsx` — carga la app cliente (sin SSR del árbol pesado).
- `components/ClientApp.jsx` — conecta el prototipo con el router de Next (sincroniza la URL al navegar).
- `components/prototype/bundle.jsx` — el prototipo completo (todos los componentes) en un módulo. **Generado** a partir de los archivos originales del diseño.
- `lib/routes.js` — mapa único entre las claves internas de página y las URLs (slugs en español para SEO local).

## Rutas

Home `/`, `/fisioterapia-deportiva-bogota`, `/lesiones` (+ pubalgia, ciatica, tendinitis, hombro, bursitis, condromalacia, contractura, periostitis, epitrocleitis), `/deportes` (+ crossfit, weightlifting, bjj, boxeo), `/servicios/*` (quiropraxia, puncion-seca, masajes-deportivos, readaptacion-deportiva), `/metodologia`, `/sobre-german-montenegro`.

## Cómo regenerar el bundle

El diseño se entregó como múltiples archivos `.jsx` con scope global. `bundle.jsx` los concatena en orden de dependencias, inyecta los hooks de React y `THREE`, y protege los accesos a `window` para que el build de servidor no falle. Si editas los `.jsx` originales, vuelve a generar el bundle con el mismo orden.

## SEO incluido

- Meta `title`/`description` por ruta + Open Graph y Twitter Cards en el layout.
- `sitemap.xml` y `robots.txt` automáticos.
- `lang="es"`, URLs en español. Ajusta `SITE_URL` en `app/layout.js`, `app/sitemap.js` y `app/robots.js` cuando tengas el dominio final.

## Pendiente / mejora

- El árbol se renderiza en cliente (`ssr:false`) porque el prototipo usa `window`/Three.js. El HTML inicial ya trae los meta tags correctos (suficiente para indexación). Si quieres contenido textual también en el HTML servido, conviene migrar los componentes de cada pillar a Server Components con contenido estático.
