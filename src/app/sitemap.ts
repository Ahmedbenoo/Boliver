import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants/site";
import { blogData } from "@/lib/data/blog";
import { careersData } from "@/lib/data/careers";
import { portfolioData } from "@/lib/data/portfolio";
import { servicesData } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const paths = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/careers",
    "/contact",
    "/book-consultation",
    "/privacy-policy",
    "/terms",
  ];

  const staticRoutes = locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );

  const serviceRoutes = locales.flatMap((locale) =>
    servicesData.map((service) => ({
      url: `${baseUrl}/${locale}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const portfolioRoutes = locales.flatMap((locale) =>
    portfolioData.map((project) => ({
      url: `${baseUrl}/${locale}/portfolio/${project.slug}`,
      lastModified: new Date(project.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const blogRoutes = locales.flatMap((locale) =>
    blogData.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  const careerRoutes = locales.flatMap((locale) =>
    careersData.map((job) => ({
      url: `${baseUrl}/${locale}/careers/${job.slug}`,
      lastModified: new Date(job.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }))
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
    ...careerRoutes,
  ];
}
