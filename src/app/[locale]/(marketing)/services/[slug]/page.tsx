import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/queries/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";
import { Breadcrumbs, PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/constants/site";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({ title: "Service Not Found", noIndex: true });
  }

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: service.title, url: `${siteConfig.url}/services/${slug}` },
  ]);

  return (
    <div id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHeader title={service.title} description={service.description}>
        <Breadcrumbs
          items={[
            { label: "Home", href: routes.home },
            { label: "Services", href: routes.services },
            { label: service.title },
          ]}
        />
        <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
          <DynamicIcon name={service.icon} className="h-7 w-7 text-accent" />
        </div>
      </PageHeader>
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
              What&apos;s Included
            </h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
              Get Started
            </h3>
            <p className="mt-2 text-sm text-muted">
              Book a free consultation to discuss your {service.title.toLowerCase()} project.
            </p>
            <Button className="mt-6 w-full" asChild>
              <Link href={routes.bookConsultation}>Book Consultation</Link>
            </Button>
            <Button variant="secondary" className="mt-3 w-full" asChild>
              <Link href={routes.contact}>Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
