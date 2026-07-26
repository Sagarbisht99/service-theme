"use client";

import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

// Custom pixel-perfect matching SVG icons for each of the 6 features
const WHY_ICONS = [
  // 1. EXPERIENCED PLUMBERS (Shield Check)
  <svg key="shield" className="h-6 w-6 text-[#9fd40b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 11 11 13 15 9" />
  </svg>,
  // 2. QUALITY WORKMANSHIP (Wrench)
  <svg key="wrench" className="h-6 w-6 text-[#9fd40b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // 3. 24/7 EMERGENCY SERVICE (Clock with 24h Badge Overlay)
  <svg key="clock" className="h-6 w-6 text-[#9fd40b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="10" cy="11" r="7" />
    <polyline points="10 7 10 11 13 13" />
    <rect x="13" y="13" width="9" height="8" rx="1.5" fill="#9fd40b" stroke="#9fd40b" strokeWidth="0.5" />
    <text x="17.5" y="18.5" textAnchor="middle" dominantBaseline="middle" className="font-extrabold text-[6.5px] fill-[#0a1f44] stroke-none">24</text>
  </svg>,
  // 4. CUSTOMER SATISFACTION (Thumbs Up)
  <svg key="thumbs-up" className="h-6 w-6 text-[#9fd40b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>,
  // 5. TRANSPARENT PRICING (Dollar Icon in Badge)
  <svg key="pricing" className="h-6 w-6 text-[#9fd40b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <path d="M16 10a2 2 0 0 0-2-2h-4a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4h-4a2 2 0 0 1-2-2" />
  </svg>,
  // 6. WIDE RANGE OF SERVICES (Home/Building)
  <svg key="services" className="h-6 w-6 text-[#9fd40b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
];

export default function WhyChooseUs({ data }: { data: ResolvedSiteData }) {
  const whyChooseUs = data.whyChooseUs as any;

  const pretitle = whyChooseUs.pretitle || "WHY CHOOSE US";
  const title = whyChooseUs.title || "Reliable Plumbing Solutions You Can Count On";
  const desc =
    whyChooseUs.desc ||
    "We are committed to providing high-quality plumbing services with honesty, integrity, and unmatched professionalism.";

  const items = whyChooseUs.whyChooseUsItems || [];

  // High-resolution background plumber picture
  const plumberImage =
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&q=80";

  return (
    <section className="relative bg-white py-14 overflow-hidden border-b border-gray-100">
      
      {/* Left Column Plumber Image — narrower so right content has breathing room */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[40vw] max-w-[520px] z-0">
        <div
          className="relative w-full h-full bg-gray-100 overflow-hidden"
          style={{ clipPath: "polygon(0 0, 100% 0, 58% 100%, 0 100%)" }}
        >
          <MediaImage
            themeId={data.themeId}
            src={plumberImage}
            alt="Expert plumber technician working on pipelines under a sink"
            fill
            className="object-cover object-[center_30%]"
            sizes="40vw"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Mobile/Tablet Fallback Image Card */}
          <div className="lg:hidden col-span-12 relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
            <MediaImage
              themeId={data.themeId}
              src={plumberImage}
              alt="Plumber working under sink"
              fill
              className="object-cover object-[center_30%]"
              sizes="100vw"
            />
          </div>

          {/* Right Column: breathing room from slant image */}
          <div className="lg:col-span-8 lg:col-start-5 lg:pl-8 xl:pl-12 text-left">
            
            {/* Tagline / Pretitle with small blue dash below */}
            <div className="flex flex-col items-start">
              <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-widest uppercase">
                {pretitle}
              </span>
              <span className="w-6 h-[3px] bg-[#0a1f44] mt-2 rounded-full" />
            </div>

            {/* Main Header with highlighted text */}
            <h2 className="mt-4 font-sans text-3xl sm:text-[2.25rem] font-extrabold leading-tight text-[#001b3d] tracking-tight">
              {title.includes("Count On") ? (
                <>
                  Reliable Plumbing Solutions
                  <br className="hidden sm:inline" />
                  You Can <span className="text-[#9fd40b]">Count On</span>
                </>
              ) : (
                title
              )}
            </h2>

            {/* Sub-paragraph */}
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-gray-500 max-w-xl">
              {desc}
            </p>

            {/* 2-Column Grid matching exactly the provided screenshots */}
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mt-9">
              {items.slice(0, 6).map((item: any, i: number) => {
                const icon = WHY_ICONS[i % WHY_ICONS.length];
                return (
                  <div key={item.title} className="flex gap-4 items-start">
                    
                    {/* Square Blue Icon Container (48px filled tile matching reference) */}
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0a1f44] text-[#9fd40b] shadow-md shadow-[#0a1f44]/15">
                      {icon}
                    </span>
                    
                    <div className="text-left">
                      <h4 className="text-[13.5px] sm:text-[14px] font-black text-[#001b3d] uppercase tracking-wide leading-tight">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-[12px] sm:text-[12.5px] leading-relaxed text-gray-400 font-medium max-w-[210px]">
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
    </section>
  );
}
