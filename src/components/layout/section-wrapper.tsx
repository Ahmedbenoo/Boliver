import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "muted" | "gradient";
}

export function SectionWrapper({
  children,
  id,
  className,
  containerClassName,
  variant = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--section-py)]",
        variant === "muted" && "bg-white/[0.02]",
        variant === "gradient" &&
          "relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
