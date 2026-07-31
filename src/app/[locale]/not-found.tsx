import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("errors");
  const tc = await getTranslations("common");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
        {t("notFoundTitle")}
      </h1>
      <p className="mt-4 max-w-md text-muted">{t("notFoundDescription")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
      >
        {tc("backToHome")}
      </Link>
    </div>
  );
}
