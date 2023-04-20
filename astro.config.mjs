import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from "astro-compress";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({

  // Ports
  server: command => ({
    port: command === 'dev' ? 6000 : 4000
  }),

  // Plugins
  integrations: [tailwind(), compress()],

  // Vercel
  output: "server",
  adapter: vercel()
});