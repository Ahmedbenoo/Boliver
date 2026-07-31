import { Mail, MapPin, Phone } from "lucide-react";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/constants/site";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/shared/glass-card";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Boliveer. We'd love to hear about your project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div id="main-content">
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a project in mind? Send us a message and we'll respond within 24 hours."
      />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            <GlassCard className="p-6">
              <Mail className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-semibold">Email</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-muted hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </GlassCard>
            <GlassCard className="p-6">
              <Phone className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-semibold">Phone</h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-sm text-muted hover:text-accent"
              >
                {siteConfig.phone}
              </a>
            </GlassCard>
            <GlassCard className="p-6">
              <MapPin className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-semibold">Location</h3>
              <p className="mt-1 text-sm text-muted">{siteConfig.address}</p>
            </GlassCard>
          </div>
          <div className="lg:col-span-2">
            <GlassCard className="p-8">
              <ContactForm />
            </GlassCard>
          </div>
        </div>
      </Container>
    </div>
  );
}
