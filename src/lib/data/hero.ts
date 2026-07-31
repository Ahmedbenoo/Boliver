import type { HeroContent } from "@/types";
import { routes } from "@/lib/constants/routes";

export const heroData: HeroContent = {
  headline: "Build Digital Products That Scale Your Business",
  subheadline:
    "Boliveer partners with ambitious brands to design, develop, and launch premium software, AI solutions, and growth systems.",
  primaryCta: {
    label: "Book Free Consultation",
    href: routes.bookConsultation,
  },
  secondaryCta: {
    label: "View Portfolio",
    href: routes.portfolio,
  },
  stats: [
    { value: "120+", label: "Projects Delivered" },
    { value: "8+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Dedicated Support" },
  ],
  trustBadges: ["ISO Ready", "Enterprise Grade", "Agile Delivery", "NDA Protected"],
  floatingCards: [
    { title: "AI Automation", metric: "3x faster ops", icon: "sparkles" },
    { title: "Conversion Lift", metric: "+42% avg.", icon: "trending-up" },
    { title: "Launch Speed", metric: "6-week MVP", icon: "rocket" },
  ],
};
