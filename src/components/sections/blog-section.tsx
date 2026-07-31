import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogSectionProps {
  data: BlogPost[];
}

export async function BlogSection({ data }: BlogSectionProps) {
  const t = await getTranslations("sections.blog");
  const tc = await getTranslations("common");
  const latest = [...data]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <SectionWrapper id="blog">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AnimatedSection stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <AnimatedItem key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Badge variant="accent">{post.category}</Badge>
                <h3 className="mt-3 font-[family-name:var(--font-syne)] text-xl font-semibold leading-snug transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedSection>
      <div className="mt-10 text-center">
        <Button variant="secondary" asChild>
          <Link href="/blog">
            {tc("readAllArticles")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
