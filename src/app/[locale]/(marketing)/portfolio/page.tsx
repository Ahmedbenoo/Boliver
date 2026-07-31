import { getPortfolioProjects } from "@/lib/supabase/queries/portfolio";
import { createPageMetadata } from "@/lib/seo/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Explore Boliveer's portfolio of web apps, mobile solutions, and digital transformation projects.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  return (
    <div id="main-content">
      <PageHeader
        eyebrow="Portfolio"
        title="Our Work"
        description="Case studies and projects that delivered measurable results for our clients."
      />
      <SectionWrapper>
        <PortfolioGrid projects={projects} />
      </SectionWrapper>
    </div>
  );
}
