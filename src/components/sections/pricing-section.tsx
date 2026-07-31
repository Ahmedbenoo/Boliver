import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Check, X } from "lucide-react";
import type { PricingPlan } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  data: PricingPlan[];
}

export async function PricingSection({ data }: PricingSectionProps) {
  const t = await getTranslations("sections.pricing");
  const locale = await getLocale();

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <SectionWrapper id="pricing">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AnimatedSection stagger className="grid gap-8 lg:grid-cols-3">
        {data.map((plan) => (
          <AnimatedItem key={plan.id}>
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border p-8",
                plan.highlighted
                  ? "border-accent/50 bg-accent/5 shadow-lg shadow-accent/10"
                  : "border-border bg-card"
              )}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                  {t("mostPopular")}
                </span>
              )}
              <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <div className="mt-6">
                <span className="font-[family-name:var(--font-syne)] text-4xl font-bold">
                  {plan.priceAmount != null ? formatPrice(plan.priceAmount) : t("customPrice")}
                </span>
                {plan.period !== "quote" && (
                  <span className="text-muted"> / {t("perProject")}</span>
                )}
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground/60"}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.highlighted ? "default" : "secondary"}
                asChild
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
            </div>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
