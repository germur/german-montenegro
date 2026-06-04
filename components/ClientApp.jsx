"use client";

import { App } from "./prototype/bundle.jsx";
import { pageToPath } from "@/lib/routes";

export default function ClientApp({ page = "home" }) {
  const handleRouteChange = (nextPage) => {
    const path = pageToPath(nextPage);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
    }
  };

  return <App initialPage={page} onRouteChange={handleRouteChange} />;
}
