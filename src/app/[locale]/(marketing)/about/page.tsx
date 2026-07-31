import Link from "next/link";
import { ArrowLabel } from "@/components/shared/arrow-label";
import { createPageMetadata } from "@/lib/seo/metadata";
import { routes } from "@/lib/constants/routes";
import { teamData, whyBoliveerData } from "@/lib/data";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { AnimatedSection, AnimatedItem } from "@/components/shared/animated-section";
import { GlassCard } from "@/components/shared/glass-card";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Boliveer — a premium software development and digital transformation agency.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div id="main-content">
      <PageHeader
        eyebrow="About"
        title="About Boliveer"
        description="We are a premium software agency helping ambitious brands design, build, and scale digital products."
      />
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold">
              Building the Future, One Product at a Time
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Founded with a mission to deliver enterprise-grade software with
              startup agility, Boliveer combines deep technical expertise with
              premium design to help businesses transform digitally.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From MVPs to full-scale platforms, we partner with healthcare,
              e-commerce, real estate, and enterprise teams worldwide to deliver
              products that drive measurable growth.
            </p>
            <Button className="mt-8" asChild>
              <Link href={routes.bookConsultation}>
                <ArrowLabel>Work With Us</ArrowLabel>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {whyBoliveerData.slice(0, 4).map((item) => (
              <GlassCard key={item.id} className="p-5">
                <DynamicIcon name={item.icon} className="h-6 w-6 text-accent" />
                <p className="mt-3 font-semibold">{item.title}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="mb-12 text-center font-[family-name:var(--font-syne)] text-3xl font-bold">
          Meet the Team
        </h2>
        <AnimatedSection stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <AnimatedItem key={member.id}>
              <GlassCard className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent">{member.role}</p>
                  <p className="mt-2 text-sm text-muted">{member.bio}</p>
                </div>
              </GlassCard>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </SectionWrapper>

      <section className="border-t border-border py-16">
        <Container className="text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
            Ready to start your project?
          </h2>
          <Button className="mt-6" asChild>
            <Link href={routes.contact}>Get in Touch</Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
