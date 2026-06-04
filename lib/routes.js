// Single source of truth: maps internal prototype page keys <-> SEO-friendly URLs.
// Spanish slugs chosen for local (Bogotá) SEO.

export const PAGE_TO_PATH = {
  home: "/",
  fisioterapia: "/fisioterapia-deportiva-bogota",
  lesiones: "/lesiones",
  deportes: "/deportes",
  metodologia: "/metodologia",
  sobre: "/sobre-german-montenegro",

  // Injury pillar pages
  pubalgia: "/lesiones/pubalgia",
  ciatica: "/lesiones/ciatica",
  tendinitis: "/lesiones/tendinitis",
  hombro: "/lesiones/hombro",
  bursitis: "/lesiones/bursitis",
  condromalacia: "/lesiones/condromalacia",
  contractura: "/lesiones/contractura",
  periostitis: "/lesiones/periostitis",
  epitrocleitis: "/lesiones/epitrocleitis",

  // Sport hubs
  crossfit: "/deportes/crossfit",
  weightlifting: "/deportes/weightlifting",
  bjj: "/deportes/bjj",
  boxeo: "/deportes/boxeo",

  // Service pages
  quiropraxia: "/servicios/quiropraxia",
  puncion: "/servicios/puncion-seca",
  masajes: "/servicios/masajes-deportivos",
  readaptacion: "/servicios/readaptacion-deportiva",
};

export const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page])
);

export function pageToPath(page) {
  return PAGE_TO_PATH[page] || "/";
}

export function pathToPage(path) {
  // normalize trailing slash
  const clean = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
  return PATH_TO_PAGE[clean] || "home";
}
