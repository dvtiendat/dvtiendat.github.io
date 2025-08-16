// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://dvtiendat.github.io',
  base: '/dvtiendat',
  vite: {
    plugins: [tailwindcss()],
  },
});
