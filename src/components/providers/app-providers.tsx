"use client";

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { LocaleAttributes } from "@/components/shared/locale-attributes";

interface AppProvidersProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}

export function AppProviders({ children, locale, messages }: AppProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <LocaleAttributes />
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
