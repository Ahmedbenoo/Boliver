import { getTranslations } from "next-intl/server";
import type { ClientLogo } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { LogoMarquee } from "@/components/shared/logo-marquee-lazy";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface ClientsSectionProps {
  data: ClientLogo[];
}

export async function ClientsSection({ data }: ClientsSectionProps) {
  const t = await getTranslations("sections.clients");

  return (
    <SectionWrapper variant="muted" className="py-16">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <ScrollReveal variant="fade-up" delay={120} className="mt-4">
        <LogoMarquee logos={data} />
      </ScrollReveal>
    </SectionWrapper>
  );
}
