"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaCheckCircle,
  FaChevronRight,
  FaClock,
  FaPhoneAlt,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

const THEME = "template-1" as const;
const NAVY = "#0a1f44";
const LIME = "#9fd40b";

type Props = {
  data: ResolvedSiteData;
  theme: ThemeId;
  slug: string;
};

const INCLUDED = [
  "On-site diagnosis before any work begins",
  "Clear upfront quote — no hidden charges",
  "Licensed & insured technicians",
  "Quality parts with workmanship guarantee",
  "Clean-up after the job is finished",
  "Same-day or next-day slots across Delhi NCR",
];

const PROCESS = [
  {
    step: "01",
    title: "Book a visit",
    desc: "Call or send a request with your issue and preferred time.",
  },
  {
    step: "02",
    title: "Diagnosis",
    desc: "Our technician inspects the problem and shares a clear quote.",
  },
  {
    step: "03",
    title: "Repair & finish",
    desc: "We fix it with quality parts, test everything, and clean up.",
  },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "included", label: "What's Included" },
  { id: "process", label: "How it Works" },
  { id: "details", label: "Details" },
] as const;

export default function ServiceDetail({ data, theme, slug }: Props) {
  const listings = data.properties?.listings ?? [];
  const listing = listings.find((item) => item.slug === slug);
  const faqItems = (data.faq?.faqItems ?? []).slice(0, 5);
  const [openFaq, setOpenFaq] = useState(1);
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("overview");

  const contactCta = data.contactInfo?.cta;
  const phone =
    contactCta?.phone || data.topbar.phone || data.footer.footerContact?.phone || "";
  const phoneHref =
    contactCta?.phoneHref ||
    data.footer.callLink ||
    (phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "#");

  if (!listing) return null;

  const overview =
    listing.body ||
    listing.description ||
    "Our licensed technicians deliver reliable plumbing work with upfront pricing and a workmanship guarantee.";

  const gallery = listings
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => ({
      image: item.image,
      alt: item.alt || item.title,
      title: item.title,
      caption: item.description || item.infoTitle,
    }));

  while (gallery.length < 2) {
    gallery.push({
      image: listing.image,
      alt: listing.alt || listing.title,
      title: listing.title,
      caption: listing.description,
    });
  }

  const features = listing.features?.slice(0, 3) ?? [];

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={listing.subtitle || listing.category || "Services"}
        title={listing.title}
        desc={listing.description}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: listing.title,
            href: listing.slug ? `/services/${listing.slug}` : "/services",
          },
        ]}
      />

      <section className="bg-white pb-14 pt-8 md:pb-16 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-9">
            {/* Left sticky sidebar */}
            <aside className="z-10 flex flex-col gap-4 lg:sticky lg:top-24 lg:col-span-4 lg:self-start xl:col-span-3">
              <div className="rounded-xl border border-[#e8edf4] bg-[#f7f9fc] p-3">
                <p className="mb-2.5 px-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0a1f44]/45">
                  Our services
                </p>
                <nav
                  className="service-side-scroll flex max-h-[min(52vh,420px)] flex-col gap-1.5 overflow-y-scroll overscroll-contain pr-1"
                  aria-label="Services"
                  data-lenis-prevent
                >
                  {listings.map((item) => {
                    const active = item.slug === slug;
                    const href = item.slug
                      ? withTheme(`/services/${item.slug}`, THEME)
                      : withTheme("/services", THEME);

                    return (
                      <Link
                        key={item.slug || item.title}
                        href={href}
                        className={[
                          "flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-[12.5px] font-semibold transition",
                          active
                            ? "bg-white text-[#0a1f44] shadow-sm ring-1 ring-[#e2e8f0]"
                            : "text-[#0a1f44]/75 hover:bg-white/70 hover:text-[#0a1f44]",
                        ].join(" ")}
                      >
                        <span className="leading-snug">{item.title}</span>
                        <span
                          className={[
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px]",
                            active
                              ? "bg-[#1052E0] text-white"
                              : "bg-transparent text-[#94a3b8]",
                          ].join(" ")}
                          aria-hidden
                        >
                          <FaChevronRight />
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div
                className="relative overflow-hidden rounded-2xl px-5 py-7 text-white"
                style={{ backgroundColor: NAVY }}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-25"
                  style={{ backgroundColor: LIME }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-white/10"
                  aria-hidden
                />

                <p className="relative text-[18px] font-extrabold leading-snug tracking-tight sm:text-[20px]">
                  Contact with us for any info
                </p>

                <a
                  href={phoneHref}
                  className="relative mt-5 flex flex-col items-start gap-2.5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0a1f44]">
                    <FaPhoneAlt className="text-sm" aria-hidden />
                  </span>
                  <span className="text-[11px] font-medium text-white/65">
                    Need help? Talk to an expert
                  </span>
                  <span className="text-[17px] font-extrabold tracking-tight text-white">
                    {phone}
                  </span>
                </a>

                <Link
                  href={withTheme("/contact", THEME)}
                  className="relative mt-5 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-[12px] font-extrabold text-[#0a1f44] transition hover:opacity-90"
                  style={{ backgroundColor: LIME }}
                >
                  Book this service
                </Link>
              </div>
            </aside>

            {/* Right main content */}
            <div className="min-w-0 space-y-8 lg:col-span-8 xl:col-span-9">
              {/* Hero image only */}
              <div className="overflow-hidden rounded-2xl border border-[#eef2f7] bg-white shadow-[0_8px_28px_rgba(10,31,68,0.06)]">
                <div className="relative aspect-video w-full bg-[#f3f5f8] sm:aspect-2/1">
                  <MediaImage
                    themeId={data.themeId}
                    src={listing.image}
                    alt={listing.alt || listing.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 720px"
                    priority
                  />
                </div>
              </div>

              {/* Tabs — overview / included / process / details */}
              <div className="overflow-hidden rounded-2xl border border-[#e8edf4] bg-white shadow-[0_6px_22px_rgba(10,31,68,0.04)]">
                <div
                  className="flex flex-wrap gap-1 border-b border-[#eef2f7] bg-[#f8fafc] p-1.5 sm:gap-1.5 sm:p-2"
                  role="tablist"
                  aria-label="Service information"
                >
                  {TABS.map((tab) => {
                    const active = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setActiveTab(tab.id)}
                        className={[
                          "rounded-xl px-3.5 py-2.5 text-[12.5px] font-extrabold transition sm:px-4 sm:text-[13px]",
                          active
                            ? "bg-[#1052E0] text-white shadow-sm shadow-[#1052E0]/25"
                            : "bg-[#eef5ff] text-[#0a1f44] hover:bg-[#dbe7f6]",
                        ].join(" ")}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="p-5 sm:p-6" role="tabpanel">
                  {activeTab === "overview" && (
                    <div className="space-y-3.5 text-[14px] leading-[1.75] text-[#5b657a]">
                      <p>{overview}</p>
                      <p>
                        Whether it&apos;s a quick repair or a planned upgrade, we
                        arrive on time, explain the fix in plain language, and only
                        start once you approve the quote. Every visit includes
                        testing and a tidy finish so you can get back to normal
                        without stress.
                      </p>
                      {listing.infoTitle && (
                        <p className="rounded-xl border border-[#eef2f7] bg-[#f7f9fc] px-4 py-3.5 text-[13.5px] font-medium text-[#0a1f44]">
                          <span className="font-extrabold">{listing.infoTitle}.</span>{" "}
                          {listing.description}
                        </p>
                      )}
                    </div>
                  )}

                  {activeTab === "included" && (
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {INCLUDED.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-[#eef2f7] bg-[#fafbfd] px-3.5 py-3"
                        >
                          <FaCheckCircle
                            className="mt-0.5 shrink-0 text-[13px] text-[#9fd40b]"
                            aria-hidden
                          />
                          <span className="text-[12.5px] font-medium leading-snug text-[#334155]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "process" && (
                    <div className="grid gap-4 sm:grid-cols-3">
                      {PROCESS.map((item) => (
                        <div
                          key={item.step}
                          className="rounded-xl border border-[#eef2f7] bg-[#fafbfd] p-4"
                        >
                          <span
                            className="text-[12px] font-extrabold tracking-wider"
                            style={{ color: LIME }}
                          >
                            {item.step}
                          </span>
                          <h3 className="mt-1.5 text-[14px] font-extrabold text-[#0a1f44]">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#64748b]">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "details" && (
                    <div className="space-y-4">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {listing.price && (
                          <div className="flex items-center gap-3 rounded-xl bg-[#0a1f44] px-4 py-3.5 text-white">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                              <FaTools className="text-sm text-[#9fd40b]" aria-hidden />
                            </span>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                                Starting price
                              </p>
                              <p className="text-[16px] font-extrabold">{listing.price}</p>
                            </div>
                          </div>
                        )}
                        {listing.statusText && (
                          <div className="flex items-center gap-3 rounded-xl bg-[#9fd40b]/15 px-4 py-3.5 text-[#0a1f44]">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                              <FaClock className="text-sm" aria-hidden />
                            </span>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0a1f44]/45">
                                Availability
                              </p>
                              <p className="text-[15px] font-extrabold">{listing.statusText}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {features.length > 0 && (
                        <div className="grid gap-3 sm:grid-cols-3">
                          {features.map((f) => (
                            <div
                              key={`${f.label}-${f.value}`}
                              className="rounded-xl border border-[#e8edf4] bg-[#fafbfd] px-4 py-3.5"
                            >
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">
                                {f.label}
                              </p>
                              <p className="mt-1 text-[15px] font-extrabold text-[#0a1f44]">
                                {f.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {!listing.price && !listing.statusText && features.length === 0 && (
                        <p className="text-[14px] text-[#64748b]">
                          Details for this service will be confirmed after diagnosis.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Service Center */}
              <div>
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-5 w-1 rounded-full"
                    style={{ backgroundColor: LIME }}
                    aria-hidden
                  />
                  <h2 className="text-[20px] font-extrabold tracking-tight text-[#0a1f44] sm:text-[22px]">
                    Service Center
                  </h2>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[#5b657a]">
                  Real jobs from our team — clear diagnosis, quality parts, and
                  a clean finish on every visit across homes and businesses.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {gallery.map((item, i) => (
                    <figure
                      key={`${item.image}-${i}`}
                      className="overflow-hidden rounded-xl border border-[#eef2f7] bg-white shadow-sm"
                    >
                      <div className="relative aspect-4/3 w-full bg-[#f3f5f8]">
                        <MediaImage
                          themeId={data.themeId}
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 340px"
                        />
                      </div>
                      <figcaption className="px-3.5 py-3">
                        <p className="text-[13px] font-bold text-[#0a1f44]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[12px] leading-relaxed text-[#8b93a7]">
                          {item.caption}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              {/* Guarantee strip */}
              <div className="flex flex-col items-start gap-4 rounded-2xl bg-[#0a1f44] px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1052E0] text-white">
                    <FaShieldAlt className="text-sm" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[15px] font-extrabold">
                      Workmanship guarantee on every job
                    </p>
                    <p className="mt-1 text-[12.5px] text-white/65">
                      Licensed technicians, upfront pricing, and support if
                      anything needs a follow-up.
                    </p>
                  </div>
                </div>
                <a
                  href={phoneHref}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1052E0] px-5 py-2.5 text-[12.5px] font-extrabold text-white transition hover:opacity-90"
                >
                  <FaPhoneAlt className="text-[10px]" aria-hidden />
                  Call {phone}
                </a>
              </div>

              {/* FAQ */}
              {faqItems.length > 0 && (
                <div>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-5 w-1 rounded-full"
                      style={{ backgroundColor: LIME }}
                      aria-hidden
                    />
                    <h2 className="text-[20px] font-extrabold tracking-tight text-[#0a1f44] sm:text-[22px]">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#5b657a]">
                    Quick answers about booking, pricing, and what to expect
                    when our technicians arrive.
                  </p>

                  <div className="mt-5 overflow-hidden rounded-xl border border-[#e8edf4]">
                    {faqItems.map((item, i) => {
                      const isOpen = openFaq === i;
                      return (
                        <div
                          key={item.question}
                          className={[
                            "border-b border-[#e8edf4] last:border-b-0",
                            isOpen ? "bg-[#f7f9fc]" : "bg-white",
                          ].join(" ")}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaq(isOpen ? -1 : i)}
                            className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left focus:outline-none sm:px-5"
                            aria-expanded={isOpen}
                          >
                            <span className="text-[13.5px] font-bold leading-snug text-[#0a1f44] sm:text-[14.5px]">
                              {item.question}
                            </span>
                            <span
                              className={[
                                "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[16px] font-light leading-none transition",
                                isOpen
                                  ? "rotate-45 bg-[#1052E0] text-white"
                                  : "bg-[#f1f5f9] text-[#0a1f44]",
                              ].join(" ")}
                              aria-hidden
                            >
                              +
                            </span>
                          </button>
                          {isOpen && (
                            <p className="px-4 pb-4 text-[13.5px] leading-relaxed text-[#64748b] sm:px-5">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

