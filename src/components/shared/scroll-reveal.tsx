"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type ScrollRevealVariant = "fade-up" | "fade-in" | "scale-up" | "blur-up";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  once?: boolean;
  threshold?: number;
  immediate?: boolean;
  as?: ElementType;
}

function useRevealOnScroll({
  immediate = false,
  once = true,
  threshold = 0.12,
}: Pick<ScrollRevealProps, "immediate" | "once" | "threshold">) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -7% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, once, threshold]);

  return { ref, visible };
}

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  once = true,
  threshold = 0.12,
  immediate = false,
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, visible } = useRevealOnScroll({ immediate, once, threshold });

  return (
    <Tag
      ref={ref}
      className={cn(
        "scroll-reveal",
        `scroll-reveal--${variant}`,
        visible && "scroll-reveal--visible",
        className
      )}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

interface ScrollRevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

export function ScrollRevealGroup({
  children,
  className,
  stagger = 90,
  threshold = 0.08,
}: ScrollRevealGroupProps) {
  const { ref, visible } = useRevealOnScroll({ threshold });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "scroll-reveal-group",
        visible && "scroll-reveal-group--visible",
        className
      )}
      style={{ "--stagger-step": `${stagger}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
