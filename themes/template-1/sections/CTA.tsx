"use client";

import { FaPhoneAlt, FaHardHat } from "react-icons/fa";
import type { ResolvedSiteData } from "@/lib/types";

export default function CTA({ data }: { data: ResolvedSiteData }) {
  const contact = data.contactInfo as any;
  const cta = contact?.cta || {};

  const title = cta.title || "Need Emergency Plumbing Service?";
  const desc =
    cta.desc || "We're available 24/7 to solve your plumbing problems.";
  const phone = cta.phone || "+91 98765 432210";
  const phoneHref = cta.phoneHref || `tel:${phone.replace(/\s/g, "")}`;
  const buttonLabel = cta.buttonLabel || "Call Now";

  return (
    <section className="relative bg-white py-10 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[1.75rem] bg-[#0a1f44] px-6 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-10">
          
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0a1f44] shadow-md">
              <FaHardHat className="text-xl" aria-hidden />
            </span>
            <div>
              <h3 className="font-sans text-[18px] sm:text-[20px] md:text-[22px] font-extrabold text-white leading-tight tracking-tight">
                {title}
              </h3>
              <p className="mt-1.5 text-[13px] sm:text-[14px] font-medium text-white/85 leading-snug">
                {desc}
              </p>
            </div>
          </div>

          {/* Right: Call button */}
          <a
            href={phoneHref}
            className="inline-flex shrink-0 items-center justify-center gap-2.5 self-start rounded-full bg-[#9fd40b] px-6 py-3.5 text-[13.5px] sm:text-[14px] font-extrabold text-[#0a1f44] shadow-md transition hover:scale-[1.02] hover:bg-[#8fc00a] md:self-auto"
          >
            <FaPhoneAlt className="text-xs" aria-hidden />
            {buttonLabel}: {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
