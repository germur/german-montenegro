"use client";

import React from "react";
import { App } from "./prototype/bundle.jsx";
import { pageToPath } from "@/lib/routes";

// Catches any runtime error in the prototype tree so a single failing component
// (e.g. WebGL unavailable on some mobile browsers) never blanks the whole site.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    if (typeof console !== "undefined") console.error("App error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem", fontFamily: "Inter, sans-serif" }}>
          <div style={{ maxWidth: 420 }}>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", marginBottom: "0.75rem" }}>Algo no cargó correctamente</h2>
            <p style={{ color: "rgba(10,10,10,0.65)", lineHeight: 1.6, marginBottom: "1.25rem" }}>Recarga la página. Si el problema continúa, escríbenos por WhatsApp y te atendemos directamente.</p>
            <button onClick={() => { if (typeof window !== "undefined") window.location.reload(); }} style={{ background: "#C9A55A", color: "#0A0A0A", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 600, cursor: "pointer" }}>Recargar</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ClientApp({ page = "home" }) {
  const handleRouteChange = (nextPage) => {
    const path = pageToPath(nextPage);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
    }
  };

  return (
    <ErrorBoundary>
      <App initialPage={page} onRouteChange={handleRouteChange} />
    </ErrorBoundary>
  );
}
