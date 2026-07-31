import type { PricingPlan } from "@/types";
import { routes } from "@/lib/constants/routes";

export const pricingData: PricingPlan[] = [
  {
    id: "1",
    slug: "starter",
    name: "Starter",
    description: "Perfect for startups launching their first digital product.",
    priceAmount: 45_000,
    period: "project",
    features: [
      { label: "Landing page or MVP scope", included: true },
      { label: "UI/UX design", included: true },
      { label: "2 revision rounds", included: true },
      { label: "30-day support", included: true },
      { label: "Dedicated project manager", included: false },
    ],
    highlighted: false,
    cta: { label: "Get Started", href: routes.bookConsultation },
    sortOrder: 1,
  },
  {
    id: "2",
    slug: "business",
    name: "Business",
    description: "For growing companies needing a full product team.",
    priceAmount: 150_000,
    period: "project",
    features: [
      { label: "Full web or mobile app", included: true },
      { label: "Advanced UI/UX + design system", included: true },
      { label: "CMS integration", included: true },
      { label: "90-day support", included: true },
      { label: "Dedicated project manager", included: true },
    ],
    highlighted: true,
    cta: { label: "Book Consultation", href: routes.bookConsultation },
    sortOrder: 2,
  },
  {
    id: "3",
    slug: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for complex, large-scale requirements.",
    priceAmount: null,
    period: "quote",
    features: [
      { label: "Multi-platform ecosystem", included: true },
      { label: "AI & automation modules", included: true },
      { label: "Dedicated senior team", included: true },
      { label: "SLA & priority support", included: true },
      { label: "Ongoing retainer options", included: true },
    ],
    highlighted: false,
    cta: { label: "Contact Sales", href: routes.contact },
    sortOrder: 3,
  },
];
