"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/constants/site";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07111f",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ color: "#22d3ee", fontSize: "0.875rem", letterSpacing: "0.2em" }}>
            ERROR
          </p>
          <h1 style={{ marginTop: "1rem", fontSize: "1.75rem" }}>Something went wrong</h1>
          <p style={{ marginTop: "0.75rem", color: "#94a3b8", maxWidth: "28rem" }}>
            {siteConfig.name} encountered an unexpected error. Please try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              border: "none",
              background: "#2563eb",
              color: "#ffffff",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
