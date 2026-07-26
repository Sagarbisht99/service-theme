"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaWrench,
  FaClock,
  FaUserAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaCoins,
  FaArrowRight,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "service" as const;

// Icon map matching index for the 6 listings
const SERVICE_ICONS = [
  // Leak Detection & Repair
  <svg key="leak" viewBox="0 0 24 24" className="h-8 w-8 text-[#2563eb] fill-current" aria-hidden>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0zM12 20a6 6 0 1 0-4.24-10.24L12 14l4.24-4.24A6 6 0 0 0 12 20z" />
  </svg>,
  // Drain Cleaning Services
  <svg key="drain" viewBox="0 0 24 24" className="h-8 w-8 text-[#2563eb] fill-current" aria-hidden>
    <path d="M19 15v3c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3h14M12 2C8.13 2 5 5.13 5 9v4h14V9c0-3.87-3.13-7-7-7zm-1 8h-2V8h2v2zm4 0h-2V8h2v2z" />
  </svg>,
  // Water Heater Services
  <svg key="heater" viewBox="0 0 24 24" className="h-8 w-8 text-[#2563eb] fill-current" aria-hidden>
    <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12a10 10 0 0 1 10-10zm0 4a6 6 0 0 0-6 6c0 3.31 2.69 6 6 6s6-2.69 6-6a6 6 0 0 0-6-6zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  </svg>,
  // Toilet Installation & Repair
  <svg key="toilet" viewBox="0 0 24 24" className="h-8 w-8 text-[#2563eb] fill-current" aria-hidden>
    <path d="M4 4h10v4H4V4zm2 10h6v6H6v-6zm12-4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12zm-2 2v4c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4v-4h12z" />
  </svg>,
  // Pipe Installation & Replacement
  <svg key="pipe" viewBox="0 0 24 24" className="h-8 w-8 text-[#2563eb] fill-current" aria-hidden>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>,
  // General Plumbing Services
  <svg key="general" viewBox="0 0 24 24" className="h-8 w-8 text-[#2563eb] fill-current" aria-hidden>
    <path d="M22.7 19l-9.1-9.1c.9-2.1.4-4.7-1.5-6.3-2.3-1.9-5.7-1.8-7.8.4-2.2 2.1-2.4 5.5-.4 7.8 1.6 1.9 4.2 2.4 6.3 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2-2c.5-.3.5-1 0-1.4zM9.5 9.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
  </svg>,
];

const HIGHLIGHT_ICONS = [
  <FaShieldAlt key="shield" className="text-lg" />,
  <FaUserAlt key="user" className="text-lg" />,
  <FaClock key="clock" className="text-lg" />,
  <FaCoins key="coins" className="text-lg" />,
];

