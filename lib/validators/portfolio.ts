import { z } from "zod";

export const profileInfoItemSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  valueColor: z.string().optional(),
});

export const languageSchema = z.object({
  name: z.string().min(1),
  level: z.string().min(1),
  bar: z.string().min(1),
});

export const skillSchema = z.object({
  name: z.string().min(1),
  level: z.string().min(1),
  bar: z.string().min(1),
});

export const serviceSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  iconKey: z.string().min(1),
});

export const heroSchema = z.object({
  name: z.string().min(1),
  rolePrimary: z.string().min(1),
  roleSecondary: z.string().min(1),
  description: z.string().min(1),
  ctaLabel: z.string().min(1),
  backgroundImageUrl: z.string().url(),
  heroImageUrl: z.string().url(),
});

export const sidebarSchema = z.object({
  profileImageUrl: z.string().url(),
  displayName: z.string().min(1),
  title: z.string().min(1),
  statusColor: z.string().min(1),
  profileInfo: z.array(profileInfoItemSchema),
  languages: z.array(languageSchema),
  skills: z.array(skillSchema),
  extraSkills: z.array(z.string().min(1)),
  resumeUrl: z.string().url(),
});

export const portfolioContentSchema = z.object({
  hero: heroSchema,
  sidebar: sidebarSchema,
  services: z.array(serviceSchema),
});

export type PortfolioContentInput = z.infer<typeof portfolioContentSchema>;
