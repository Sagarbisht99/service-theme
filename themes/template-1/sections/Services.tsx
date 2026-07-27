"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaClock,
  FaFireAlt,
  FaPhoneAlt,
  FaSink,
  FaToilet,
  FaTools,
  FaWrench,
} from "react-icons/fa";
import { FaFaucetDrip } from "react-icons/fa6";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;
const ACCENT = "#1052E0";

const SERVICE_ICONS = [
  FaFaucetDrip, // Faucet & Leak Repairs
  FaSink, // Drain Cleaning
  FaFireAlt, // Water Heater
  FaToilet, // Toilet Installation & Repair
  FaWrench, // Pipe Installation
  FaTools, // General Plumbing
] as const;

export default function Services({ data }: { data: ResolvedSiteData }) {
  const properties = data.properties;
  const listings = properties.listings?.slice(0, 6) ?? [];
  const contactCta = (data.contactInfo as { cta?: { phone?: string; phoneHref?: string } })?.cta;
  const phone = contactCta?.phone || "+91 98766 54321";
  const phoneHref = contactCta?.phoneHref || `tel:${phone.replace(/\s/g, "")}`;

  const pretitle = "OUR SERVICES";
  const title = properties.subtitle || properties.title || "Our Plumbing Services";
  const desc =
    properties.description ||
    "We provide reliable and professional plumbing solutions to keep your home or business running smoothly.";

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Subtitle with Dots and Lines */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1.5px] w-12 bg-[#8FAEEF]" aria-hidden="true" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#1052E0]" aria-hidden="true" />
            <span
              className="px-1 text-[13px] font-bold uppercase tracking-wider"
              style={{ color: ACCENT }}
            >
              {pretitle}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#1052E0]" aria-hidden="true" />
            <span className="h-[1.5px] w-12 bg-[#8FAEEF]" aria-hidden="true" />
          </div>

          {/* Main Title */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-[2.6rem]">
            {title.includes("Plumbing") ? (
              <>
                {title.split("Plumbing")[0]}
                <span style={{ color: ACCENT }}>Plumbing</span>
                {title.split("Plumbing")[1]}
              </>
            ) : (
              title
            )}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-[#6B7280]">
            {desc}
          </p>

          {/* Underline Indicator */}
          <div
            className="mx-auto mt-4 h-[3px] w-10 rounded-full"
            style={{ backgroundColor: ACCENT }}
            aria-hidden="true"
          />
        </div>

        {/* 3 × 2 service cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item, i) => {
            const href = item.slug
              ? withTheme(`/services/${item.slug}`, THEME)
              : withTheme("/services", THEME);
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];

            return (
              <Link
                key={item.slug || item.title}
                href={href}
                className="group flex overflow-hidden rounded-2xl border border-[#EEF2F6] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#1052E0]/20 hover:shadow-xl hover:shadow-[#1052E0]/5"
              >
                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-5 pr-3">
                  <div>
                    {/* Circle Icon Container */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF2FF]"
                      style={{ color: ACCENT }}
                    >
                      <Icon className="text-xl" aria-hidden />
                    </div>

                    {/* Card Title */}
                    <h3 className="mt-4 text-[15px] font-bold leading-snug text-[#1E293B]">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-2 text-[12.5px] leading-relaxed text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right Side Image Box */}
                <div className="relative w-[45%] shrink-0 overflow-hidden rounded-r-2xl">
                  <MediaImage
                    themeId={data.themeId}
                    src={item.image}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 200px"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-[#F0F5FF] px-6 py-4 sm:flex-row sm:items-center lg:px-8">
          {/* Call Box */}
          <a href={phoneHref} className="flex items-center gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md shadow-[#1052E0]/20"
              style={{ backgroundColor: ACCENT }}
            >
              <FaPhoneAlt className="text-base" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-[12px] font-medium text-[#64748B]">
                Need Help? Call Us
              </span>
              <span className="block text-[17px] font-black tracking-tight text-[#0F172A]">
                {phone}
              </span>
            </span>
          </a>

          {/* 24/7 Service Box */}
          <div className="flex items-center gap-4 sm:border-l sm:border-[#CBD5E1]/60 sm:pl-6 lg:pl-8">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md shadow-[#1052E0]/20"
              style={{ backgroundColor: ACCENT }}
            >
              <FaClock className="text-xl" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-[14px] font-bold text-[#0F172A]">
                24/7 Emergency Service
              </span>
              <span className="block text-[12px] font-normal text-[#64748B]">
                We are available anytime you need us!
              </span>
            </span>
          </div>

          {/* Book Button */}
          <Link
            href={withTheme("/contact", THEME)}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-[#1052E0]/25 sm:shrink-0"
            style={{ backgroundColor: ACCENT }}
          >
            Book a Service
            <FaArrowRight className="text-[12px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}