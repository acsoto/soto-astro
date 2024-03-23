import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), mdx()],
  image: {
    domains: ["img.atksoto.com"],
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});