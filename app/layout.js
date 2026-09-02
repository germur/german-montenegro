import "./globals.css";

const SITE_URL = "https://germanmontenegro.fit";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Germán Montenegro | Fisioterapia Deportiva en Bogotá",
    template: "%s | Germán Montenegro Fisioterapia Deportiva",
  },
  description:
    "Fisioterapia deportiva en Bogotá especializada en atletas de CrossFit, halterofilia, BJJ y boxeo. Diagnóstico preciso, tratamiento basado en evidencia y readaptación para volver a competir.",
  keywords: [
    "fisioterapia deportiva Bogotá",
    "fisioterapeuta deportivo Bogotá",
    "lesiones deportivas",
    "pubalgia",
    "ciática",
    "tendinitis",
    "readaptación deportiva",
  ],
  authors: [{ name: "Germán Montenegro" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Germán Montenegro Fisioterapia Deportiva",
    title: "Germán Montenegro | Fisioterapia Deportiva en Bogotá",
    description:
      "Fisioterapia deportiva en Bogotá para atletas. Diagnóstico preciso y readaptación basada en evidencia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Germán Montenegro | Fisioterapia Deportiva en Bogotá",
    description:
      "Fisioterapia deportiva en Bogotá para atletas. Diagnóstico preciso y readaptación basada en evidencia.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "xyptqAjEss_aO6dTu81bKRRgfubvYQDeBGPj0cSrLM4",
  },
};

const themeBootstrap = `(function(){try{var t=localStorage.getItem('gm-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
