import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data/queries/portfolio";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";
import { formatDate } from "@/lib/utils";
import { Breadcrumbs, PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/constants/site";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({ title: "Project Not Found", noIndex: true });
  }

  return createPageMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/portfolio/${slug}`,
    image: project.coverImage,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
    { name: project.title, url: `${siteConfig.url}/portfolio/${slug}` },
  ]);

  return (
    <div id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHeader title={project.title} description={project.excerpt}>
        <Breadcrumbs
          items={[
            { label: "Home", href: routes.home },
            { label: "Portfolio", href: routes.portfolio },
            { label: project.title },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="accent" className="capitalize">
            {project.category.replace(/-/g, " ")}
          </Badge>
          <Badge>{project.client}</Badge>
        </div>
      </PageHeader>

      <Container className="py-16">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
                Overview
              </h2>
              <p className="mt-4 text-muted leading-relaxed">{project.excerpt}</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
                Results
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.results.map((result) => (
                  <div
                    key={result.metric}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <p className="text-2xl font-bold text-accent">{result.value}</p>
                    <p className="mt-1 text-sm text-muted">{result.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm text-muted">Published</p>
              <p className="mt-1 font-medium">{formatDate(project.publishedAt)}</p>
            </div>
            <Button className="w-full" asChild>
              <Link href={routes.bookConsultation}>Start a Similar Project</Link>
            </Button>
          </aside>
        </div>
      </Container>
    </div>
  );
}
