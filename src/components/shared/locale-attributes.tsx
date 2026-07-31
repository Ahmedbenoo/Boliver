"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";
import { localeDirection, type Locale } from "@/i18n/routing";

export function LocaleAttributes() {
  const locale = useLocale() as Locale;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeDirection[locale];
  }, [locale]);

  return null;
}
