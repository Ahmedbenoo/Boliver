import { Container } from "./container";

export function MarketingPageSkeleton() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden bg-border"
      >
        <div className="loading-bar h-full w-1/3 bg-accent" />
      </div>

      <main id="main-content" className="min-h-[calc(100vh-5rem)] animate-pulse">
        <div className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent pt-32 pb-16">
          <Container className="space-y-4">
            <div className="h-4 w-24 rounded bg-card" />
            <div className="h-10 w-2/3 max-w-lg rounded-lg bg-card" />
            <div className="h-5 w-full max-w-xl rounded bg-card/70" />
          </Container>
        </div>

        <Container className="py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 h-10 w-10 rounded-lg bg-card/80" />
                <div className="h-5 w-3/4 rounded bg-card/80" />
                <div className="mt-3 h-4 w-full rounded bg-card/60" />
                <div className="mt-2 h-4 w-5/6 rounded bg-card/60" />
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
