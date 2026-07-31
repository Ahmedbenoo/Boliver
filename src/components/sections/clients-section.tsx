import { getTranslations } from "next-intl/server";
import type { ClientLogo } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { LogoMarquee } from "@/components/shared/logo-marquee-lazy";

interface ClientsSectionProps {
  data: ClientLogo[];
}

export async function ClientsSection({ data }: ClientsSectionProps) {
  const t = await getTranslations("sections.clients");

  return (
    <SectionWrapper variant="muted" className="py-16">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <LogoMarquee logos={data} className="mt-4" />
    </SectionWrapper>
  );
}
