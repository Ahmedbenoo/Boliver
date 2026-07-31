import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/lib/data/blog";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on software development, AI, design, and digital transformation from the Boliveer team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div id="main-content">
      <PageHeader
        eyebrow="Blog"
        title="Insights & Updates"
        description="Expert perspectives on building and scaling digital products."
      />
      <SectionWrapper>
        <AnimatedSection stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post) => (
            <AnimatedItem key={post.id}>
              <Link
                href={routes.post(post.slug)}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="accent" className="mb-3">
                    {post.category}
                  </Badge>
                  <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}
