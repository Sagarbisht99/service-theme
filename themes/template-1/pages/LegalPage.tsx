import type { LegalPageData, ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = {
  data: ResolvedSiteData;
  theme: ThemeId;
  page: LegalPageData;
};

/** Simple centered legal layout — title + points only */
export default function LegalPage({ page }: Props) {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-[720px] px-4 md:px-6 text-center">
        <h1 className="font-sans text-3xl md:text-[2.5rem] font-extrabold text-[#0a1f44] tracking-tight">
          {page.title}
        </h1>
        {page.updatedAt && (
          <p className="mt-3 text-[13px] font-medium text-[#0a1f44]/40">
            Last updated: {page.updatedAt}
          </p>
        )}
        {page.desc && (
          <p className="mt-5 text-[15px] leading-relaxed text-[#0a1f44]/60">
            {page.desc}
          </p>
        )}
      </div>

      <div className="mx-auto max-w-[720px] px-4 md:px-6 mt-12">
        <ol className="flex flex-col gap-8 list-decimal list-outside ml-5 md:ml-6 text-left">
          {(page.sections || []).map((section, i) => (
            <li key={section.title} className="pl-2 marker:font-extrabold marker:text-[#0a1f44]">
              <h2 className="text-[16px] sm:text-[17px] font-extrabold text-[#0a1f44] tracking-tight">
                {section.title}
              </h2>
              <p className="mt-2.5 text-[14px] sm:text-[14.5px] leading-relaxed text-[#0a1f44]/65 whitespace-pre-line">
                {section.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
