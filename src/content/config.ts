import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()),
        description: z.string().optional(),
        updatedDate: z.coerce.date().optional(),
        cover: image(),
    }),
});

export const collections = { blog };
