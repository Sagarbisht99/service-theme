import type { ResolvedSiteData, ThemeId } from "@/lib/types";

/** Temporary stub for inner pages — full Service pages come next */
export default function StubPage({
  data,
  title,
}: {
  data: ResolvedSiteData;
  theme: ThemeId;
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fd40b]">
        Coming next
      </p>
      <h1 className="mt-3 text-3xl font-bold text-[#0b1f3a] md:text-4xl">
        {title || data.header.logo}
      </h1>
      <p className="mt-4 max-w-xl text-[#0b1f3a]/65">
        This page will be designed in the AquaFix service template next. The
        homepage Header + Hero section is ready first.
      </p>
    </section>
  );
}
