"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaClock,
  FaHeadset,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "service" as const;

// Map the icons dynamically based on index
const STAT_ICONS = [FaCalendarAlt, FaUsers, FaAward];
const FEATURE_ICONS = [FaShieldAlt, FaHeadset, FaClock, FaAward];

export default function About({ data }: { data: ResolvedSiteData }) {
  const about = data.about as any;

  // Fallback high-quality image if not defined
  const plumberKitchenImage =
    about.sideImage ||
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80";

  const stats = about.stats || [
    { stat: "18+", label: "Year Experience" },
    { stat: "4.3K+", label: "Happy Clients" },
    { stat: "25+", label: "Qualified Experts" },
  ];

  const features = about.features || [
    { title: "Quality Workmanship", desc: "We deliver reliable and long-lasting solutions." },
    { title: "Customer First", desc: "Your satisfaction is our top priority." },
    { title: "On-Time Service", desc: "We value your time and always deliver on schedule." },
    { title: "Expert Team", desc: "Skilled professionals with years of experience." },
  ];

  const badge = about.badge || {
    title: "Trusted by Thousands",
    desc: "Delivering reliable service with complete satisfaction.",
  };

  return (
    <section className="relative bg-[#f8fafd] pt-[85px] pb-10 overflow-hidden">
      {/* Centered Top Header */}
      <div className="mx-auto max-w-[1280px] px-4 text-center mb-8">
        <div className="inline-flex flex-col items-center">
          <p className="text-[13px] sm:text-[14px] font-extrabold text-[#2563eb] tracking-wider uppercase">
            {about.pretitle || "Welcome to Aquafix"}
          </p>
          <span className="w-16 h-[3px] bg-[#9fd40b] mt-1.5 rounded-full" />
        </div>
        <h2 className="mt-5 font-sans text-3xl md:text-[2.25rem] font-extrabold leading-tight text-[#001b3d] tracking-tight max-w-4xl mx-auto">
          {about.title}
        </h2>
      </div>

      {/* Main Grid: Image + Description */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 items-center">
        {/* Left Side: Images & Shapes */}
        <div className="relative lg:col-span-6 flex items-center justify-center">
          {/* Decorative Dot Grid */}
          <div className="absolute -top-6 -left-6 z-0 text-blue-100 opacity-60">
            <svg width="100" height="100" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" />
              </pattern>
              <rect width="100" height="100" fill="url(#dot-grid)" />
            </svg>
          </div>

          {/* Decorative Solid Blue Frame Underneath */}
          <div className="absolute -bottom-4 -left-4 w-[75%] h-[80%] bg-[#001b3d] rounded-bl-[4rem] rounded-tl-[1.5rem] rounded-br-[1.5rem] z-0" />

          {/* Main Photo Wrapper */}
          <div className="relative z-10 overflow-hidden w-full max-w-[500px] h-[340px] sm:h-[420px] rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] shadow-xl border-4 border-white bg-white">
            <MediaImage
              themeId={data.themeId}
              src={plumberKitchenImage}
              alt="AquaFix plumbing expert talking to customer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bottom Overlay Card: "Trusted by Thousands" (Centered perfectly at Bottom Edge) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 bg-[#0c53db] text-white p-4.5 rounded-2xl w-[90%] max-w-[325px] shadow-[0_20px_50px_rgba(12,83,219,0.3)] flex items-center gap-4 border border-white/15">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#9fd40b] text-white shadow-lg shadow-[#9fd40b]/30">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white fill-current" aria-hidden>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM10 14.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" />
              </svg>
            </span>
            <div className="text-left">
              <h4 className="text-[15px] font-extrabold text-white leading-tight">
                {badge.title}
              </h4>
              <p className="mt-1 text-[11.5px] leading-snug text-white/85">
                {badge.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative z-10 lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-extrabold text-[#2563eb] tracking-wider uppercase">
              Who We Are
            </span>
            <span className="w-16 h-[2.5px] bg-[#9fd40b]" />
          </div>

          <h3 className="mt-4 font-sans text-3xl font-extrabold text-[#001b3d] leading-tight tracking-tight">
            {about.subtitle || "We focus on customer satisfaction and quality"}
          </h3>

          <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-[#001b3d]/65">
            {about.desc}
          </p>

          {/* 3 Stat Cards in a row (Even Bigger Icons & Circle Wrappers) */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {stats.slice(0, 3).map((item: any, i: number) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div
                  key={item.label}
                  className="bg-white border border-[#e2e8f0]/50 rounded-2xl p-5 shadow-[0_10px_35px_rgba(0,0,0,0.02)] flex flex-col items-start"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[#2563eb] mb-4 border border-blue-100/40 shadow-sm">
                    <Icon className="text-[25px]" aria-hidden />
                  </span>
                  <span className="text-[24px] sm:text-[28px] font-extrabold text-[#001b3d] leading-none">
                    {item.stat}
                  </span>
                  <span className="text-[13px] font-extrabold text-gray-500 leading-tight mt-2">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* About Us Pill-Button */}
          <Link
            href={withTheme("/about", THEME)}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#001b3d]/15 bg-transparent px-7 py-3.5 text-xs font-extrabold text-[#001b3d] transition hover:border-[#001b3d]/30 hover:bg-[#001b3d]/[0.02] mt-6"
          >
            About Us
            <FaArrowRight className="text-[10px]" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Bottom Trust/Feature Bar Container */}
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8 mt-12">
        <div className="w-full overflow-hidden rounded-[1.75rem] bg-white border border-gray-100/90 p-8 md:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.03)]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.slice(0, 4).map((item: any, i: number) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-5.5 sm:border-l sm:border-gray-100 sm:first:border-l-0 sm:pl-6 lg:pl-8 lg:first:pl-0"
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#2563eb] border border-blue-100/50 shadow-md">
                    <Icon className="text-[32px] md:text-[35px]" aria-hidden />
                  </span>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#001b3d] leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] font-medium leading-snug text-gray-500 max-w-[200px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
