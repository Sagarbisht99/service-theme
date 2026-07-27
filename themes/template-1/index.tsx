import type { CSSProperties } from "react";
import type { ResolvedSiteData } from "@/lib/types";
import Header from "@/themes/template-1/Header";
import Footer from "@/themes/template-1/Footer";
import Hero from "@/themes/template-1/sections/Hero";
import Partners from "@/themes/template-1/sections/Partners";
import About from "@/themes/template-1/sections/About";
import Services from "@/themes/template-1/sections/Services";
import WhyChooseUs from "@/themes/template-1/sections/WhyChooseUs";
import WorkingProcess from "@/themes/template-1/sections/WorkingProcess";
import Portfolio from "@/themes/template-1/sections/Portfolio";
import Stats from "@/themes/template-1/sections/Stats";
import Testimonials from "@/themes/template-1/sections/Testimonials";
import Team from "@/themes/template-1/sections/Team";
import Awards from "@/themes/template-1/sections/Awards";
import FAQ from "@/themes/template-1/sections/FAQ";
import Blog from "@/themes/template-1/sections/Blog";
import CTA from "@/themes/template-1/sections/CTA";
import ContactSection from "@/themes/template-1/sections/ContactSection";

export default function Template1Home({ data }: { data: ResolvedSiteData }) {
  return (
    <div
      className="theme-template-1 min-h-screen overflow-x-hidden bg-white text-[#0a1f44]"
      style={data.variables as CSSProperties}
    >
      <Header data={data} />
      <main className="flex flex-col gap-0 [&>section]:scroll-mt-24">
        <Hero data={data} />
        <Partners data={data} />
        <About data={data} />
        <Services data={data} />
        <WhyChooseUs data={data} />
        <WorkingProcess data={data} />
        <Portfolio data={data} />
        <Stats data={data} />
        <Testimonials data={data} />
        <Team data={data} />
        <Awards data={data} />
        <FAQ data={data} />
        <Blog data={data} />
        <CTA data={data} />
        <ContactSection data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}
