"use client";

import dynamic from "next/dynamic";

// Load the prototype client-side only. The prototype was authored for the
// browser (uses window, Three.js, in-browser routing), so we skip SSR of the
// component tree while keeping per-route URLs + metadata for SEO.
const ClientApp = dynamic(() => import("./ClientApp.jsx"), { ssr: false });

export default function SiteApp({ page = "home" }) {
  return <ClientApp page={page} />;
}
