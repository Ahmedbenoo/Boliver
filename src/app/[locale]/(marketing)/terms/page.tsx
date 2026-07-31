import { createPageMetadata } from "@/lib/seo/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Boliveer's terms of service — the agreement governing use of our website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div id="main-content">
      <PageHeader title="Terms of Service" description="Last updated: January 2026" />
      <Container className="prose prose-invert max-w-3xl py-16">
        <section className="space-y-6 text-muted leading-relaxed">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing or using the Boliveer website and services, you agree
              to be bound by these Terms of Service.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              Services
            </h2>
            <p className="mt-2">
              Boliveer provides software development, design, and digital
              transformation services. Specific project terms are defined in
              individual statements of work or contracts.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              Intellectual Property
            </h2>
            <p className="mt-2">
              Unless otherwise agreed in writing, deliverables created for clients
              become the client&apos;s property upon full payment. Boliveer retains
              rights to pre-existing tools, frameworks, and general knowledge.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              Limitation of Liability
            </h2>
            <p className="mt-2">
              Boliveer shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or services.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
