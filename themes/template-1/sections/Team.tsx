"use client";

import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

const SOCIALS = [
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        <path d="M6.5 9H3.5v12h3V9zM5 3.5A1.75 1.75 0 1 0 5 7a1.75 1.75 0 0 0 0-3.5zM20.5 13.2c0-2.9-1.6-4.2-3.6-4.2-1.7 0-2.4.9-2.8 1.6V9h-3v12h3v-6.5c0-.4.1-1 .9-1 .8 0 .8.7.8 1.1V21h3v-7.8z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
        <path d="M22 5.8c-.7.3-1.5.5-2.3.6A4 4 0 0 0 21.4 4c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.2 4.5a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.5.1-1 .2-1.5.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.4 11.3 11.3 0 0 0 8.1 20c7.3 0 11.3-6.1 11.3-11.3v-.5A8 8 0 0 0 22 5.8z" />
      </svg>
    ),
  },
];

export default function Team({ data }: { data: ResolvedSiteData }) {
  const team = data.team as any;
  const members = (team?.teamItems || []).slice(0, 4);

  return (
    <section className="relative bg-white py-16 overflow-hidden border-b border-gray-100">
      {/* Decorative plumber illustration bottom-left — same SVG as Testimonials */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-36 w-44 text-[#0a1f44]"
        viewBox="0 0 180 150"
        fill="none"
        aria-hidden="true"
      >
        {/* plant */}
        <path d="M92 148c8-14 4-30 12-42" stroke="#1b2440" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M104 106c-8 4-10 14-8 20M104 106c6 2 12-2 14-8M96 128c-6 0-12 4-13 10" stroke="#1b2440" strokeWidth="1.5" strokeLinecap="round" />
        {/* plumber body */}
        <circle cx="38" cy="78" r="10" fill="#f4b183" />
        <path d="M32 72c2-6 12-6 14 0l-2-10h-10z" fill="#0a1f44" />
        <path d="M30 88c-6 4-10 12-10 22l6 28h12l-2-26 10-8z" fill="#0a1f44" />
        <path d="M46 96l14 10 16-4 4 8-20 8-18-10z" fill="#f4b183" />
        <path d="M26 138l-6 10h16v-8z" fill="#0a1f44" />
        <path d="M34 88c8-4 16-2 20 4l-8 10-14-6z" fill="#0a1f44" />
        {/* wrench in hand */}
        <path d="M76 96l10-4m-10 4l2 6" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5">
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-[0.2em] uppercase">
              {team?.pretitle || "OUR TEAM"}
            </span>
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
          </div>
          <h2 className="mt-3 font-sans text-3xl md:text-[2.5rem] font-extrabold text-[#1b2440] tracking-tight">
            {team?.title || "Meet Our Skilled Plumbers"}
          </h2>
        </div>

        {/* 4 Team Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member: any) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_12px_35px_rgba(0,27,61,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,27,61,0.1)]"
            >
              {/* Photo */}
              <div className="relative h-[260px] w-full bg-[#eef3fa]">
                <MediaImage
                  themeId={data.themeId}
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="px-5 py-5 text-center">
                <h3 className="text-[16px] font-extrabold text-[#1b2440]">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[13px] font-semibold text-[#0a1f44]">
                  {member.role}
                </p>

                {/* Social icons */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  {SOCIALS.map((s) => (
                    <span
                      key={s.label}
                      className="text-[#0a1f44] hover:text-[#0a1f44] transition"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
