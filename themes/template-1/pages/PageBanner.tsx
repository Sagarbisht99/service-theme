import Link from "next/link";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { withTheme } from "@/lib/theme";
import type { LinkItem, ThemeId } from "@/lib/types";

export default function PageBanner({
  theme,
  title,
  eyebrow,
  desc,
  breadcrumb,
}: {
  theme: ThemeId;
  title: string;
  eyebrow?: string;
  desc?: string;
  breadcrumb?: LinkItem[];
}) {
  const crumbs = breadcrumb?.filter((item) => item?.label) ?? [];

  return (
    <section className="relative overflow-hidden border-b border-[#dbe7f6] bg-white px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-12">
      {/* Soft atmosphere — blue wash + lime accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 0% 0%, rgba(16,82,224,0.10), transparent 55%), radial-gradient(ellipse 50% 60% at 100% 20%, rgba(159,212,11,0.08), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1052E0]/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl text-center">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center justify-center gap-1.5 text-[12.5px] font-medium text-[#64748b]"
          >
            {crumbs.map((item, index) => {
              const isLast = index === crumbs.length - 1;
              const isHome = item.href === "/" || /^home$/i.test(item.label);

              return (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
                  {index > 0 && (
                    <FaChevronRight
                      className="text-[9px] text-[#94a3b8]"
                      aria-hidden
                    />
                  )}
                  {isLast || !item.href ? (
                    <span
                      className="font-semibold text-[#1052E0]"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={withTheme(item.href, theme)}
                      className="inline-flex items-center gap-1.5 transition hover:text-[#1052E0]"
                    >
                      {isHome && (
                        <FaHome
                          className="text-[12px] text-[#1052E0]"
                          aria-hidden
                        />
                      )}
                      {item.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        {eyebrow && (
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1052E0]" aria-hidden="true" />
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#1052E0] sm:text-[13px]">
              {eyebrow}
            </p>
          </div>
        )}
        <h1 className="mx-auto mt-3 max-w-3xl font-sans text-3xl font-extrabold tracking-tight text-[#0a1f44] md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {title}
        </h1>
        {desc && (
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5b657a]">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
