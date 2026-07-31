import type { ProcessStep } from "@/types";
import { DynamicIcon } from "@/components/shared/dynamic-icon";

interface ProcessTimelineProps {
  data: ProcessStep[];
}

export function ProcessTimeline({ data }: ProcessTimelineProps) {
  return (
    <div className="relative section-reveal">
      <div
        aria-hidden
        className="absolute start-8 end-8 top-8 hidden h-px bg-gradient-to-r from-primary via-accent to-secondary lg:block"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {data.map((step, index) => (
          <div key={step.id} className="group relative text-center">
            <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card transition-colors group-hover:border-accent/40">
              <DynamicIcon name={step.icon} className="h-7 w-7 text-accent" />
            </div>
            <span className="mt-4 block font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-syne)] font-semibold">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
