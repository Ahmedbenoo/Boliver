import type { PortfolioProject } from "@/types";
import { portfolioData } from "@/lib/data/portfolio";

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  return portfolioData;
}

export async function getProjectBySlug(
  slug: string
): Promise<PortfolioProject | undefined> {
  return portfolioData.find((project) => project.slug === slug);
}
