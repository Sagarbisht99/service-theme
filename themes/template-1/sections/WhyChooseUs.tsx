"use client";

import type { ReactNode } from "react";
import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData, WhyChooseUsItemData } from "@/lib/types";

const ACCENT = "#1052E0";

const WHY_ICONS = [
  // EXPERIENCED PLUMBERS
  <svg key="shield" className="h-[18px] w-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>,
  // QUALITY WORKMANSHIP
  <svg key="wrench" className="h-[18px] w-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // 24/7 EMERGENCY SERVICE
  <svg key="clock24" className="h-[18px] w-[18px] text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M18.5 5.2a9 9 0 0 1 1.7 4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20.8 5.8l-.1 3.2-3-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <text x="12" y="15.2" textAnchor="middle" fill="currentColor" fontSize="7.5" fontWeight="700" fontFamily="system-ui,sans-serif">
      24
    </text>
  </svg>,
  // CUSTOMER SATISFACTION
  <svg key="thumbs-up" className="h-[18px] w-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>,
  // TRANSPARENT PRICING
  <svg key="pricing" className="h-[18px] w-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
  // WIDE RANGE OF SERVICES
  <svg key="services" className="h-[18px] w-[18px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
];

const DEFAULT_ITEMS: WhyChooseUsItemData[] = [
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

export default function WhyChooseUs({ data }: { data: ResolvedSiteData }) {
  const whyChooseUs = data?.whyChooseUs;

  const pretitle = whyChooseUs?.pretitle || "WHY CHOOSE US";
  const title = whyChooseUs?.title || "Reliable Plumbing Solutions You Can Count On";
  const desc =
    whyChooseUs?.desc ||
    "We are committed to providing high-quality plumbing services with honesty, integrity, and unmatched professionalism.";
  const items = whyChooseUs?.whyChooseUsItems?.length
    ? whyChooseUs.whyChooseUsItems
    : DEFAULT_ITEMS;

  const plumberImage =
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&q=85";

  const renderTitle = () => {
    if (title.includes("Count On")) {
      const [before] = title.split("Count On");
      return (
        <>
          {before}
          <span style={{ color: ACCENT }}>Count On</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative bg-white">
      <div className="relative mx-auto w-full overflow-hidden">
        {/* Desktop: full-bleed split with diagonal white overlay */}
        <div className="relative hidden min-h-135 lg:block lg:min-h-145">
          {/* Photo — left side */}
          <div className="absolute inset-y-0 left-0 w-[48%]">
            <MediaImage
              themeId={data?.themeId}
              src={plumberImage}
              alt="Licensed plumber working under a sink"
              fill
              className="object-cover object-[28%_center]"
              sizes="48vw"
              priority
            />
          </div>

          {/* White content panel with diagonal left edge (wide photo top → narrow bottom) */}
          <div
            className="absolute inset-y-0 right-0 flex w-[72%] items-center bg-white"
            style={{
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className="w-full py-14 pl-[22%] pr-12 xl:pr-16">
              <WhyChooseContent
                pretitle={pretitle}
                title={renderTitle()}
                desc={desc}
                items={items}
              />
            </div>
          </div>
        </div>

        {/* Mobile / tablet stacked layout */}
        <div className="lg:hidden">
          <div className="relative h-64 w-full sm:h-80">
            <MediaImage
              themeId={data?.themeId}
              src={plumberImage}
              alt="Licensed plumber working under a sink"
              fill
              className="object-cover object-[30%_center]"
              sizes="100vw"
            />
          </div>
          <div className="bg-white py-10 sm:py-12">
            <WhyChooseContent
              pretitle={pretitle}
              title={renderTitle()}
              desc={desc}
              items={items}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseContent({
  pretitle,
  title,
  desc,
  items,
}: {
  pretitle: string;
  title: ReactNode;
  desc: string;
  items: WhyChooseUsItemData[];
}) {
  return (
    <div className="w-full max-w-xl lg:max-w-none">
      <div className="flex items-center gap-3">
        <span
          className="h-[2px] w-7 shrink-0"
          style={{ backgroundColor: ACCENT }}
          aria-hidden="true"
        />
        <span
          className="text-[12px] font-bold uppercase tracking-[0.14em] sm:text-[13px]"
          style={{ color: ACCENT }}
        >
          {pretitle}
        </span>
      </div>

      <h2 className="mt-3 text-[1.65rem] font-extrabold leading-[1.22] tracking-tight text-[#0b1938] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.35rem]">
        {title}
      </h2>

      <p className="mt-3.5 max-w-lg text-[13.5px] leading-relaxed text-[#6b7280] sm:text-[14.5px]">
        {desc}
      </p>

      <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 sm:mt-9 sm:gap-y-8">
        {items.slice(0, 6).map((item, i) => (
          <div key={item.title || i} className="flex items-start gap-3.5">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] text-white sm:h-11 sm:w-11"
              style={{ backgroundColor: ACCENT }}
            >
              {WHY_ICONS[i % WHY_ICONS.length]}
            </span>
            <div className="min-w-0 pt-0.5">
              <h4 className="text-[12px] font-bold uppercase leading-snug tracking-[0.04em] text-[#0b1938] sm:text-[12.5px]">
                {item.title}
              </h4>
              <p className="mt-1 text-[12px] leading-relaxed text-[#8b93a7] sm:text-[12.5px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
