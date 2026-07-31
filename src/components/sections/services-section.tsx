import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLabel } from "@/components/shared/arrow-label";
import type { Service } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";

interface ServicesSectionProps {
  data: Service[];
}

export async function ServicesSection({ data }: ServicesSectionProps) {
  const t = await getTranslations("sections.services");
  const tc = await getTranslations("common");
  const featured = data.filter((s) => s.featured).slice(0, 6);

  return (
    <SectionWrapper id="services">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service) => (
          <AnimatedItem key={service.id}>
            <Link href={`/services/${service.slug}`} className="group block h-full">
              <GlassCard className="flex h-full flex-col p-6 transition-all group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <DynamicIcon name={service.icon} className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-syne)] text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{service.description}</p>
                <ul className="mt-4 space-y-1">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <ArrowLabel className="mt-4 gap-1 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  {tc("learnMore")}
                </ArrowLabel>
              </GlassCard>
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedSection>
      <ScrollReveal variant="fade-up" delay={120} className="mt-10 text-center">
        <Button variant="secondary" asChild>
          <Link href="/services">
            <ArrowLabel>{tc("viewAllServices")}</ArrowLabel>
          </Link>
        </Button>
      </ScrollReveal>
    </SectionWrapper>
  );
}
