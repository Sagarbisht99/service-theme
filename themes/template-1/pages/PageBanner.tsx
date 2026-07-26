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
    <section className="bg-[#0a1f44] px-4 py-12 md:px-8 md:py-16 text-white">
      <div className="mx-auto max-w-[1280px]">
        {eyebrow && (
          <p className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#9fd40b]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-sans text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {desc && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
