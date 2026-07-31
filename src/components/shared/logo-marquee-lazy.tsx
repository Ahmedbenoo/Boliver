"use client";

import dynamic from "next/dynamic";

export const LogoMarquee = dynamic(
  () =>
    import("@/components/shared/logo-marquee").then((mod) => ({
      default: mod.LogoMarquee,
    })),
  {
    ssr: true,
    loading: () => <div className="h-16" aria-hidden />,
  }
);