export default function Services({ data }: { data: ResolvedSiteData }) {
  const properties = data.properties as any;
  const plumberWorkingImage = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80";

  const listings = properties.listings || [];
  const highlights = properties.highlights || [];
  const trustHighlights = properties.trustHighlights || [];

  return (
    <section className="bg-white py-10 overflow-hidden border-b border-gray-100/50">
      {/* Curved clip-path SVG definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="service-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.25, 0 C 0.12, 0.25, 0.04, 0.75, 0.25, 1 L 1, 1 L 1, 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        
        {/* UPPER PART: Introduction Header + Slanted Plumber Image */}
        <div className="grid gap-12 lg:grid-cols-12 items-center mb-10">
          {/* Left Column: Text & CTA Row */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/10 text-[#2563eb]">
                <FaWrench className="text-[10px]" />
              </span>
              <span className="text-[13px] sm:text-[14px] font-extrabold text-[#2563eb] tracking-wider uppercase">
                OUR SERVICES
              </span>
              <span className="w-16 h-[2.5px] bg-[#9fd40b] rounded-full" />
            </div>

            {/* Main Header */}
            <h2 className="mt-5 font-sans text-3xl md:text-[2.25rem] font-extrabold leading-tight text-[#001b3d] tracking-tight">
              Professional Plumbing{" "}
              <span className="text-[#2563eb] block mt-1.5">Services You Can Trust</span>
            </h2>

            {/* Sub-paragraph */}
            <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#001b3d]/65 max-w-2xl">
              {properties.description}
            </p>

            {/* Bullet points row */}
            {highlights.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.slice(0, 4).map((h: any, i: number) => (
                  <div key={h.label} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/10 text-[#2563eb]">
                      <FaShieldAlt className="text-xs" />
                    </span>
                    <span className="text-[13px] sm:text-[14px] font-extrabold text-[#001b3d]">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Call to action buttons row */}
            <div className="flex flex-wrap items-center gap-5 mt-10">
              <Link
                href={withTheme("/contact", THEME)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0c53db] px-7 py-4 text-[13.5px] font-extrabold text-white shadow-[0_10px_24px_rgba(12,83,219,0.3)] transition hover:bg-[#0b48c2] hover:scale-[1.02]"
              >
                <FaWrench className="text-xs" aria-hidden />
                BOOK A SERVICE
              </Link>

              {/* Phone info badge */}
              <div className="inline-flex items-center gap-3.5 rounded-full border-2 border-gray-200/60 bg-white px-5.5 py-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563eb]/10 text-[#2563eb]">
                  <FaPhoneAlt className="text-xs" />
                </span>
                <div className="leading-tight text-left">
                  <span className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
                    Need Help? Call Us
                  </span>
                  <span className="block text-[14px] sm:text-[15px] font-extrabold text-[#001b3d]">
                    +91 98766 54321
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Plumber Image with Slanted curve & Blue Badge */}
          <div className="lg:col-span-5 relative w-full h-[300px] md:h-[380px]">
            {/* Clipped image wrapper */}
            <div
              className="absolute inset-0 overflow-hidden bg-[#dfe7f2]"
              style={{ clipPath: "url(#service-curve)" }}
            >
              <MediaImage
                themeId={data.themeId}
                src={plumberWorkingImage}
                alt="Expert plumber working under kitchen sink"
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Absolute matching SVG outline stroke */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 25,0 C 12,25 4,75 25,100"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Overlapping Blue Banner (24/7 Emergency Service) */}
            <div className="absolute bottom-6 left-6 right-6 sm:-left-4 sm:right-6 z-20 bg-[#0c53db] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3.5 border border-white/10">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#9fd40b]/15 text-[#9fd40b] border border-[#9fd40b]/30">
                <FaClock className="text-base" aria-hidden />
              </span>
              <div className="text-left">
                <h4 className="text-[14px] font-extrabold text-white">
                  24/7 Emergency Service
                </h4>
                <p className="mt-0.5 text-[11px] leading-snug text-white/80">
                  We are available anytime you need us!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER PART: Heading "Reliable Plumbing Solutions" + 6 Column Grid of Cards */}
        <div className="border-t border-gray-100/80 pt-10">
          
          {/* Centered Services Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#9fd40b] rounded-full" />
              <span className="text-[13px] sm:text-[14px] font-extrabold text-[#2563eb] tracking-wider uppercase flex items-center gap-1.5">
                <FaWrench className="text-[10px]" /> OUR SERVICES
              </span>
              <span className="w-8 h-[1.5px] bg-[#9fd40b] rounded-full" />
            </div>
            <h3 className="mt-3 font-sans text-3xl md:text-[2.25rem] font-extrabold text-[#001b3d] tracking-tight">
              Reliable <span className="text-[#2563eb]">Plumbing</span> Solutions
            </h3>
          </div>

          {/* 6 Column Horizontal Grid / Row Cards */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 mb-8">
            {listings.slice(0, 6).map((item: any, i: number) => {
              const icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <div
                  key={item.title}
                  className="group bg-white border border-gray-100/90 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300 hover:border-[#2563eb]/20 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(12,83,219,0.04)] text-center flex flex-col items-center justify-between min-h-[290px]"
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Soft Blue Circle Icon Wrapper */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50/70 border border-blue-100/30 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 mb-5 text-[#2563eb]">
                      {icon}
                    </div>

                    {/* Card Title */}
                    <h4 className="font-sans text-[14px] font-extrabold text-[#001b3d] tracking-tight group-hover:text-[#2563eb] transition duration-300 leading-snug">
                      {item.title}
                    </h4>

                    {/* Card Description */}
                    <p className="mt-2.5 text-[11px] sm:text-[11.5px] leading-relaxed text-gray-400/95 font-medium max-w-[140px]">
                      {item.description}
                    </p>
                  </div>

                  {/* LEARN MORE -> Text Link */}
                  <Link
                    href={withTheme(`/properties/${item.slug}`, THEME)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#2563eb]/90 tracking-wider uppercase mt-5 group-hover:text-[#0c53db]"
                  >
                    LEARN MORE
                    <FaArrowRight className="text-[8px]" aria-hidden />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Stat/Features Bar */}
          {trustHighlights.length > 0 && (
            <div className="w-full overflow-hidden rounded-2xl bg-[#f4f7fb] border border-gray-100/60 p-6 md:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.01)]">
              <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
                {trustHighlights.slice(0, 4).map((item: any, i: number) => {
                  const icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                  return (
                    <div
                      key={item.title}
                      className={[
                        "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 px-3",
                        i < 2 ? "border-b border-gray-200/10 lg:border-b-0" : "",
                        i % 2 === 0 ? "border-r border-gray-200/40" : "",
                        i < 3 ? "lg:border-r lg:border-gray-200/50" : "lg:border-r-0",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {/* Rounded blue outline circle containing icon */}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#2563eb] border border-gray-200/55 shadow-sm">
                        {icon}
                      </span>
                      <div>
                        <h5 className="text-[14px] font-extrabold text-[#001b3d] leading-tight">
                          {item.title}
                        </h5>
                        <p className="mt-1 text-[11.5px] leading-snug text-gray-400 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
