"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const contactIcons: Record<string, typeof FaPhoneAlt> = {
  phone: FaPhoneAlt,
  email: FaEnvelope,
  location: FaMapMarkerAlt,
  hours: FaClock,
};

export default function ContactSection({ data }: { data: ResolvedSiteData }) {
  const section = data.formDetail;
  const contact = data.contactInfo;
  const [submitted, setSubmitted] = useState(false);

  if (!section?.formFields?.length) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center md:mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[13px] font-extrabold uppercase tracking-wide text-[#1d6feb]"
          >
            {section.pretitle}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-[1.8rem] font-extrabold leading-tight text-[#0b1938] sm:text-[2.2rem] md:text-[2.6rem]"
          >
            {section.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500"
          >
            {section.desc}
          </motion.p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Contact Form */}
          <motion.div
            className="rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(10,31,68,0.08)] md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9fd40b]/20 text-[#9fd40b]">
                  <FaArrowRight className="-rotate-45 text-xl" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-[#0b1938]">
                  {section.successMessage || "Thank you for reaching out."}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {section.formFields.map((field) => (
                  <div key={field.label}>
                    <label className="mb-1.5 block text-[13px] font-bold text-[#0b1938]">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        required
                        rows={4}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#0b1938] outline-none transition focus:border-[#1d6feb] focus:bg-white focus:ring-2 focus:ring-[#1d6feb]/10"
                      />
                    ) : (
                      <input
                        required
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-[14px] text-[#0b1938] outline-none transition focus:border-[#1d6feb] focus:bg-white focus:ring-2 focus:ring-[#1d6feb]/10"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1d6feb] px-7 py-4 text-[14px] font-extrabold text-white shadow-[0_10px_28px_rgba(29,111,235,0.35)] transition hover:bg-[#155ec2]"
                >
                  {section.formSubmitLabel}
                  <FaArrowRight className="text-[12px] transition group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contact?.items?.map((item) => {
                const key = item.label.toLowerCase();
                const Icon = contactIcons.phone;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(10,31,68,0.04)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f0fe] text-[#1d6feb]">
                      <Icon className="text-base" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-wide text-slate-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-[14px] font-bold text-[#0b1938] transition hover:text-[#1d6feb]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[14px] font-bold text-[#0b1938]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {contact?.mapEmbedUrl && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(10,31,68,0.04)]">
                <iframe
                  src={contact.mapEmbedUrl}
                  title="Office location map"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            )}

            {section.backgroundImage && !contact?.mapEmbedUrl && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <MediaImage
                  themeId={data.themeId}
                  src={section.backgroundImage}
                  alt={section.backgroundImageTitle || "Contact"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
