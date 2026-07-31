import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import {
  getHeroData,
  getClientsData,
  getServicesData,
  getProcessData,
  getPortfolioData,
  getWhyData,
  getTestimonialsData,
  getPricingData,
  getFaqsData,
  getBlogData,
} from "@/lib/data/locale";
import { createPageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "@/components/sections/hero-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return createPageMetadata({
    title: t("homeTitle"),
    description: t("homeDescription"),
    path: "/",
    locale,
  });
}

function SectionFallback() {
  return <div className="py-16" aria-hidden />;
}

async function PortfolioBlock() {
  const { PortfolioSection } = await import("@/components/sections/portfolio-section");
  return <PortfolioSection data={getPortfolioData()} />;
}

async function WhyBlock({ locale }: { locale: Locale }) {
  const { WhySection } = await import("@/components/sections/why-section");
  return <WhySection data={getWhyData(locale)} />;
}

async function TestimonialsBlock() {
  const { TestimonialsSection } = await import(
    "@/components/sections/testimonials-section"
  );
  return <TestimonialsSection data={getTestimonialsData()} />;
}

async function PricingBlock() {
  const { PricingSection } = await import("@/components/sections/pricing-section");
  return <PricingSection data={getPricingData()} />;
}

async function FaqBlock({ locale }: { locale: Locale }) {
  const { FaqSection } = await import("@/components/sections/faq-section");
  return <FaqSection data={getFaqsData(locale)} />;
}

async function BlogBlock() {
  const { BlogSection } = await import("@/components/sections/blog-section");
  return <BlogSection data={getBlogData()} />;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection data={getHeroData(locale)} />
      <ClientsSection data={getClientsData()} />
      <ServicesSection data={getServicesData(locale)} />
      <ProcessSection data={getProcessData(locale)} />

      <Suspense fallback={<SectionFallback />}>
        <PortfolioBlock />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyBlock locale={locale} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsBlock />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PricingBlock />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FaqBlock locale={locale} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BlogBlock />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
      <CtaSection />
    </>
  );
}
