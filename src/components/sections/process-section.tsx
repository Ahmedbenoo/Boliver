import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { ProcessStep } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProcessTimeline } from "@/components/sections/process-timeline";

interface ProcessSectionProps {
  data: ProcessStep[];
}

export async function ProcessSection({ data }: ProcessSectionProps) {
  const t = await getTranslations("sections.process");

  return (
    <SectionWrapper variant="gradient" id="process">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <ProcessTimeline data={data} />
    </SectionWrapper>
  );
}
