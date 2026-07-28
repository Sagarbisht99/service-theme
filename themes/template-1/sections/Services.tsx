"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaClock,
  FaPhoneAlt,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;
const ACCENT = "#1052E0";
const NAVY = "#0a1f44";
const LIME = "#9fd40b";

export default function Services({ data }: { data: ResolvedSiteData }) {
  const properties = data.properties;
  const listings = properties.listings?.slice(0, 6) ?? [];
  const contactCta = data.contactInfo?.cta;
  const phone =
    contactCta?.phone || data.topbar.phone || data.footer.footerContact?.phone || "";
  const phoneHref =
    contactCta?.phoneHref ||
    data.footer.callLink ||
    (phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "#");

  const pretitle = properties.sectionTitle || properties.infoTitle || "";
  const title = properties.subtitle || properties.title || "";
  const desc = properties.description || "";

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1.5px] w-12 bg-[#dbe7f6]" aria-hidden="true" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#1052E0]" aria-hidden="true" />
            <span
              className="px-1 text-[13px] font-bold uppercase tracking-wider"
              style={{ color: ACCENT }}
            >
              {pretitle}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#1052E0]" aria-hidden="true" />
            <span className="h-[1.5px] w-12 bg-[#dbe7f6]" aria-hidden="true" />
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0a1f44] sm:text-4xl md:text-[2.6rem]">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-[#6B7280]">
            {desc}
          </p>

          <div
            className="mx-auto mt-4 h-[3px] w-10 rounded-full"
            style={{ backgroundColor: LIME }}
            aria-hidden="true"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => {
            const href = item.slug
              ? withTheme(`/services/${item.slug}`, THEME)
              : withTheme("/services", THEME);
            const category = item.subtitle || item.category || "Service";
            const price = item.price || properties.startingPrice;

            return (
              <Link
                key={item.slug || item.title}
                href={href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8edf4] bg-white shadow-[0_8px_28px_rgba(10,31,68,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#1052E0]/25 hover:shadow-[0_16px_40px_rgba(16,82,224,0.12)]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#eef2f7]">
                  <MediaImage
                    themeId={data.themeId}
                    src={item.image}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a1f44]/55 via-[#0a1f44]/15 to-transparent"
                    aria-hidden
                  />

                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0a1f44] shadow-sm backdrop-blur">
                    {category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5">
                  <span
                    className="mb-3 block h-1 w-10 rounded-full"
                    style={{ backgroundColor: LIME }}
                    aria-hidden
                  />
                  <h3
                    className="text-[15px] font-extrabold leading-snug sm:text-[16px]"
                    style={{ color: NAVY }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-2 flex-1 text-[13px] leading-relaxed text-[#64748b]">
                    {item.description || item.infoTitle}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eef2f7] pt-4">
                    {price ? (
                      <span className="text-[13px] font-extrabold text-[#1052E0]">
                        {price}
                      </span>
                    ) : (
                      <span className="text-[12px] font-semibold text-[#94a3b8]">
                        {item.statusText || "Available"}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-extrabold text-[#0a1f44] transition group-hover:gap-2.5 group-hover:text-[#1052E0]">
                      View details
                      <FaArrowRight className="text-[10px]" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-[#eef5ff] px-6 py-4 sm:flex-row sm:items-center lg:px-8">
          {phone && (
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
          )}

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
