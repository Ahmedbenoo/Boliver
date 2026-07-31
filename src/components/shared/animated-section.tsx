"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  ScrollReveal,
  ScrollRevealGroup,
  type ScrollRevealVariant,
} from "@/components/shared/scroll-reveal";

interface AnimatedSectionProps {
  children: ReactNode;
  stagger?: boolean;
  className?: string;
  variant?: ScrollRevealVariant;
}

export function AnimatedSection({
  children,
  stagger = false,
  className,
  variant = "fade-up",
}: AnimatedSectionProps) {
  if (stagger) {
    return <ScrollRevealGroup className={className}>{children}</ScrollRevealGroup>;
  }

  return (
    <ScrollReveal className={className} variant={variant}>
      {children}
    </ScrollReveal>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedItem({ children, className, index }: AnimatedItemProps) {
  return (
    <div
      className={cn("scroll-reveal-item", className)}
      style={
        index !== undefined
          ? ({ "--item-index": index } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
