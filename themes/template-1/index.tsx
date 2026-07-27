import type { CSSProperties } from "react";
import type { ResolvedSiteData } from "@/lib/types";
import Header from "@/themes/template-1/Header";
import Footer from "@/themes/template-1/Footer";
import Hero from "@/themes/template-1/sections/Hero";
import About from "@/themes/template-1/sections/About";
import Partners from "@/themes/template-1/sections/Partners";
import Services from "@/themes/template-1/sections/Services";
import ServiceInfoBar from "@/themes/template-1/sections/ServiceInfoBar";
import WhyChooseUs from "@/themes/template-1/sections/WhyChooseUs";
import WorkingProcess from "@/themes/template-1/sections/WorkingProcess";
import Team from "@/themes/template-1/sections/Team";
import ServiceIconGrid from "@/themes/template-1/sections/ServiceIconGrid";
import Testimonials from "@/themes/template-1/sections/Testimonials";
import FAQ from "@/themes/template-1/sections/FAQ";
import ContactSection from "@/themes/template-1/sections/ContactSection";

export default function Template1Home({ data }: { data: ResolvedSiteData }) {
  return (
    <div
      className="theme-template-1 min-h-screen overflow-x-hidden bg-white text-[#001b3d]"
      style={data.variables as CSSProperties}
    >
      <Header data={data} />
      <main>
        {/* Section 1: Hero */}
        <Hero data={data} />

        {/* Section 2: About Us / Who We Are */}
        <About data={data} />

        {/* Section 3: Partner Logos */}
        <Partners data={data} />

        {/* Section 4: Featured Services Grid */}
        <Services data={data} />

        {/* Section 5: Navy Info Bar (service categories) */}
        <ServiceInfoBar data={data} />

        {/* Section 6: Why Choose Us */}
        <WhyChooseUs data={data} />

        {/* Section 7: How It Works */}
        <WorkingProcess data={data} />

        {/* Section 8: Meet Our Team */}
        <Team data={data} />

        {/* Section 9: Detailed Service Icon Grid */}
        <ServiceIconGrid data={data} />

        {/* Section 10: Testimonials */}
        <Testimonials data={data} />

        {/* Section 11: FAQ Accordion */}
        <FAQ data={data} />

        {/* Section 12: Contact / Booking Form */}
        <ContactSection data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}
