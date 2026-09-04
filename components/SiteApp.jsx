"use client";

import dynamic from "next/dynamic";

// El prototipo se prerenderiza en el servidor: Google necesita ver el contenido
// en el HTML, no despues de ejecutar JS. Todo el trabajo de Three.js vive dentro
// de useEffect, que no corre en el servidor, asi que el arbol es SSR-safe.
const ClientApp = dynamic(() => import("./ClientApp.jsx"), { ssr: true });

export default function SiteApp({ page = "home" }) {
  return <ClientApp page={page} />;
}
