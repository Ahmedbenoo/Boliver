import type { PortfolioProject } from "@/types";
import type { Tables } from "@/types/supabase";
import { portfolioData } from "@/lib/data/portfolio";
import { createClient } from "@/lib/supabase/server";

type PortfolioRow = Tables<"portfolio_projects">;

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return portfolioData;
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (error || !data?.length) {
      return portfolioData;
    }

    return (data as PortfolioRow[]).map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      client: row.client,
      category: row.category as PortfolioProject["category"],
      excerpt: row.excerpt,
      coverImage: row.cover_image,
      gallery: (row.gallery as string[]) ?? [],
      technologies: (row.technologies as string[]) ?? [],
      results: (row.results as unknown as PortfolioProject["results"]) ?? [],
      publishedAt: row.published_at,
      featured: row.featured,
    }));
  } catch {
    return portfolioData;
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<PortfolioProject | undefined> {
  const projects = await getPortfolioProjects();
  return projects.find((p) => p.slug === slug);
}
