"use client";

import { FaPhoneAlt, FaHardHat } from "react-icons/fa";
import type { ResolvedSiteData } from "@/lib/types";

const NAVY = "#0a1f44";
const BLUE = "#1052E0";
const LIME = "#9fd40b";

export default function CTA({ data }: { data: ResolvedSiteData }) {
  const cta = data.contactInfo?.cta || {};

  const title = cta.title || "";
  const desc = cta.desc || "";
  const phone = cta.phone || data.topbar.phone || data.footer.footerContact?.phone || "";
  const phoneHref =
    cta.phoneHref ||
    data.footer.callLink ||
    (phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "#");
  const buttonLabel = cta.buttonLabel || "Call Now";

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-310 px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col gap-5 rounded-2xl px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8"
          style={{ backgroundColor: NAVY }}
        >
          <div className="flex items-center gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: LIME, color: NAVY }}
            >
              <FaHardHat className="text-xl" aria-hidden />
            </span>
            <div>
              <h3 className="text-[18px] font-extrabold leading-tight text-white sm:text-[20px]">
                {title}
              </h3>
              <p className="mt-1 text-[13px] font-medium leading-snug text-white/80">
                {desc}
              </p>
            </div>
          </div>

          <a
            href={phoneHref}
            className="inline-flex shrink-0 items-center justify-center gap-2.5 self-start rounded-xl px-6 py-3.5 text-[13.5px] font-extrabold text-white transition hover:brightness-95 md:self-auto"
            style={{ backgroundColor: BLUE }}
          >
            <FaPhoneAlt className="text-xs" aria-hidden />
            {buttonLabel}: {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
