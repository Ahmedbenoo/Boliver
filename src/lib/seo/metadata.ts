import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";
import { locales, type Locale } from "@/i18n/routing";

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  locale?: Locale;
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "/images/og/default.jpg",
  noIndex = false,
  locale = "ar",
}: PageMetadataOptions): Metadata {
  const localizedPath = `/${locale}${path === "/" ? "" : path}`;
  const url = `${siteConfig.url}${localizedPath}`;
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${siteConfig.url}/${loc}${path === "/" ? "" : path}`])
  );

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const defaultMetadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
  }),
  icons: {
    icon: siteConfig.logo.src,
    apple: siteConfig.logo.src,
  },
};
