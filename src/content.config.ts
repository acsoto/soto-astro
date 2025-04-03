import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()),
        description: z.string().optional(),
        updatedDate: z.coerce.date().optional(),
        cover: image(),
    }),
});

const trip = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/trip' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string().optional(),
        cover: image(),
    }),
});

export const collections = { blog, trip };
