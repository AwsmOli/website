import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      featured: z.boolean().default(false),
      status: z.enum([
        'idea',
        'concept',
        'implementation',
        'alpha',
        'beta',
        'released',
        'discontinued',
      ]),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      hero: image(),
      gallery: z.array(image()).default([]),
      tags: z.array(z.string()).default([]),
      technologies: z.array(z.string()).default([]),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      video: z.string().url().optional(),
      difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
      duration: z.string().optional(),
      estimatedCost: z.string().optional(),
      license: z.string().default('MIT'),
      downloads: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
            type: z.enum(['stl', 'step', 'firmware', 'pcb', 'source', 'pdf', 'other']),
          }),
        )
        .default([]),
      bom: z
        .array(
          z.object({
            name: z.string(),
            quantity: z.number(),
            price: z.number().optional(),
            supplier: z.string().optional(),
            link: z.string().url().optional(),
          }),
        )
        .default([]),
      relatedProjects: z.array(reference('projects')).default([]),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.discriminatedUnion('type', [
      z.object({
        type: z.literal('cv'),
        name: z.string(),
        role: z.string(),
        location: z.string(),
        email: z.string().email(),
        phone: z.string().optional(),
        skills: z.array(z.string()).default([]),
        experience: z.array(
          z.object({
            company: z.string(),
            role: z.string(),
            location: z.string().optional(),
            start: z.string(),
            end: z.string(),
            description: z.string(),
          }),
        ),
        education: z.array(
          z.object({
            school: z.string(),
            program: z.string(),
            start: z.string(),
            end: z.string(),
          }),
        ),
        certifications: z.array(z.string()).default([]),
        languages: z.array(z.object({ name: z.string(), level: z.string() })),
        interests: z.array(z.string()).default([]),
        bucketList: z.array(z.string()).default([]),
      }),
      z.object({
        type: z.literal('about'),
        title: z.string(),
        description: z.string(),
        hero: image().optional(),
      }),
    ]),
});

export const collections = { projects, pages };
