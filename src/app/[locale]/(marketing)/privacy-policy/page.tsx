import { createPageMetadata } from "@/lib/seo/metadata";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Boliveer's privacy policy — how we collect, use, and protect your data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div id="main-content">
      <PageHeader title="Privacy Policy" description="Last updated: January 2026" />
      <Container className="prose prose-invert max-w-3xl py-16">
        <section className="space-y-6 text-muted leading-relaxed">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="mt-2">
              We collect information you provide directly, such as your name, email,
              company, and project details when you contact us or book a consultation.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use your information to respond to inquiries, provide services,
              improve our website, and communicate about projects you&apos;ve expressed
              interest in.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              Data Security
            </h2>
            <p className="mt-2">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              or destruction.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-2">
              For privacy-related questions, contact us at hello@boliveer.com.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
