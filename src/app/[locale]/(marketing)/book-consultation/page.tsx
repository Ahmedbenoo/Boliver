import { createPageMetadata } from "@/lib/seo/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { GlassCard } from "@/components/shared/glass-card";

export const metadata = createPageMetadata({
  title: "Book a Consultation",
  description:
    "Schedule a free consultation with Boliveer to discuss your project goals, timeline, and budget.",
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  return (
    <div id="main-content">
      <PageHeader
        eyebrow="Consultation"
        title="Book a Free Consultation"
        description="Tell us about your project and we'll schedule a call to explore how we can help."
      />
      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          <GlassCard className="p-8">
            <ConsultationForm />
          </GlassCard>
        </div>
      </Container>
    </div>
  );
}
