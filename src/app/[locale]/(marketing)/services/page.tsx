import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServices } from "@/lib/data/queries/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";
import { PageHeader } from "@/components/layout/page-header";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore Boliveer's full range of software development, design, AI, and digital marketing services.",
  path: "/services",
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div id="main-content">
      <PageHeader
        eyebrow="Services"
        title="Our Services"
        description="End-to-end digital solutions — from strategy and design to development, launch, and growth."
      />
      <SectionWrapper>
        <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <AnimatedItem key={service.id}>
              <Link href={routes.service(service.slug)} className="group block h-full">
                <GlassCard className="flex h-full flex-col p-6 transition-all group-hover:border-accent/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                    <DynamicIcon name={service.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mt-4 font-[family-name:var(--font-syne)] text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">{service.description}</p>
                  <ul className="mt-4 space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </GlassCard>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedSection>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href={routes.bookConsultation}>Book a Free Consultation</Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
