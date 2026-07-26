import Link from "next/link";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "service" as const;

export default function Footer({ data }: { data: ResolvedSiteData }) {
  const { footer, header } = data;

  return (
    <footer className="bg-[#0b1f3a] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold">{header.logo}</p>
          <p className="mt-2 max-w-md text-sm text-white/55">{footer.desc}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/70">
          {footer.footerLegalLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={withTheme(link.href, THEME)}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1280px] px-4 py-4 text-xs text-white/40 md:px-6 lg:px-8">
          {footer.copyrightText}
        </p>
      </div>
    </footer>
  );
}
