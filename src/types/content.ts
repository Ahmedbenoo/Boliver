export interface CtaLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FloatingCard {
  title: string;
  metric: string;
  icon: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: StatItem[];
  trustBadges: string[];
  floatingCards: FloatingCard[];
}

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
  sortOrder: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  featured: boolean;
  sortOrder: number;
}

export interface ProcessStep {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  sortOrder: number;
}

export type PortfolioCategory =
  | "web-development"
  | "mobile-apps"
  | "ai-solutions"
  | "e-commerce"
  | "healthcare"
  | "real-estate"
  | "erp-crm"
  | "branding";

export interface ProjectResult {
  metric: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  excerpt: string;
  coverImage: string;
  gallery: string[];
  technologies: string[];
  results: ProjectResult[];
  publishedAt: string;
  featured: boolean;
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  sortOrder: number;
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "cloud" | "ai" | "payment";
  sortOrder: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
  videoUrl?: string;
  rating: number;
  featured: boolean;
}

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceAmount: number | null;
  period: "project" | "quote";
  features: PricingFeature[];
  highlighted: boolean;
  cta: CtaLink;
  sortOrder: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  linkedinUrl?: string;
  sortOrder: number;
}

export interface CareerPosition {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  description: string;
  requirements: string[];
  publishedAt: string;
}

export interface BrandLogoConfig {
  src: string;
  width: number;
  height: number;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  logo: BrandLogoConfig;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapEmbedUrl?: string;
}

export interface CmsEntity {
  id: string;
  isPublished: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}
