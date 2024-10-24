import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    extract: z.string(),
    readtime: z.number(),
  }),
});

export const collections = {
  blog: blogCollection,
};
