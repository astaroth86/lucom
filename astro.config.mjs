// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En GitHub Pages el sitio se sirve en un subdirectorio (/lucom). El flujo de
// despliegue define SITE y BASE_PATH; en local y en lucom.es se queda en la raíz.
const site = process.env.SITE ?? 'https://lucom.es';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
