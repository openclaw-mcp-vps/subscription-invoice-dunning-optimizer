import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dunning Optimizer – Recover Failed Payments Faster",
  description: "Analyze failed payment patterns and run AI-optimized dunning sequences to maximize subscription recovery rates and reduce churn."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="50fda120-3f95-4e39-8979-9afb50e05b5e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
