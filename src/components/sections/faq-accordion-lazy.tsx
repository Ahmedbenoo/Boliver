"use client";

import dynamic from "next/dynamic";

export const FaqAccordion = dynamic(
  () =>
    import("@/components/sections/faq-accordion").then((mod) => ({
      default: mod.FaqAccordion,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-64" aria-hidden />,
  }
);
