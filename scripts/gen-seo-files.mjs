// Genera public/sitemap.xml y public/robots.txt en tiempo de build.
//
// Por que archivos y no app/sitemap.js: con @netlify/plugin-nextjs toda ruta,
// incluidas /sitemap.xml y /robots.txt, pasa por la funcion serverless. En un
// edge sin cache eso despierta una Lambda fria y arranca Next entero para
// devolver 4 KB de XML. Googlebot rastrea desde muchos PoP y cada uno es un
// miss. Un archivo en public/ lo sirve el CDN directo, sin funcion.
//
// La lista de rutas sale de lib/routes.js, la misma fuente que usa el sitio,
// asi que no hay dos listas que mantener.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://germanmontenegro.fit";

function escapar(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const src = await readFile(join(RAIZ, "lib", "routes.js"), "utf8");
const inicio = src.indexOf("PAGE_TO_PATH = {");
const bloque = src.slice(inicio, src.indexOf("};", inicio));
const paths = [...bloque.matchAll(/:\s*"(\/[^"]*)"/g)].map((m) => m[1]);

if (!paths.length) {
  throw new Error("gen-seo-files: no se encontro ninguna ruta en lib/routes.js");
}

const lastmod = new Date().toISOString();

const urls = paths
  .map((p) => {
    const loc = `${SITE_URL}${p === "/" ? "" : p}`;
    const home = p === "/";
    return [
      "  <url>",
      `    <loc>${escapar(loc)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${home ? "weekly" : "monthly"}</changefreq>`,
      `    <priority>${home ? "1.0" : "0.7"}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await writeFile(join(RAIZ, "public", "sitemap.xml"), sitemap, "utf8");
await writeFile(join(RAIZ, "public", "robots.txt"), robots, "utf8");
console.log(`[seo-files] public/sitemap.xml con ${paths.length} URLs y public/robots.txt generados`);
