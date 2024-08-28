import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.zzhgo.com',
    integrations: [react(), mdx(), tailwind({
        applyBaseStyles: false,
    }),],
    image: {
        domains: ["img.atksoto.com"],
    },
    output: 'static',
    adapter: vercel({
        webAnalytics: {enabled: true}
    }),
    markdown: {
        shikiConfig: {
            // https://shiki.style/themes
            theme: 'material-theme-darker',
        },
    },
});