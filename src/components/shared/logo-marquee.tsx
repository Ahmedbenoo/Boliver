"use client";

import Image from "next/image";
import type { ClientLogo } from "@/types";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  logos: ClientLogo[];
  className?: string;
}

export function LogoMarquee({ logos, className }: LogoMarqueeProps) {
  const duplicated = [...logos, ...logos];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />

      <div className="flex w-max animate-marquee gap-16 py-4">
        {duplicated.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex h-12 w-36 shrink-0 items-center justify-center opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={client.logoUrl}
              alt={client.name}
              width={144}
              height={48}
              className="h-auto max-h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
