"use client";

import { useEffect } from "react";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">Error</p>
      <h1 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight md:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-muted">
        An unexpected error occurred while loading this page.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
        >
          Try again
        </button>
        <Link
          href={routes.home}
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-white/5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
