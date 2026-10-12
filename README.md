# Germán Montenegro — Fisioterapia Deportiva Bogotá

Sitio construido con **Astro estático** y React para los menús, las animaciones y los gráficos interactivos del diseño original. Las 23 páginas se generan como HTML completo durante el build. Netlify sirve `dist/` desde su CDN, sin Next.js ni funciones para renderizar páginas.

## Desarrollo y verificación

Usar Node 24 (ver `.nvmrc`).

```sh
npm ci
npm run dev
npm run build
npm test
npm start
```

`npm start` permite revisar el build en el puerto 4321, salvo que esté ocupado. Las comprobaciones verifican los metadatos, el contenido HTML, los enlaces internos y los archivos SEO de las 23 páginas. También se ejecutan antes de publicar en Netlify.

## Estructura

- `src/pages/[...path].astro`: genera las 23 rutas de `lib/routes.js`.
- `src/layouts/SiteLayout.astro`: documento HTML, canonical, metadatos sociales, verificación de Search Console, Analytics y fuentes.
- `src/styles/globals.css`: estilos globales y tema oscuro.
- `lib/seo.js`: títulos y descripciones de las páginas, conservados en la migración.
- `components/ClientApp.jsx`: componente React prerenderizado por Astro y posteriormente hidratado para las funciones interactivas.
- `components/prototype/bundle.jsx`: componentes del diseño original. Los enlaces cargan documentos estáticos con sus propios metadatos.
- `scripts/gen-seo-files.mjs`: genera `sitemap.xml`, `sitemap-1.xml`, `sitemap.txt` y `robots.txt` en `public/`, que Astro copia a `dist/`.
- `src/pages/404.astro`: página de error sin indexación.

Las URLs y el dominio canónico `https://germanmontenegro.fit` se conservan. `www` redirige al dominio principal según `netlify.toml`. La migración conserva la clave de IndexNow y los recursos de `public/`.

## Despliegue

Netlify usa `npm run build && npm test`, Node 24 y la carpeta `dist`. No requiere el plugin de Next ni un adaptador de servidor de Astro. Las pruebas de navegación y diseño en escritorio y móvil complementan las comprobaciones del build.

La migración cambia la infraestructura de entrega. La lectura del sitemap en Search Console debe comprobarse después de publicar; un build correcto no demuestra que Google haya aceptado el sitemap.
