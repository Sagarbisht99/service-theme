import type { CSSProperties } from "react";
import type { ResolvedSiteData } from "@/lib/types";
import Header from "@/themes/template-1/Header";
import Footer from "@/themes/template-1/Footer";
import Hero from "@/themes/template-1/sections/Hero";
import About from "@/themes/template-1/sections/About";
import WhyChooseUs from "@/themes/template-1/sections/WhyChooseUs";
import Services from "@/themes/template-1/sections/Services";
import Portfolio from "@/themes/template-1/sections/Portfolio";
import WorkingProcess from "@/themes/template-1/sections/WorkingProcess";
import Testimonials from "@/themes/template-1/sections/Testimonials";
import Team from "@/themes/template-1/sections/Team";
import Awards from "@/themes/template-1/sections/Awards";
import FAQ from "@/themes/template-1/sections/FAQ";
import Blog from "@/themes/template-1/sections/Blog";
import CTA from "@/themes/template-1/sections/CTA";
import Partners from "@/themes/template-1/sections/Partners";

export default function Template1Home({ data }: { data: ResolvedSiteData }) {
  return (
    <div
      className="theme-template-1 min-h-screen overflow-x-hidden bg-white text-[#001b3d]"
      style={data.variables as CSSProperties}
    >
      <Header data={data} />
      <main>
        {/* Section 1: Hero (Landing Banner) */}
        <Hero data={data} />
        
        {/* Section 2: Who We Are (About Us with handshaking plumber and overlapping sub-photo) */}
        <About data={data} />
        
        {/* Section 3: Why Choose Us (Sleek slanted layout with 6-grid features list) */}
        <WhyChooseUs data={data} />
        
        {/* Section 4: Our Services (Grid cards + Slanted plumber introducing the offerings) */}
        <Services data={data} />
        
        {/* Section 5: Our Portfolio (Featured Completed Works with 3-image dynamic grid and premium hover effects) */}
        <Portfolio data={data} />
        
        {/* Section 6: Standard Working Process (4-step zigzag circles) */}
        <WorkingProcess data={data} />
        
        {/* Section 7: Testimonials (What Our Clients Say carousel) */}
        <Testimonials data={data} />
        
        {/* Section 8: Meet Our Team */}
        <Team data={data} />
        
        {/* Section 9: Awards & Certifications */}
        <Awards data={data} />
        
        {/* Section 10: FAQ Accordion */}
        <FAQ data={data} />
        
        {/* Section 11: Latest Blogs */}
        <Blog data={data} />
        
        {/* Section 12: Emergency CTA Banner */}
        <CTA data={data} />
        
        {/* Section 13: Partners Logos (Suppliers and leading brands) */}
        <Partners data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}
