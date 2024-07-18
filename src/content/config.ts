import { defineCollection, z } from "astro:content";

const news = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.string().transform((val) => new Date(val)),
    }),
});

export const collections = { news };