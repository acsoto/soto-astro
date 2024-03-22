import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), mdx()],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});