import { getTranslations } from "next-intl/server";
import type { Testimonial } from "@/types";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { GlassCard } from "@/components/shared/glass-card";
import { StarRating } from "@/components/shared/star-rating";
import { Play } from "lucide-react";

interface TestimonialsSectionProps {
  data: Testimonial[];
}

export async function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const t = await getTranslations("sections.testimonials");
  const featured = data.filter((item) => item.featured);

  return (
    <SectionWrapper variant="gradient" id="testimonials">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
      <AnimatedSection stagger className="grid gap-6 md:grid-cols-2">
        {featured.map((testimonial, index) => (
          <AnimatedItem key={testimonial.id}>
            <GlassCard className="flex h-full flex-col overflow-hidden p-0">
              {index === 0 && (
                <div className="relative flex aspect-video items-center justify-center border-b border-border bg-card/50">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-accent)_0%,transparent_70%)] opacity-30" />
                  <button
                    type="button"
                    aria-label={t("playAria", { name: testimonial.name })}
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10 transition-transform hover:scale-105"
                  >
                    <Play className="ms-1 h-5 w-5 fill-accent text-accent" />
                  </button>
                  <span className="absolute bottom-3 start-4 text-xs text-muted">
                    {t("videoLabel")}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </footer>
              </div>
            </GlassCard>
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
}
