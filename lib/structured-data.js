import { SITE_URL, pageTitle } from './seo.js';
import { PHONE_HREF } from './contact.js';

const personId = SITE_URL + '/#german-montenegro';
const websiteId = SITE_URL + '/#website';
const labels = {
  '/lesiones': 'Lesiones deportivas',
  '/deportes': 'Fisioterapia por deporte',
  '/fisioterapia-deportiva-bogota': 'Fisioterapia deportiva en Bogotá',
};

export function structuredData({ page, path, description }) {
  const url = path === '/' ? SITE_URL : SITE_URL + path;
  const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'Germán Montenegro',
    url: SITE_URL + '/sobre-german-montenegro',
    telephone: PHONE_HREF.slice(4),
    jobTitle: 'Fisioterapeuta deportivo',
  };
  const website = {
    '@type': 'WebSite', '@id': websiteId, url: SITE_URL,
    name: 'Germán Montenegro Fisioterapia Deportiva',
    inLanguage: 'es-CO', publisher: { '@id': personId },
  };
  const webpage = {
    '@type': page === 'sobre' ? 'ProfilePage' : 'WebPage',
    '@id': url + '#webpage', url, name: pageTitle(page), description,
    inLanguage: 'es-CO', isPartOf: { '@id': websiteId },
    ...(page === 'sobre' ? { mainEntity: { '@id': personId } } : {}),
  };
  const graph = [person, website, webpage];
  if (path !== '/') {
    const parent = path.startsWith('/lesiones/') ? '/lesiones'
      : path.startsWith('/deportes/') ? '/deportes'
      : path.startsWith('/servicios/') ? '/fisioterapia-deportiva-bogota' : null;
    const trail = [{ name: 'Inicio', item: SITE_URL }];
    if (parent) trail.push({ name: labels[parent], item: SITE_URL + parent });
    trail.push({ name: pageTitle(page).replace(' | Germán Montenegro', ''), item: url });
    const breadcrumb = {
      '@type': 'BreadcrumbList', '@id': url + '#breadcrumb',
      itemListElement: trail.map((item, index) => ({ '@type': 'ListItem', position: index + 1, ...item })),
    };
    webpage.breadcrumb = { '@id': breadcrumb['@id'] };
    graph.push(breadcrumb);
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

// These destinations are already public and verified for this site.
export const FOOTER_CONTACTS = [
  { label: 'WhatsApp', href: 'https://wa.me/' + PHONE_HREF.slice(5) },
  { label: 'Llamar', href: PHONE_HREF },
  { label: 'El método', href: '/metodologia' },
];

