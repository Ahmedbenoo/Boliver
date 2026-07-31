import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LOGO_HEIGHT, LOGO_PATH, LOGO_WIDTH } from "@/lib/constants/logo";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: 36,
  md: 44,
  lg: 56,
  header: { mobile: 52, desktop: 68 },
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
  const isHeader = size === "header";
  const maxHeight = isHeader ? undefined : sizeMap[size];

  const mark = (
    <Image
      src={LOGO_PATH}
      alt={siteConfig.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        isHeader && "max-h-14 md:max-h-[4.5rem]",
        className
      )}
      style={maxHeight ? { maxHeight, width: "auto" } : { width: "auto" }}
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
