"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "./container";
import logoLight from "@/components/shared/logo2.png";
import logoDark from "@/components/shared/logo3.png";

const logoClassName =
  "h-auto w-auto max-h-14 object-contain object-start md:max-h-11";

function HeaderLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted ? true : resolvedTheme === "dark";
  const logoSrc = isDark ? logoDark : logoLight;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="justify-self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Image
        src={logoSrc}
        alt={siteConfig.name}
        width={logoLight.width}
        height={logoLight.height}
        priority
        sizes="(max-width: 768px) 180px, 220px"
        className={logoClassName}
      />
    </Link>
  );
}

const navItems = [
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-border bg-background/95 shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-20">
          <HeaderLogo />

          <nav
            className="hidden items-center justify-center gap-6 lg:flex xl:gap-8"
            aria-label={tc("mainNav")}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-accent",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "text-accent"
                    : "text-muted"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-self-end gap-2 md:flex">
            <LocaleSwitcher />
            <ThemeToggle />
            <Button variant="secondary" size="sm" asChild>
              <Link href="/contact">{tc("contact")}</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/book-consultation">{tc("bookConsultation")}</Link>
            </Button>
          </div>

          <div className="flex items-center justify-self-end gap-2 md:hidden">
            <LocaleSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-foreground"
              aria-label={mobileOpen ? tc("closeMenu") : tc("openMenu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label={tc("mobileNav")}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-card",
                    pathname === item.href ? "bg-card font-medium text-accent" : "text-muted"
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Button variant="secondary" asChild>
                  <Link href="/contact">{tc("contact")}</Link>
                </Button>
                <Button asChild>
                  <Link href="/book-consultation">{tc("bookConsultation")}</Link>
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
