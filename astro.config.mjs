import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://germanmontenegro.fit',
  output: 'static',
  trailingSlash: 'never',
  // Netlify redirects directory/index.html URLs to a trailing slash.
  // Flat .html output keeps the existing extensionless, slashless URLs.
  build: { format: 'file' },
  // Complete build-time rendering avoids UTF-8 corruption observed with
  // streamed React 18 output on these long pages. Nothing is streamed at runtime.
  integrations: [react({ experimentalDisableStreaming: true })],
  vite: {
    resolve: { alias: { '@': fileURLToPath(new URL('.', import.meta.url)) } },
  },
});
