import type { LinkItem, ThemeId } from "@/lib/types";

export default function PageBanner({
  title,
  eyebrow,
}: {
  theme: ThemeId;
  title: string;
  eyebrow?: string;
  breadcrumb?: LinkItem[];
}) {
  return (
    <section className="bg-[#0b1f3a] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fd40b]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}