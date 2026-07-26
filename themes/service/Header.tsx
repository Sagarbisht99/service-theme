"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  FaBars,
  FaChevronDown,
  FaPhoneAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { withTheme } from "@/lib/theme";
import type { LinkItem, ResolvedSiteData } from "@/lib/types";

const THEME = "service" as const;

function hrefMatches(
  href: string,
  pathname: string,
  searchParams: URLSearchParams
) {
  try {
    const url = new URL(href, "http://local");
    if (url.pathname !== pathname) return false;
    if ([...url.searchParams.keys()].length === 0) return true;
    for (const [key, value] of url.searchParams) {
      if (searchParams.get(key) !== value) return false;
    }
    return true;
  } catch {
    return false;
  }
}

function isItemActive(
  item: LinkItem,
  pathname: string,
  searchParams: URLSearchParams
) {
  if (hrefMatches(item.href, pathname, searchParams)) return true;
  return (
    item.children?.some((child) =>
      hrefMatches(child.href, pathname, searchParams)
    ) ?? false
  );
}

function NavDropdown({
  item,
  active,
}: {
  item: LinkItem;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const children = item.children ?? [];

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={[
          "inline-flex items-center gap-1 text-[15px] font-semibold transition",
          active ? "text-white" : "text-white/80 hover:text-white",
        ].join(" ")}
      >
        {item.label}
        <FaChevronDown className="text-[10px] opacity-70" aria-hidden />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[200px] pt-3">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#001b3d] py-2 shadow-xl">
            {children.map((child) => (
              <Link
                key={child.href + child.label}
                href={withTheme(child.href, THEME)}
                className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HeaderInner({
  data,
}: {
  data: ResolvedSiteData;
  variant?: "overlay" | "solid";
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { header, topbar } = data;
  const cta = header.buttons[0];

  return (
    <header className="sticky top-0 z-50 bg-[#001b3d] text-white py-1">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={withTheme("/", THEME)}
          className="flex shrink-0 items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9fd40b]/10 text-[#9fd40b]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M12 2c-5.5 5.5-5.5 9.5 0 15 5.5-5.5 5.5-9.5 0-15zm0 11.5c-1.9 0-3.5-1.6-3.5-3.5s3.5-6.5 3.5-6.5 3.5 4.6 3.5 6.5-1.6 3.5-3.5 3.5z" />
            </svg>
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-white flex items-center">
            Aqua<span className="text-[#9fd40b]">Fix</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {header.menu.map((item) => {
            const active = isItemActive(item, pathname, searchParams);
            if (item.children?.length) {
              return <NavDropdown key={item.label} item={item} active={active} />;
            }
            return (
              <Link
                key={item.label}
                href={withTheme(item.href, THEME)}
                className={[
                  "text-[15px] font-semibold transition",
                  active ? "text-[#9fd40b]" : "text-white/80 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side phone and CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          {topbar.phone && (
            <a
              href={`tel:${topbar.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9fd40b]/10 text-[#9fd40b]">
                <FaPhoneAlt className="text-sm" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                  Call Us
                </span>
                <span className="block text-[15px] font-bold text-[#9fd40b]">
                  {topbar.phone}
                </span>
              </span>
            </a>
          )}
          {cta && (
            <Link
              href={withTheme(cta.href, THEME)}
              className="inline-flex items-center gap-2 rounded-full bg-[#9fd40b] px-6 py-3 text-sm font-extrabold text-[#001b3d] shadow-[0_8px_20px_rgba(159,212,11,0.25)] transition hover:bg-[#8fc00a] hover:scale-[1.02]"
            >
              <FaUser className="text-xs" aria-hidden />
              {cta.label}
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-4 py-4 lg:hidden bg-[#001b3d]">
          <nav className="flex flex-col gap-1">
            {header.menu.map((item) => (
              <div key={item.label} className="border-b border-white/5 py-2">
                <Link
                  href={withTheme(item.href, THEME)}
                  className="block py-1.5 text-base font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href + child.label}
                    href={withTheme(child.href, THEME)}
                    className="block py-1.5 pl-3 text-sm text-white/65"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            {topbar.phone && (
              <a
                href={`tel:${topbar.phone.replace(/[^\d+]/g, "")}`}
                className="text-base font-bold text-[#9fd40b] flex items-center gap-2"
              >
                <FaPhoneAlt className="text-sm" /> Call Us {topbar.phone}
              </a>
            )}
            {cta && (
              <Link
                href={withTheme(cta.href, THEME)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9fd40b] px-5 py-3 text-sm font-extrabold text-[#001b3d]"
                onClick={() => setMobileOpen(false)}
              >
                <FaUser className="text-xs" aria-hidden />
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default function Header({
  data,
  variant = "solid",
}: {
  data: ResolvedSiteData;
  variant?: "overlay" | "solid";
}) {
  return (
    <Suspense fallback={<div className="h-[68px] bg-[#001b3d]" />}>
      <HeaderInner data={data} variant={variant} />
    </Suspense>
  );
}
