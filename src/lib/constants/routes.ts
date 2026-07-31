export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  portfolio: "/portfolio",
  project: (slug: string) => `/portfolio/${slug}`,
  blog: "/blog",
  post: (slug: string) => `/blog/${slug}`,
  careers: "/careers",
  career: (slug: string) => `/careers/${slug}`,
  contact: "/contact",
  bookConsultation: "/book-consultation",
  privacy: "/privacy-policy",
  terms: "/terms",
} as const;

export type RouteKey = keyof typeof routes;
