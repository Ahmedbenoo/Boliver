import type { CSSProperties } from "react";
import type { HeroContent } from "@/types";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { AnimatedBackground } from "@/components/shared/animated-background";
import { FloatingCards } from "@/components/shared/floating-cards";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface HeroSectionProps {
  data: HeroContent;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <AnimatedBackground variant="hero" />

      <Container className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <div
            className="hero-enter-item flex flex-wrap gap-2"
            style={{ "--hero-index": 0 } as CSSProperties}
          >
            {data.trustBadges.map((badge) => (
              <Badge key={badge} variant="accent">
                {badge}
              </Badge>
            ))}
          </div>

          <h1
            className="hero-enter-item mt-6 font-[family-name:var(--font-syne)] text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ "--hero-index": 1 } as CSSProperties}
          >
            {data.headline}
          </h1>

          <p
            className="hero-enter-item mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
            style={{ "--hero-index": 2 } as CSSProperties}
          >
            {data.subheadline}
          </p>

          <div
            className="hero-enter-item mt-8 flex flex-wrap gap-4"
            style={{ "--hero-index": 3 } as CSSProperties}
          >
            <Button size="lg" asChild>
              <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href={data.secondaryCta.href}>{data.secondaryCta.label}</Link>
            </Button>
          </div>

          <dl
            className="hero-enter-item mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            style={{ "--hero-index": 4 } as CSSProperties}
          >
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-[family-name:var(--font-syne)] text-2xl font-bold text-accent md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ScrollReveal
          immediate
          variant="scale-up"
          delay={500}
          className="relative mt-12 flex-1 lg:mt-0"
        >
          <FloatingCards cards={data.floatingCards} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
