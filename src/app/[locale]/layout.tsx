import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pickClientMessages } from "@/lib/i18n/client-messages";
import { AppProviders } from "@/components/providers/app-providers";
import { SkipLink } from "@/components/shared/skip-link";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = pickClientMessages(await getMessages());

  return (
    <AppProviders locale={locale} messages={messages}>
      <SkipLink />
      {children}
    </AppProviders>
  );
}
