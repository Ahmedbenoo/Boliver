/** Lightweight reveal — CSS only, no Framer Motion */
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
}

export function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  return <div className={cn("section-reveal", className)}>{children}</div>;
}

export function AnimatedItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
