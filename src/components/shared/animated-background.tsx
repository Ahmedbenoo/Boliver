import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
  variant?: "hero" | "subtle";
}

export function AnimatedBackground({
  className,
  variant = "hero",
}: AnimatedBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-grid opacity-[0.25]" />
      <div
        className={cn(
          "absolute inset-0",
          variant === "hero"
            ? "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--glow-primary),transparent)]"
            : "bg-[radial-gradient(ellipse_at_center,var(--glow-primary)_0%,transparent_70%)] opacity-30"
        )}
      />
      {/* Static glow orbs — CSS only, no JS animation */}
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
    </div>
  );
}
