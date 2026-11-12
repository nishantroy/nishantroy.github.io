import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.url() });

// Month precision is enough everywhere: "2024-08".
const yearMonth = z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM');

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    company: z.string(),
    url: z.url().optional(),
    location: z.string().optional(),
    order: z.number(),
    roles: z.array(
      z.object({
        title: z.string(),
        team: z.string().optional(),
        start: yearMonth,
        end: yearMonth.optional(), // omitted = present
        headline: z.string().optional(), // one line shown on the site
        summary: z.string().optional(),
        highlights: z.array(z.string()).default([]),
        launches: z.array(link).default([]),
      }),
    ),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      hook: z.string(), // one sentence, what makes it interesting
      order: z.number(),
      platform: z.string(),
      stack: z.array(z.string()),
      status: z.string(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      screenshot: image(),
      icon: image().optional(), // app icon shown beside the name
      frame: z.enum(['phone', 'browser', 'tv']).default('phone'),
      tint: z.string().optional(), // tile background, e.g. '#efe6d6'
      screenshotAlt: z.string(),
      featured: z.boolean().default(true),
      compact: z.boolean().default(false), // small row below the main app cards
    }),
});

const writing = defineCollection({
  loader: file('src/content/writing.yaml'),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['talk', 'podcast', 'article']),
    theme: z.enum(['ads-serving', 'shipping']),
    venue: z.string(),
    also: z.array(link).default([]), // extra links (slides, video)
    // Each time a talk was given. More than one renders as "Given N times".
    deliveries: z
      .array(z.object({ venue: z.string(), year: z.string(), url: z.url(), note: z.string().optional() }))
      .default([]),
    date: yearMonth.optional(), // TODO entries may lack a date
    url: z.url(),
    slides: z.url().optional(),
    video: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

const launches = defineCollection({
  loader: file('src/content/launches.yaml'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      role: z.string(), // e.g. "Pinterest · 2024–26"
      year: z.string().optional(),
      url: z.url().optional(),
      image: image().optional(), // product screenshot; typographic tile when absent
      imageAlt: z.string().optional(),
      imageSource: z.url().optional(), // where the public image came from
      imageClass: z.string().optional(),
      highlight: z.string().optional(), // big number shown on list rows
      proof: z.array(z.object({ text: z.string(), url: z.url() })).default([]), // public, citable evidence
      imagePosition: z.string().default('center'), // CSS object-position
      order: z.number(),
      featured: z.boolean().default(true),
    }),
});

const education = defineCollection({
  loader: file('src/content/education.yaml'),
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    end: yearMonth,
    location: z.string().optional(),
  }),
});

export const collections = { experience, projects, launches, writing, education };
