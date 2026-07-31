"use client";

import { useLocale } from "next-intl";
import { useLayoutEffect } from "react";
import { localeDirection, type Locale } from "@/i18n/routing";

export function LocaleAttributes() {
  const locale = useLocale() as Locale;

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection[locale];
  }, [locale]);

  return null;
}
