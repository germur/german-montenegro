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
- `components/site/Experience.jsx` y `lib/experience-content.json`: plantillas y contenidos de la experiencia publicada, con sus estilos en `src/styles/experience.css`.
- `scripts/gen-seo-files.mjs`: genera `sitemap.xml`, `sitemap-1.xml`, `sitemap.txt` y `robots.txt` en `public/`, que Astro copia a `dist/`.
- `src/pages/404.astro`: página de error sin indexación.

Las URLs y el dominio canónico `https://germanmontenegro.fit` se conservan. `www` redirige al dominio principal según `netlify.toml`. La migración conserva la clave de IndexNow y los recursos de `public/`.

## Despliegue

Netlify usa `npm run build && npm test && npm run indexnow`, Node 24 y la carpeta `dist`. `NETLIFY_NEXT_PLUGIN_SKIP=true` desactiva la ejecución del runtime de Next heredado de la configuración del proyecto en Netlify. Astro no necesita un adaptador de servidor. Las pruebas de navegación y diseño en escritorio y móvil complementan las comprobaciones del build.

`npm run indexnow` notifica las 23 URLs al endpoint compartido de IndexNow solo con `CONTEXT=production`, después de superar las pruebas. En local y en previews omite el envío; `npm run indexnow -- --dry-run` muestra el lote sin enviarlo. La clave de verificación se publica desde `public/`. La recepción HTTP 200 o 202 no garantiza indexación. Los despliegues manuales que omitan el build no ejecutan esta notificación.

La migración cambia la infraestructura de entrega. La lectura del sitemap en Search Console debe comprobarse después de publicar; un build correcto no demuestra que Google haya aceptado el sitemap.
