import type { SiteSettings } from "@/types";
import { LOGO_PATH, LOGO_HEIGHT, LOGO_WIDTH } from "./logo";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://boliveer.com";

export const siteConfig: SiteSettings & {
  url: string;
  locale: string;
} = {
  name: "Boliveer",
  tagline: "Premium Software & Digital Transformation",
  description:
    "Boliveer builds world-class web apps, mobile solutions, AI systems, and digital experiences for startups, SMEs, and enterprise companies.",
  logo: {
    src: LOGO_PATH,
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
  },
  email: "hello@boliveer.com",
  phone: "+1 (555) 000-0000",
  whatsapp: "+15550000000",
  address: "Global — Remote First",
  url: SITE_URL,
  locale: "en_US",
  socialLinks: {
    linkedin: "https://linkedin.com/company/boliveer",
    twitter: "https://twitter.com/boliveer",
    instagram: "https://instagram.com/boliveer",
    github: "https://github.com/boliveer",
  },
};
