import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        image: z.string(),
        tags: z.array(z.string()),
        description: z.string().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog };
