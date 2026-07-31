import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Container } from "./container";

export async function Footer() {
  const t = await getTranslations("nav");
  const tf = await getTranslations("footer");
  const year = new Date().getFullYear();

  const companyLinks = [
    { key: "about", href: "/about" },
    { key: "careers", href: "/careers" },
    { key: "contact", href: "/contact" },
    { key: "bookConsultation", href: "/book-consultation" },
  ] as const;

  const serviceLinks = [
    { key: "webDevelopment", href: "/services/web-development" },
    { key: "mobileApps", href: "/services/mobile-apps" },
    { key: "aiSolutions", href: "/services/ai-solutions" },
    { key: "digitalMarketing", href: "/services/digital-marketing" },
  ] as const;

  const legalLinks = [
    { key: "privacyPolicy", href: "/privacy-policy" },
    { key: "termsOfService", href: "/terms" },
  ] as const;

  return (
    <footer className="border-t border-border bg-card/30">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <div className="mt-6 space-y-2 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {siteConfig.address}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold uppercase tracking-wider">
              {tf("company")}
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold uppercase tracking-wider">
              {tf("services")}
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold uppercase tracking-wider">
              {tf("legal")}
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. {tf("copyright")}
          </p>
          <div className="flex gap-4">
            {Object.entries(siteConfig.socialLinks).map(([key, url]) =>
              url ? (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize transition-colors hover:text-accent"
                >
                  {key}
                </a>
              ) : null
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
