import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { siteData } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import { Suspense } from "react";
import "lenis/dist/lenis.css";
import "./globals.css";

/** Service template — UI sans */
const fontService = Plus_Jakarta_Sans({
  variable: "--font-service",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/** Service template — display / headlines */
const fontServiceDisplay = Fraunces({
  variable: "--font-service-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${siteData.templates[0].title} | Plumbing & Home Repair`,
  description: siteData.common.Footer.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontService.variable} ${fontServiceDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans" suppressHydrationWarning>
        <Suspense fallback={null}>
          <SmoothScroll>{children}</SmoothScroll>
        </Suspense>
      </body>
    </html>
  );
}
