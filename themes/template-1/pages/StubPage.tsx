import type { ResolvedSiteData, ThemeId } from "@/lib/types";

export default function StubPage({
  data,
  title,
}: {
  data: ResolvedSiteData;
  theme: ThemeId;
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0a1f44]">
        Coming soon
      </p>
      <h1 className="mt-3 text-3xl font-bold text-[#001b3d] md:text-4xl">
        {title || data.header.logo}
      </h1>
      <p className="mt-4 max-w-xl text-[#001b3d]/65">
        This page will be designed in Template 1 next. The homepage Header + Hero and other modular components are ready first.
      </p>
    </section>
  );
}
