import type { LinkItem, ThemeId } from "@/lib/types";

export default function PageBanner({
  title,
  eyebrow,
  desc,
}: {
  theme: ThemeId;
  title: string;
  eyebrow?: string;
  desc?: string;
  breadcrumb?: LinkItem[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#e8eef5] bg-white px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-12">
      {/* Soft atmosphere — light wash + lime accent, no solid navy block */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 0% 0%, rgba(159,212,11,0.12), transparent 55%), radial-gradient(ellipse 50% 60% at 100% 20%, rgba(10,31,68,0.04), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#9fd40b]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] text-center">
        {eyebrow && (
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9fd40b]" aria-hidden="true" />
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#0a1f44]/55 sm:text-[13px]">
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
