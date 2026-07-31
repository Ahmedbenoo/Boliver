import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import type { PortfolioProject } from "@/types";
import { formatDate } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLabel } from "@/components/shared/arrow-label";

interface PortfolioSectionProps {
  data: PortfolioProject[];
}

export async function PortfolioSection({ data }: PortfolioSectionProps) {
  const t = await getTranslations("sections.portfolio");
  const tc = await getTranslations("common");
  const featured = data.filter((p) => p.featured).slice(0, 3);

  return (
    <SectionWrapper id="portfolio">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AnimatedSection stagger className="grid gap-8 lg:grid-cols-3">
        {featured.map((project) => (
          <AnimatedItem key={project.id}>
            <Link
              href={`/portfolio/${project.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="accent" className="mb-3 capitalize">
                  {project.category.replace(/-/g, " ")}
                </Badge>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {formatDate(project.publishedAt)}
                </p>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedSection>
      <div className="mt-10 text-center">
        <Button variant="secondary" asChild>
          <Link href="/portfolio">
            <ArrowLabel>{tc("viewAllProjects")}</ArrowLabel>
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
