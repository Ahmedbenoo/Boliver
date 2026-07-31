import { getTranslations } from "next-intl/server";
import type { FaqItem } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/sections/faq-accordion-lazy";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface FaqSectionProps {
  data: FaqItem[];
}

export async function FaqSection({ data }: FaqSectionProps) {
  const t = await getTranslations("sections.faq");

  return (
    <SectionWrapper id="faq">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <ScrollReveal variant="fade-up" delay={100}>
        <FaqAccordion data={data} />
      </ScrollReveal>
    </SectionWrapper>
  );
}
