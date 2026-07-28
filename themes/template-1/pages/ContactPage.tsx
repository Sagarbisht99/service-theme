"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaHome,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

const ACCENT = "#1052E0";
const NAVY = "#0a1f44";

type Props = { data: ResolvedSiteData; theme: ThemeId };

export default function ContactPage({ data, theme }: Props) {
  const page = data.contactPage;
  const contact = data.contactInfo;
  const footerContact = page?.footerContact || data.footer?.footerContact;

  const phone =
    footerContact?.phone ||
    contact?.items?.find((i) => /phone|call|whatsapp/i.test(i.label))?.value ||
    data.topbar.phone ||
    "";
  const email =
    footerContact?.email ||
    contact?.items?.find((i) => /email|mail/i.test(i.label))?.value ||
    data.topbar.email ||
    "";
  const address =
    footerContact?.location ||
    contact?.items?.find((i) => /visit|address|location/i.test(i.label))
      ?.value ||
    data.topbar.location ||
    "";
  const hours =
    contact?.items?.find((i) => /hour/i.test(i.label))?.value || "";

  const mapUrl = contact?.mapEmbedUrl || "";

  const fields = page?.formFields || [];

  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  const infoCards = [
    {
      icon: FaMapMarkerAlt,
      label: page?.officeLabel || "Office",
      value: address,
      href: `https://maps.google.com/?q=${encodeURIComponent(address)}`,
    },
    {
      icon: FaPhoneAlt,
      label: page?.phoneLabel || "Phone",
      value: phone,
      href: `tel:${phone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: FaEnvelope,
      label: page?.emailLabel || "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: FaClock,
      label: "Hours",
      value: hours,
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] sm:block">
          <MediaImage
            themeId={data.themeId}
            src={
              page?.sideImage ||
              "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
            }
            alt={page?.sideImageTitle || "Contact us"}
            fill
            className="object-cover object-center"
            sizes="52vw"
            priority
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.95)_12%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0)_65%)]"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto flex min-h-[180px] max-w-6xl flex-col justify-center px-4 py-10 sm:min-h-[220px] sm:px-6 lg:min-h-[260px] lg:px-8">
          <div className="max-w-md">
            <p
              className="text-[12px] font-extrabold uppercase tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              {page?.pretitle || "Contact us"}
            </p>
            <h1
              className="mt-2 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-[2.4rem]"
              style={{ color: NAVY }}
            >
              {page?.title || "Get in touch"}
            </h1>
            <span
              className="mt-3 block h-1 w-14 rounded-full"
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
            <p className="mt-4 text-[14px] leading-relaxed text-[#64748b]">
              {page?.desc ||
                "Share a few details and our team will get back to confirm your appointment."}
            </p>

            <nav
              aria-label="Breadcrumb"
              className="mt-6 flex flex-wrap items-center gap-1.5 text-[12.5px] font-medium text-[#64748b]"
            >
              <Link
                href={withTheme("/", theme)}
                className="inline-flex items-center gap-1.5 transition hover:text-[#1052E0]"
              >
                <FaHome
                  className="text-[12px]"
                  style={{ color: ACCENT }}
                  aria-hidden
                />
                Home
              </Link>
              <span aria-hidden>/</span>
              <span style={{ color: ACCENT }}>Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Info + form */}
      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left — reach us */}
            <aside className="lg:col-span-4">
              <p
                className="text-[12px] font-extrabold uppercase tracking-[0.16em]"
                style={{ color: ACCENT }}
              >
                {page?.reachPretitle || "Reach us"}
              </p>
              <h2
                className="mt-2 text-[1.35rem] font-extrabold tracking-tight"
                style={{ color: NAVY }}
              >
                {page?.reachTitle || "We're here to help"}
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#64748b]">
                {page?.reachDesc ||
                  "Prefer a call, WhatsApp, or email? We're available for emergencies — or send a message and we'll reply shortly."}
              </p>

              <ul className="mt-6 space-y-3">
                {infoCards.map((card) => {
                  const Icon = card.icon;
                  const inner = (
                    <>
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white"
                        style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
                      >
                        <Icon className="text-[14px]" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p
                          className="text-[12px] font-bold uppercase tracking-wide"
                          style={{ color: NAVY }}
                        >
                          {card.label}
                        </p>
                        <p className="mt-0.5 text-[13.5px] leading-snug text-[#475569]">
                          {card.value}
                        </p>
                      </div>
                    </>
                  );
                  return (
                    <li key={card.label}>
                      {card.href ? (
                        <a
                          href={card.href}
                          className="flex items-start gap-3 rounded-xl border border-[#e8edf4] bg-[#f7f9fc] p-3.5 transition hover:border-[#1052E0]/30 hover:bg-white"
                          target={card.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            card.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-start gap-3 rounded-xl border border-[#e8edf4] bg-[#f7f9fc] p-3.5">
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Right — form */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-[#e8edf4] bg-white p-5 shadow-[0_8px_28px_rgba(10,31,68,0.05)] sm:p-7">
                <p
                  className="text-[12px] font-extrabold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  {page?.formPretitle || "Write us"}
                </p>
                <h2
                  className="mt-2 text-[1.35rem] font-extrabold tracking-tight"
                  style={{ color: NAVY }}
                >
                  {page?.formTitle || "Book a service"}
                </h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#64748b]">
                  {page?.formDesc ||
                    "Tell us the issue, your area, and a preferred time."}
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-2xl border border-[#dbe7f6] bg-[#eef5ff] px-6 py-10 text-center">
                    <FaCheckCircle
                      className="mx-auto text-3xl"
                      style={{ color: ACCENT }}
                      aria-hidden
                    />
                    <p
                      className="mt-3 text-[16px] font-extrabold"
                      style={{ color: NAVY }}
                    >
                      {page?.successTitle || "Request received"}
                    </p>
                    <p className="mt-2 text-[13.5px] text-[#64748b]">
                      {page?.successDesc ||
                        "Thank you — our team will contact you shortly to confirm."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {fields.map((field) => {
                        const isTextarea = field.type === "textarea";
                        const name = field.label.toLowerCase().replace(/\s+/g, "_");
                        const fullWidth = isTextarea;
                        return (
                          <label
                            key={field.label}
                            className={fullWidth ? "block sm:col-span-2" : "block"}
                          >
                            <span
                              className="mb-1.5 block text-[13px] font-bold"
                              style={{ color: NAVY }}
                            >
                              {field.label}
                              <span style={{ color: ACCENT }}> *</span>
                            </span>
                            {isTextarea ? (
                              <textarea
                                required
                                name={name}
                                rows={4}
                                placeholder={field.placeholder}
                                className={`${inputClass} resize-y`}
                              />
                            ) : (
                              <input
                                required
                                type={field.type || "text"}
                                name={name}
                                placeholder={field.placeholder}
                                className={inputClass}
                              />
                            )}
                          </label>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-4 border-t border-[#eef2f7] pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <label className="flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-snug text-[#64748b]">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#1052E0]"
                          required
                        />
                        <span>
                          {page?.consentPrefix || "By checking this box, you agree to our"}{" "}
                          <Link
                            href={withTheme("/terms", theme)}
                            className="font-semibold hover:underline"
                            style={{ color: ACCENT }}
                          >
                            Terms
                          </Link>{" "}
                          &{" "}
                          <Link
                            href={withTheme("/privacy", theme)}
                            className="font-semibold hover:underline"
                            style={{ color: ACCENT }}
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </label>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[13.5px] font-extrabold text-white shadow-md transition hover:brightness-95"
                        style={{ backgroundColor: ACCENT }}
                      >
                        {page?.formSubmitLabel || "Send message"}
                        <FaPaperPlane className="text-[11px]" aria-hidden />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-[#eef2f7] bg-white">
        <div className="relative h-[280px] w-full sm:h-[320px] lg:h-[380px]">
          <iframe
            src={mapUrl}
            title="Office location map"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute top-4 left-4 z-10 max-w-xs rounded-xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(10,31,68,0.12)] ring-1 ring-black/5">
            <p className="flex items-start gap-2 text-[12.5px] font-semibold leading-snug text-[#0a1f44]">
              <FaMapMarkerAlt
                className="mt-0.5 shrink-0 text-[#ef4444]"
                aria-hidden
              />
              {address}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#e2e8f0] bg-white px-3.5 py-2.5 text-[13.5px] text-[#0f172a] outline-none transition placeholder:text-[#94a3b8] focus:border-[#1052E0] focus:ring-2 focus:ring-[#1052E0]/15";
