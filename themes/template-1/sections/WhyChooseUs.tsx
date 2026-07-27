"use client";

import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

const WHY_ICONS = [
  // 1. EXPERIENCED PLUMBERS
  <svg key="shield" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 11 11 13 15 9" />
  </svg>,
  // 2. QUALITY WORKMANSHIP
  <svg key="wrench" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // 3. 24/7 EMERGENCY SERVICE
  <svg key="clock" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>,
  // 4. CUSTOMER SATISFACTION
  <svg key="thumbs-up" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>,
  // 5. TRANSPARENT PRICING
  <svg key="pricing" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <path d="M15 10a2 2 0 0 0-2-2h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2" />
  </svg>,
  // 6. WIDE RANGE OF SERVICES
  <svg key="services" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
];

export default function WhyChooseUs({ data }: { data: ResolvedSiteData }) {
  const whyChooseUs = (data?.whyChooseUs as any) || {};

  const pretitle = whyChooseUs.pretitle || "WHY CHOOSE US";
  const title = whyChooseUs.title || "Reliable Plumbing Solutions You Can Count On";
  const desc =
    whyChooseUs.desc ||
    "We are committed to providing high-quality plumbing services with honesty, integrity, and unmatched professionalism.";

  const items = whyChooseUs.whyChooseUsItems || [
    {
      title: "EXPERIENCED PLUMBERS",
      desc: "Our licensed plumbers bring years of experience to every job.",
    },
    {
      title: "QUALITY WORKMANSHIP",
      desc: "We use advanced tools and techniques to ensure long-lasting results.",
    },
    {
      title: "24/7 EMERGENCY SERVICE",
      desc: "We're available around the clock to handle your plumbing emergencies.",
    },
    {
      title: "CUSTOMER SATISFACTION",
      desc: "Our priority is your satisfaction and peace of mind.",
    },
    {
      title: "TRANSPARENT PRICING",
      desc: "No hidden costs – just honest and affordable pricing.",
    },
    {
      title: "WIDE RANGE OF SERVICES",
      desc: "From minor leaks to major installations, we do it all.",
    },
  ];

  const plumberImage =
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&q=80";

  return (
    <section className="relative bg-[#f8fafc] py-10 md:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Wrapper */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
          
          {/* Slanted Left Image (Matching Wireframe Cut: Wide Top -> Narrow Bottom) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[55%] z-0">
            <div
              className="relative w-full h-full bg-slate-100 overflow-hidden"
              style={{
                /* Wireframe slant: Top-right width ~82%, Bottom-left slant ends near ~45% */
                clipPath: "polygon(0 0, 82% 0, 45% 100%, 0 100%)",
              }}
            >
              <MediaImage
                themeId={data?.themeId}
                src={plumberImage}
                alt="Plumber technician working"
                fill
                className="object-cover object-[center_30%]"
                sizes="55vw"
                priority
              />
            </div>
          </div>

          {/* Inner Content Grid */}
          <div className="relative z-10 grid grid-cols-12 items-center min-h-[520px]">
            
            {/* Mobile Fallback Image */}
            <div className="lg:hidden col-span-12 relative w-full h-[280px] sm:h-[360px] bg-slate-100">
              <MediaImage
                themeId={data?.themeId}
                src={plumberImage}
                alt="Plumber working"
                fill
                className="object-cover object-[center_30%]"
                sizes="100vw"
              />
            </div>

            {/* Right Side Content Container */}
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 p-6 sm:p-10 lg:p-12 lg:pl-4 text-left">
              
              {/* Tagline / Pretitle */}
              <div className="flex flex-col items-start">
                <span className="text-[13px] font-extrabold text-[#1d6feb] tracking-wider uppercase">
                  {pretitle}
                </span>
                <span className="w-6 h-[2px] bg-[#1d6feb] mt-1.5 rounded-full" />
              </div>

              {/* Main Heading */}
              <h2 className="mt-4 text-2xl sm:text-[2.2rem] lg:text-[2.4rem] font-extrabold leading-[1.2] text-[#0b1938] tracking-tight">
                {title.includes("Count On") ? (
                  <>
                    Reliable Plumbing Solutions
                    <br className="hidden sm:inline" />
                    You Can <span className="text-[#1d6feb]">Count On</span>
                  </>
                ) : (
                  title
                )}
              </h2>

              {/* Description Paragraph */}
              <p className="mt-3.5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-500 max-w-xl">
                {desc}
              </p>

              {/* Divider */}
              <div className="mt-7 border-t border-slate-100 w-full" />

              {/* 2-Column Features Grid */}
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 mt-7">
                {items.slice(0, 6).map((item: any, i: number) => {
                  const icon = WHY_ICONS[i % WHY_ICONS.length];
                  return (
                    <div key={item.title || i} className="flex gap-3.5 items-start">
                      
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1d6feb] text-white shadow-sm">
                        {icon}
                      </span>
                      
                      <div className="text-left">
                        <h4 className="text-[13px] font-bold text-[#0b1938] uppercase tracking-wide leading-tight">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[11.5px] leading-relaxed text-slate-400 font-normal max-w-[210px]">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}