import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { careersData } from "@/lib/data/careers";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";

export const metadata = createPageMetadata({
  title: "Careers",
  description: "Join the Boliveer team. Open positions in engineering, design, and more.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div id="main-content">
      <PageHeader
        eyebrow="Careers"
        title="Join Our Team"
        description="We're always looking for talented engineers, designers, and strategists who share our passion for building great products."
      />
      <SectionWrapper>
        <AnimatedSection stagger className="space-y-4">
          {careersData.map((position) => (
            <AnimatedItem key={position.id}>
              <Link href={routes.career(position.slug)} className="group block">
                <GlassCard className="p-6 transition-all group-hover:border-accent/30">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold group-hover:text-accent">
                        {position.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted">{position.description}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {position.location}
                        </span>
                        <Badge>{position.department}</Badge>
                        <Badge variant="accent" className="capitalize">
                          {position.type.replace("-", " ")}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      Posted {formatDate(position.publishedAt)}
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}
