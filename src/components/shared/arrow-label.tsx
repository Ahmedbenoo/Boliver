import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLabelProps {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export function ArrowLabel({ children, className, iconClassName }: ArrowLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span>{children}</span>
      <ArrowRight
        className={cn("h-4 w-4 shrink-0 rtl:rotate-180", iconClassName)}
        aria-hidden
      />
    </span>
  );
}
