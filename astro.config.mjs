import { defineConfig } from 'astro/config';
import compress from "astro-compress";
// import vercel from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel/static';
import sanity from 'astro-sanity';


// https://astro.build/config
export default defineConfig({
  // Ports
  server: command => ({
    port: command === 'dev' ? 6000 : 4000
  }),
  // Plugins
  integrations: [compress(), sanity({
    projectId: 'f9p76ov2',
    dataset: 'production',
    apiVersion: '2023-03-25',
    useCdn: true
  })],
  // Vercel
  // output: "static",
  // adapter: vercel()
});