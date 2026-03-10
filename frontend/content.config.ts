import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        author: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
      }),
    }),
    content: defineCollection({
      type: "page",
      source: {
        include: "**/*.md",
        exclude: ["blog/*.md", "template.blog.md"],
      },
    }),
  },
});
