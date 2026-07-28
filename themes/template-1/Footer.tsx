import type { ReactNode } from "react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;
const ACCENT = "#1052E0";

const SOCIAL_ICONS: Record<string, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M22 5.8c-.7.3-1.5.5-2.3.6A4 4 0 0 0 21.4 4c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.2 4.5a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.5.1-1 .2-1.5.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.4 11.3 11.3 0 0 0 8.1 20c7.3 0 11.3-6.1 11.3-11.3v-.5A8 8 0 0 0 22 5.8z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M6.5 9H3.5v12h3V9zM5 3.5A1.75 1.75 0 1 0 5 7a1.75 1.75 0 0 0 0-3.5zM20.5 13.2c0-2.9-1.6-4.2-3.6-4.2-1.7 0-2.4.9-2.8 1.6V9h-3v12h3v-6.5c0-.4.1-1 .9-1 .8 0 .8.7.8 1.1V21h3v-7.8z" />
    </svg>
  ),
};

export default function Footer({ data }: { data: ResolvedSiteData }) {
  const { footer, header, topbar } = data;
  const brand = footer.logoImageTitle || header.logo || data.template.title;
  const columns = footer.footerColumns || [];
  const contact = {
    location: footer.footerContact?.location || topbar.location || "",
    email: footer.footerContact?.email || topbar.email || "",
    phone: footer.footerContact?.phone || topbar.phone || "",
  };
  const socials = footer.socialLinks || [];
  const callHref =
    footer.callLink ||
    (contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : "#");
  const callLabel =
    footer.officeLabel || (contact.phone ? `Call ${contact.phone}` : "Call us");

  return (
    <footer className="bg-[#0a1f44] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-3">
            <Link
              href={withTheme("/", THEME)}
              className="inline-flex items-center gap-2 focus:outline-none"
            >
              <span style={{ color: ACCENT }}>
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                  <path d="M12 2C7 8 4 12 4 16a8 8 0 0 0 16 0c0-4-3-8-8-14z" />
                </svg>
              </span>
              <span className="font-sans text-xl font-black tracking-tight text-white">
                {brand}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/55">
              {footer.desc}
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => {
                const key = (s.label || "").toLowerCase();
                const icon = SOCIAL_ICONS[key];
                if (!icon) return null;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/15 hover:text-white"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>

            <a
              href={callHref}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-[13.5px] font-bold transition hover:bg-white/5"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              <FaPhoneAlt className="text-[11px]" aria-hidden />
              {callLabel}
            </a>
          </div>

          {/* Link columns */}
          {columns.slice(0, 3).map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[15px] font-extrabold text-white tracking-tight">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link
                      href={withTheme(link.href, THEME)}
                      className="text-[13.5px] font-medium text-white/55 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h4 className="text-[15px] font-extrabold text-white tracking-tight">
              {footer.contactLabel || "Contact"}
            </h4>
            <ul className="mt-5 flex flex-col gap-4">
              {contact?.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-start gap-3 text-[13.5px] font-medium text-white/80 transition hover:text-white"
                  >
                    <FaPhoneAlt
                      className="mt-0.5 shrink-0 text-[12px]"
                      style={{ color: ACCENT }}
                      aria-hidden
                    />
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact?.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-3 text-[13.5px] font-medium text-white/80 transition hover:text-white"
                  >
                    <FaEnvelope
                      className="mt-0.5 shrink-0 text-[12px]"
                      style={{ color: ACCENT }}
                      aria-hidden
                    />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact?.location && (
                <li className="flex items-start gap-3 text-[13.5px] font-medium text-white/80">
                  <FaMapMarkerAlt
                    className="mt-0.5 shrink-0 text-[13px]"
                    style={{ color: ACCENT }}
                    aria-hidden
                  />
                  <span className="max-w-[220px] leading-relaxed">
                    {contact.location}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal notes + bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-[12px] leading-relaxed text-white/40">
            {footer.disclaimerText && (
              <p>
                <span className="font-semibold text-white/55">
                  {footer.disclaimerTitle || "Disclaimer"}:
                </span>{" "}
                {footer.disclaimerText}
              </p>
            )}
            {footer.cookieText && (
              <p>
                <span className="font-semibold text-white/55">Cookies:</span>{" "}
                {footer.cookieText}
              </p>
            )}
            {footer.refundText && (
              <p>
                <span className="font-semibold text-white/55">Refunds:</span>{" "}
                {footer.refundText}
              </p>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>{footer.copyrightText}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {(footer.footerLegalLinks || []).map((link) => (
                <Link
                  key={link.href}
                  href={withTheme(link.href, THEME)}
                  className="transition hover:text-white/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
