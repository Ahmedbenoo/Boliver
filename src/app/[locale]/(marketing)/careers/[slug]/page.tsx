import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { careersData } from "@/lib/data/careers";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";
import { formatDate } from "@/lib/utils";
import { Breadcrumbs, PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/constants/site";

interface CareerDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const position = careersData.find((p) => p.slug === slug);

  if (!position) {
    return createPageMetadata({ title: "Position Not Found", noIndex: true });
  }

  return createPageMetadata({
    title: position.title,
    description: position.description,
    path: `/careers/${slug}`,
  });
}

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const { slug } = await params;
  const position = careersData.find((p) => p.slug === slug);

  if (!position) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Careers", url: `${siteConfig.url}/careers` },
    { name: position.title, url: `${siteConfig.url}/careers/${slug}` },
  ]);

  return (
    <div id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHeader title={position.title} description={position.description}>
        <Breadcrumbs
          items={[
            { label: "Home", href: routes.home },
            { label: "Careers", href: routes.careers },
            { label: position.title },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>{position.department}</Badge>
          <Badge variant="accent">{position.location}</Badge>
          <Badge className="capitalize">{position.type.replace("-", " ")}</Badge>
        </div>
      </PageHeader>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
                About the Role
              </h2>
              <p className="mt-4 text-muted leading-relaxed">{position.description}</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
                Requirements
              </h2>
              <ul className="mt-4 space-y-3">
                {position.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
              Apply Now
            </h3>
            <p className="mt-2 text-sm text-muted">
              Send your resume and portfolio to our team.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Posted {formatDate(position.publishedAt)}
            </p>
            <Button className="mt-6 w-full" asChild>
              <Link href={`mailto:hello@boliveer.com?subject=Application: ${position.title}`}>
                Apply via Email
              </Link>
            </Button>
          </aside>
        </div>
      </Container>
    </div>
  );
}
