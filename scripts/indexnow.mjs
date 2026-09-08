// Avisa a IndexNow de las URLs del sitio despues de cada build de produccion.
// IndexNow lo consumen Bing, Yandex, Seznam y Naver. Google NO participa:
// para Google el camino sigue siendo el sitemap y la inspeccion de URL.
//
// Se ejecuta solo en deploys de produccion de Netlify y nunca tumba el build:
// cualquier fallo se reporta y sale con codigo 0.

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "germanmontenegro.fit";
const CLAVE = "c8ef2bc0d1248ba8bb499175c8225f83";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

// Unica fuente de verdad de las rutas: lib/routes.js. Se lee como texto porque
// ese archivo es ESM y el proyecto no declara "type": "module".
async function rutas() {
  const src = await readFile(join(RAIZ, "lib", "routes.js"), "utf8");
  const bloque = src.slice(
    src.indexOf("PAGE_TO_PATH = {"),
    src.indexOf("};", src.indexOf("PAGE_TO_PATH = {"))
  );
  return [...bloque.matchAll(/:\s*"(\/[^"]*)"/g)].map((m) => m[1]);
}

async function main() {
  const seco = process.argv.includes("--dry-run");
  const contexto = process.env.CONTEXT;

  const paths = await rutas();
  if (!paths.length) {
    console.log("[indexnow] no se encontraron rutas en lib/routes.js, no se envia nada");
    return;
  }
  const urlList = paths.map((p) => `https://${HOST}${p === "/" ? "" : p}`);

  // Solo dispara en deploys de produccion de Netlify. En local CONTEXT no
  // existe, asi que un npm run build en tu maquina no envia nada.
  if (!seco && contexto !== "production") {
    console.log(`[indexnow] contexto "${contexto ?? "local"}", se omite (solo produccion)`);
    return;
  }

  const cuerpo = { host: HOST, key: CLAVE, keyLocation: `https://${HOST}/${CLAVE}.txt`, urlList };

  if (seco) {
    console.log("[indexnow] dry-run, no se envia nada");
    console.log(JSON.stringify(cuerpo, null, 2));
    return;
  }

  const r = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(cuerpo),
  });
  // 200 = aceptado, 202 = aceptado pero la clave aun no esta validada
  console.log(`[indexnow] ${urlList.length} URLs enviadas, respuesta ${r.status}`);
  if (r.status >= 400) console.log("[indexnow] cuerpo:", (await r.text()).slice(0, 300));
}

main().catch((e) => {
  console.log("[indexnow] fallo, se ignora para no tumbar el deploy:", e.message);
});
