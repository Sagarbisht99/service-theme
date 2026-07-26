import type { CSSProperties } from "react";
import type { ResolvedSiteData } from "@/lib/types";
import Header from "@/themes/service/Header";
import Footer from "@/themes/service/Footer";
import Hero from "@/themes/service/sections/Hero";
import About from "@/themes/service/sections/About";
import Services from "@/themes/service/sections/Services";
import Partners from "@/themes/service/sections/Partners";

/**
 * Service template homepage — AquaFix style
 * Section 1: Header + Hero (feature bar included)
 * Section 2: About (who we are + trust features)
 * Section 3: Services (6 service categories + metrics)
 * Section 4: Partners (suppliers & leading brands)
 */
export default function ServiceHome({ data }: { data: ResolvedSiteData }) {
  return (
    <div
      className="theme-service min-h-screen overflow-x-hidden bg-[#f4f7fb] text-[#0b1f3a]"
      style={data.variables as CSSProperties}
    >
      <Header data={data} variant="solid" />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Services data={data} />
        <Partners data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}
