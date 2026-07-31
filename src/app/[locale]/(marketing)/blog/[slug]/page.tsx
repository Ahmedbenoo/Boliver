import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "@/lib/data/blog";
import { createPageMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";
import { formatDate } from "@/lib/utils";
import { Breadcrumbs, PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return createPageMetadata({ title: "Article Not Found", noIndex: true });
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const article = articleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${slug}`,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: post.author,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${slug}` },
  ]);

  return (
    <div id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PageHeader title={post.title} description={post.excerpt}>
        <Breadcrumbs
          items={[
            { label: "Home", href: routes.home },
            { label: "Blog", href: routes.blog },
            { label: post.title },
          ]}
        />
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
          <Badge variant="accent">{post.category}</Badge>
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>{post.author}</span>
        </div>
      </PageHeader>

      <Container className="py-16">
        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl border border-border">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <article className="prose prose-invert mx-auto mt-12 max-w-3xl">
          <p className="text-lg text-muted leading-relaxed">{post.excerpt}</p>
          <p className="mt-6 text-muted leading-relaxed">
            At Boliveer, we believe in sharing practical insights that help teams
            build better digital products. This article explores key strategies
            and best practices in {post.category.toLowerCase()} that we apply
            daily across client projects.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Whether you&apos;re launching a new product or optimizing an existing
            platform, the principles discussed here can help you make informed
            decisions and avoid common pitfalls.
          </p>
        </article>

        <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-8 text-center">
          <p className="text-muted">Ready to put these ideas into action?</p>
          <Button className="mt-4" asChild>
            <Link href={routes.bookConsultation}>Book a Consultation</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
