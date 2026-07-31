"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { PortfolioCategory, PortfolioProject } from "@/types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";

const categoryKeys = [
  { labelKey: "all", value: "all" as const },
  { labelKey: "web", value: "web-development" as PortfolioCategory },
  { labelKey: "mobile", value: "mobile-apps" as PortfolioCategory },
  { labelKey: "ai", value: "ai-solutions" as PortfolioCategory },
  { labelKey: "ecommerce", value: "e-commerce" as PortfolioCategory },
  { labelKey: "healthcare", value: "healthcare" as PortfolioCategory },
  { labelKey: "realEstate", value: "real-estate" as PortfolioCategory },
  { labelKey: "erpCrm", value: "erp-crm" as PortfolioCategory },
];

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const t = useTranslations("portfolio");
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "all">("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {categoryKeys.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActiveCategory(category.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all",
              activeCategory === category.value
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-border bg-card text-muted hover:border-accent/20 hover:text-foreground"
            )}
          >
            {t(category.labelKey)}
          </button>
        ))}
      </div>

      <AnimatedSection
        stagger
        key={activeCategory}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="accent" className="mb-3 capitalize">
                  {project.category.replace(/-/g, " ")}
                </Badge>
                <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{project.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {formatDate(project.publishedAt)}
                </p>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedSection>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">{t("empty")}</p>
      )}
    </>
  );
}
