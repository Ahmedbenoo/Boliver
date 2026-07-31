"use client";

import dynamic from "next/dynamic";

export const ContactForm = dynamic(
  () =>
    import("@/components/forms/contact-form").then((mod) => ({
      default: mod.ContactForm,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[420px] animate-pulse rounded-xl bg-card/50" aria-hidden />
    ),
  }
);
