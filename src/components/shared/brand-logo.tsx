"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";
import logoLight from "@/components/shared/logo2.png";
import logoDark from "@/components/shared/logo3.png";

const sizeMap = {
  sm: "max-h-9",
  md: "max-h-14 object-start md:max-h-11",
  lg: "max-h-14 object-start md:max-h-[4.5rem]",
} as const;

interface BrandLogoProps {
  size?: keyof typeof sizeMap;
  linked?: boolean;
  priority?: boolean;
  className?: string;
}

export function BrandLogo({
  size = "md",
  linked = true,
  priority = false,
  className,
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted ? true : resolvedTheme === "dark";
  const logoSrc = isDark ? logoDark : logoLight;

  const mark = (
    <Image
      src={logoSrc}
      alt={siteConfig.name}
      width={logoLight.width}
      height={logoLight.height}
      priority={priority}
      sizes="(max-width: 768px) 180px, 220px"
      className={cn("h-auto w-auto object-contain", sizeMap[size], className)}
    />
  );

  if (!linked) return mark;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="inline-flex shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {mark}
    </Link>
  );
}
