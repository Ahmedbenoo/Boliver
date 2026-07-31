import { getTranslations } from "next-intl/server";
import type { WhyFeature } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { GlassCard } from "@/components/shared/glass-card";

interface WhySectionProps {
  data: WhyFeature[];
}

export async function WhySection({ data }: WhySectionProps) {
  const t = await getTranslations("sections.why");

  return (
    <SectionWrapper id="why">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AnimatedSection stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((feature) => (
          <AnimatedItem key={feature.id}>
            <GlassCard className="h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <DynamicIcon name={feature.icon} className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-syne)] text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </GlassCard>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
