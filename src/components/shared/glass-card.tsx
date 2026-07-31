import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({ children, className, glow }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-sm",
        glow && "shadow-lg shadow-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
