import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";
import logoLight from "@/components/shared/logo2.png";
import logoDark from "@/components/shared/logo3.png";

const sizeMap = {
  sm: "max-h-8 max-w-[6.5rem] object-start md:max-h-9 md:max-w-none",
  md: "max-h-8 max-w-[7rem] object-start md:max-h-11 md:max-w-none",
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
  const imageClassName = cn("h-auto w-auto object-contain", sizeMap[size], className);

  const mark = (
    <span className="relative inline-flex shrink-0">
      <Image
        src={logoLight}
        alt={siteConfig.name}
        width={logoLight.width}
        height={logoLight.height}
        priority={priority}
        sizes="(max-width: 768px) 112px, 220px"
        className={cn(imageClassName, "dark:hidden")}
      />
      <Image
        src={logoDark}
        alt=""
        aria-hidden
        width={logoDark.width}
        height={logoDark.height}
        priority={priority}
        sizes="(max-width: 768px) 112px, 220px"
        className={cn(imageClassName, "hidden dark:block")}
      />
    </span>
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
