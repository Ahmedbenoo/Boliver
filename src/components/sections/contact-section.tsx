import { getTranslations } from "next-intl/server";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ContactInfo } from "@/types";
import { siteConfig } from "@/lib/constants/site";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { GlassCard } from "@/components/shared/glass-card";
import { ContactForm } from "@/components/forms/contact-form-lazy";

interface ContactSectionProps {
  data?: ContactInfo;
}

export async function ContactSection({ data }: ContactSectionProps) {
  const t = await getTranslations("sections.contact");
  const contact = data ?? {
    email: siteConfig.email,
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    address: siteConfig.address,
    mapEmbedUrl: undefined,
  };

  const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <SectionWrapper variant="gradient" id="contact">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AnimatedSection className="grid gap-10 lg:grid-cols-5">
        <AnimatedItem className="space-y-4 lg:col-span-2">
          <GlassCard className="p-6">
            <Mail className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-[family-name:var(--font-syne)] font-semibold">{t("email")}</h3>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 block text-sm text-muted transition-colors hover:text-accent"
            >
              {contact.email}
            </a>
          </GlassCard>

          <GlassCard className="p-6">
            <Phone className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-[family-name:var(--font-syne)] font-semibold">{t("phone")}</h3>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm text-muted transition-colors hover:text-accent"
            >
              {contact.phone}
            </a>
          </GlassCard>

          <GlassCard className="p-6">
            <MessageCircle className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-[family-name:var(--font-syne)] font-semibold">{t("whatsapp")}</h3>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-muted transition-colors hover:text-accent"
            >
              {t("whatsappAction")}
            </a>
          </GlassCard>

          <GlassCard className="p-6">
            <MapPin className="h-5 w-5 text-accent" />
            <h3 className="mt-3 font-[family-name:var(--font-syne)] font-semibold">{t("location")}</h3>
            <p className="mt-1 text-sm text-muted">{contact.address}</p>
          </GlassCard>

          <GlassCard className="overflow-hidden p-0">
            <div className="relative flex aspect-[16/10] items-center justify-center bg-card/50">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-primary)_0%,transparent_70%)] opacity-40" />
              <div className="relative text-center">
                <MapPin className="mx-auto h-8 w-8 text-accent/60" />
                <p className="mt-2 text-sm text-muted">{t("mapReady")}</p>
                <p className="text-xs text-muted-foreground">{t("mapHint")}</p>
              </div>
            </div>
          </GlassCard>
        </AnimatedItem>

        <AnimatedItem className="lg:col-span-3">
          <GlassCard glow className="p-8 md:p-10">
            <ContactForm />
          </GlassCard>
        </AnimatedItem>
      </AnimatedSection>
    </SectionWrapper>
  );
}
