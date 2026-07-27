"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  FaBriefcase,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaEnvelope,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaTools,
  FaUserFriends,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

const ACCENT = "#1052E0";
const NAVY = "#0a1f44";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const BENEFIT_ICONS = [FaBriefcase, FaHeartbeat, FaCheckCircle, FaUserFriends];

const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];

const EXPERIENCE_OPTIONS = [
  "0–1 years",
  "1–3 years",
  "3–5 years",
  "5+ years",
];

export default function CareerPage({ data, theme }: Props) {
  const career = data.careerPage;
  const contact = data.contactInfo;
  const footerContact = data.footer?.footerContact;
  const jobs = career?.jobs || [];
  const benefits = career?.benefits || [];
  const featured = jobs[0];

  const mapUrl =
    contact?.mapEmbedUrl ||
    "https://www.google.com/maps?q=Sector+44+Gurugram&output=embed";
  const address =
    footerContact?.location ||
    contact?.items?.find((i) => /address|location|visit/i.test(i.label))
      ?.value ||
    "123 Main Street, New York, NY 10001";
  const email =
    footerContact?.email ||
    contact?.items?.find((i) => /email|mail/i.test(i.label))?.value ||
    "careers@aquafix.com";
  const phone =
    footerContact?.phone ||
    contact?.items?.find((i) => /phone|call/i.test(i.label))?.value ||
    "+1 (555) 123-4567";

  const [submitted, setSubmitted] = useState(false);
  const [employmentType, setEmploymentType] = useState("Full-time");
  const [agreed, setAgreed] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <MediaImage
            themeId={data.themeId}
            src={
              career?.sideImage ||
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
            }
            alt={career?.sideImageTitle || "Careers"}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#0a1f44]/75" />
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-10 w-28 bg-[#1052E0] sm:h-12 sm:w-36"
          style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[160px] max-w-6xl flex-col justify-center px-4 py-10 sm:min-h-[180px] sm:px-6 md:py-12 lg:px-8">
          <h1 className="text-[2rem] font-extrabold tracking-tight text-white sm:text-[2.4rem]">
            {career?.pretitle || "Career"}
          </h1>
          <p className="mt-2 text-[13px] text-white/80">
            <Link href={withTheme("/", theme)} className="hover:text-white">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <span>Career</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left sidebar */}
            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-[#e8edf4] bg-[#f7f9fc] p-5 sm:p-6">
                <h2
                  className="text-[15px] font-extrabold"
                  style={{ color: NAVY }}
                >
                  Position Details
                </h2>

                {featured && (
                  <div className="mt-4">
                    <div className="flex items-start gap-3">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: ACCENT }}
                      >
                        <FaTools className="text-sm" aria-hidden />
                      </span>
                      <div>
                        <p
                          className="text-[14.5px] font-extrabold"
                          style={{ color: NAVY }}
                        >
                          {featured.title}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-[#64748b]">
                          <FaMapMarkerAlt
                            className="text-[11px]"
                            style={{ color: ACCENT }}
                            aria-hidden
                          />
                          {featured.location}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#64748b]">
                      {featured.desc}
                    </p>
                  </div>
                )}

                <div className="mt-7 border-t border-[#e2e8f0] pt-6">
                  <h3
                    className="text-[14px] font-extrabold"
                    style={{ color: NAVY }}
                  >
                    Why Join Us?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {benefits.map((b, i) => {
                      const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
                      return (
                        <li key={b.title} className="flex items-start gap-2.5">
                          <span
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                            style={{
                              backgroundColor: `${ACCENT}15`,
                              color: ACCENT,
                            }}
                          >
                            <Icon className="text-[11px]" aria-hidden />
                          </span>
                          <div>
                            <p
                              className="text-[13px] font-bold"
                              style={{ color: NAVY }}
                            >
                              {b.title}
                            </p>
                            {b.desc && (
                              <p className="mt-0.5 text-[12px] leading-snug text-[#94a3b8]">
                                {b.desc}
                              </p>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-7 border-t border-[#e2e8f0] pt-6">
                  <h3
                    className="text-[14px] font-extrabold"
                    style={{ color: NAVY }}
                  >
                    Have Questions?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2.5 text-[13px] font-medium text-[#475569] transition hover:text-[#1052E0]"
                      >
                        <FaEnvelope
                          className="text-[12px]"
                          style={{ color: ACCENT }}
                          aria-hidden
                        />
                        {email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="flex items-center gap-2.5 text-[13px] font-medium text-[#475569] transition hover:text-[#1052E0]"
                      >
                        <FaPhoneAlt
                          className="text-[12px]"
                          style={{ color: ACCENT }}
                          aria-hidden
                        />
                        {phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Application form */}
            <div className="lg:col-span-8">
              <h2
                className="text-[1.35rem] font-extrabold tracking-tight sm:text-[1.5rem]"
                style={{ color: NAVY }}
              >
                Application Form
              </h2>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-[#dbeafe] bg-[#eff6ff] px-6 py-10 text-center">
                  <FaCheckCircle
                    className="mx-auto text-3xl"
                    style={{ color: ACCENT }}
                    aria-hidden
                  />
                  <p
                    className="mt-3 text-[16px] font-extrabold"
                    style={{ color: NAVY }}
                  >
                    Application submitted
                  </p>
                  <p className="mt-2 text-[13.5px] text-[#64748b]">
                    Thanks for applying. Our team will review your details and
                    get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" required>
                      <input
                        required
                        name="fullName"
                        placeholder="Enter your full name"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email Address" required>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone Number" required>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Location" required>
                      <select
                        required
                        name="location"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select location
                        </option>
                        {[
                          ...new Set(jobs.map((j) => j.location).filter(Boolean)),
                          "Remote",
                          "Other",
                        ].map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Position Applied For" required>
                      <select
                        required
                        name="position"
                        defaultValue={featured?.title || ""}
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select position
                        </option>
                        {jobs.map((j) => (
                          <option key={j.title} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Experience" required>
                      <select
                        required
                        name="experience"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select experience
                        </option>
                        {EXPERIENCE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <fieldset>
                    <legend
                      className="mb-2.5 text-[13px] font-bold"
                      style={{ color: NAVY }}
                    >
                      Employment Type <span style={{ color: ACCENT }}>*</span>
                    </legend>
                    <div className="flex flex-wrap gap-4">
                      {EMPLOYMENT_TYPES.map((type) => (
                        <label
                          key={type}
                          className="flex cursor-pointer items-center gap-2 text-[13px] font-medium text-[#475569]"
                        >
                          <input
                            type="radio"
                            name="employmentType"
                            value={type}
                            checked={employmentType === type}
                            onChange={() => setEmploymentType(type)}
                            className="h-4 w-4 accent-[#1052E0]"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <UploadBox
                      label="Upload Resume"
                      required
                      name="resume"
                      accept=".pdf,.doc,.docx"
                    />
                    <UploadBox
                      label="Cover Letter (Optional)"
                      name="coverLetter"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>

                  <Field label="Additional Information">
                    <textarea
                      name="additional"
                      rows={4}
                      placeholder="Tell us anything else we should know..."
                      className={`${inputClass} resize-y`}
                    />
                  </Field>

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
                        I agree to the{" "}
                        <Link
                          href={withTheme("/terms", theme)}
                          className="font-semibold hover:underline"
                          style={{ color: ACCENT }}
                        >
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
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
                      {career?.applyLabel || "Submit Application"}
                      <FaPaperPlane className="text-[11px]" aria-hidden />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-[#eef2f7] bg-white">
        <div className="relative h-[280px] w-full sm:h-[320px] lg:h-[360px]">
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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="mb-1.5 block text-[13px] font-bold"
        style={{ color: NAVY }}
      >
        {label}
        {required && <span style={{ color: ACCENT }}> *</span>}
      </span>
      {children}
    </label>
  );
}

function UploadBox({
  label,
  required,
  name,
  accept,
}: {
  label: string;
  required?: boolean;
  name: string;
  accept: string;
}) {
  return (
    <label className="block cursor-pointer">
      <span
        className="mb-1.5 block text-[13px] font-bold"
        style={{ color: NAVY }}
      >
        {label}
        {required && <span style={{ color: ACCENT }}> *</span>}
      </span>
      <span className="flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-dashed border-[#93c5fd] bg-[#eff6ff] px-4 py-5 text-center transition hover:bg-[#dbeafe]/60">
        <FaCloudUploadAlt
          className="text-2xl"
          style={{ color: ACCENT }}
          aria-hidden
        />
        <span className="mt-2 text-[12.5px] font-semibold text-[#334155]">
          Click to upload or drag and drop
        </span>
        <span className="mt-1 text-[11.5px] text-[#94a3b8]">
          PDF, DOC, DOCX (Max. 5MB)
        </span>
        <input
          type="file"
          name={name}
          accept={accept}
          required={required}
          className="sr-only"
        />
      </span>
    </label>
  );
}
