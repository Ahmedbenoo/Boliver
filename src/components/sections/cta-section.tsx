import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLabel } from "@/components/shared/arrow-label";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export async function CtaSection() {
  const t = await getTranslations("sections.cta");
  const tc = await getTranslations("common");

  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20"
      />
      <Container className="relative text-center">
        <ScrollReveal variant="blur-up">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{t("description")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/book-consultation">
                <ArrowLabel>{tc("bookFreeConsultation")}</ArrowLabel>
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">{tc("contactUs")}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
