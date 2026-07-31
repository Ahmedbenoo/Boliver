import { Suspense, type ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MarketingPageSkeleton } from "@/components/layout/marketing-page-skeleton";

interface MarketingLayoutProps {
  children: ReactNode;
}

function MarketingPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <Suspense fallback={<MarketingPageSkeleton />}>
        <MarketingPageShell>{children}</MarketingPageShell>
      </Suspense>
    </>
  );
}
