"use client";

import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import type { ResolvedSiteData } from "@/lib/types";

const ACCENT = "#1052E0";
const NAVY = "#0a1f44";

const ICON_BY_LABEL: Record<string, IconType> = {
  phone: FaPhoneAlt,
  call: FaPhoneAlt,
  whatsapp: FaPhoneAlt,
  email: FaEnvelope,
  mail: FaEnvelope,
  address: FaMapMarkerAlt,
  visit: FaMapMarkerAlt,
  location: FaMapMarkerAlt,
  hours: FaClock,
  working: FaClock,
};

function resolveIcon(label: string): IconType {
  const key = label.toLowerCase();
  const match = Object.keys(ICON_BY_LABEL).find((k) => key.includes(k));
  return match ? ICON_BY_LABEL[match] : FaMapMarkerAlt;
}

export default function ContactSection({ data }: { data: ResolvedSiteData }) {
  const contact = data.contactInfo;
  if (!contact) return null;

  const pretitle = contact.pretitle || "CONTACT US";
  const title = contact.title || "Get in Touch";
  const items = contact.items || [];
  const mapUrl =
    contact.mapEmbedUrl ||
    "https://www.google.com/maps?q=Blue+City+India&output=embed";

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-310 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left — heading + brand mark */}
          <div className="lg:col-span-2">
            <p
              className="text-[12px] font-bold uppercase tracking-[0.14em] sm:text-[13px]"
              style={{ color: ACCENT }}
            >
              {pretitle}
            </p>
            <h2 className="mt-2 text-[1.85rem] font-extrabold leading-tight tracking-tight text-[#1e293b] sm:text-[2.15rem]">
              {title}
            </h2>

          
          </div>

          {/* Middle — contact list */}
          <div className="lg:col-span-3">
            <ul className="flex flex-col gap-6">
              {items.map((item) => {
                const Icon = resolveIcon(item.label);
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] bg-white"
                      style={{ borderColor: ACCENT, color: ACCENT }}
                    >
                      <Icon className="text-[15px]" aria-hidden />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p
                        className="text-[14px] font-bold leading-tight"
                        style={{ color: NAVY }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-[13.5px] leading-snug text-[#64748b] transition hover:text-[#1052E0]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[13.5px] leading-snug text-[#64748b]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right — map */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:aspect-[16/11] lg:aspect-auto lg:h-[280px] xl:h-[300px]">
              <iframe
                src={mapUrl}
                title="Office location map"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
