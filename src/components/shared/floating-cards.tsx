import type { FloatingCard } from "@/types";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { GlassCard } from "@/components/shared/glass-card";
import { cn } from "@/lib/utils";

interface FloatingCardsProps {
  cards: FloatingCard[];
}

export function FloatingCards({ cards }: FloatingCardsProps) {
  return (
    <div className="relative mx-auto max-w-md space-y-4">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className={cn(index === 1 && "ms-8", index === 2 && "ms-4")}
        >
          <GlassCard glow className="p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <DynamicIcon name={card.icon} className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium">{card.title}</p>
                <p className="text-sm text-accent">{card.metric}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      ))}
    </div>
  );
}
