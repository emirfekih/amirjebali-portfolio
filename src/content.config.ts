import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Every work on the site lives in src/data/works.json.
// The build fails with a clear message if an entry doesn't match this shape.
const works = defineCollection({
  loader: file('src/data/works.json'),
  schema: z.object({
    title: z.string(),
    category: z.enum(['film', 'post', 'music']),
    year: z.number().int(),
    yearEnd: z.number().int().optional(),
    with: z.string(),
    role: z.string(),
    description: z.string().optional(),
    credits: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    // Never put a viewing password here: the repository is public.
    video: z
      .object({
        provider: z.enum(['youtube', 'vimeo', 'drive']),
        id: z.string(),
        protected: z.boolean().optional(),
      })
      .optional(),
    external: z.object({ label: z.string(), url: z.url() }).optional(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).optional(),
    // File name of a frame in public/stills/, e.g. "aqua.jpg".
    still: z.string().optional(),
  }),
});

export const collections = { works };
