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

const THEME = "template-1" as const;

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
    function clickAway(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", clickAway);
    return () => document.removeEventListener("mousedown", clickAway);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={[
          "flex items-center gap-1 text-[14px] font-bold tracking-tight transition focus:outline-none",
          active ? "text-[#9fd40b]" : "text-white hover:text-[#9fd40b]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {item.label}
        <FaChevronDown className="text-[10px] opacity-80" />
      </button>

      {open && (
        <div className="absolute left-0 mt-4 w-56 origin-top-left rounded-2xl border border-gray-100/90 bg-white p-2.5 shadow-xl ring-1 ring-black/5 z-50">
          <div className="flex flex-col gap-0.5">
            {children.map((child) => (
              <Link
                key={child.href}
                href={withTheme(child.href, THEME)}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-[13.5px] font-bold text-[#001b3d] hover:bg-gray-50/90 hover:text-[#9fd40b] transition"
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

function HeaderContent({ data }: { data: ResolvedSiteData }) {
  const { header } = data;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menu = header.menu || [];
  const primaryButton = header.buttons?.[0];

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-5 lg:px-6 pt-3 sm:pt-4">
      <div className="mx-auto flex max-w-[1320px] h-[66px] items-center justify-between rounded-2xl bg-[#0a1f44] px-4 sm:px-6 lg:px-8 shadow-[0_10px_30px_rgba(10,31,68,0.25)]">
        
        {/* Brand Logo (green leaf/drop emblem) */}
        <Link
          href={withTheme("/", THEME)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <span className="text-[#9fd40b]">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
              <path d="M12 2C7 8 4 12 4 16a8 8 0 0 0 16 0c0-4-3-8-8-14z" />
            </svg>
          </span>
          <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-white">
            Aqua<span className="text-[#9fd40b]">fix</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          {menu.slice(0, 6).map((item) => {
            const active = isItemActive(item, pathname, searchParams);
            return item.children && item.children.length > 0 ? (
              <NavDropdown key={item.label} item={item} active={active} />
            ) : (
              <Link
                key={item.href}
                href={withTheme(item.href, THEME)}
                className={[
                  "text-[14px] font-bold tracking-tight transition",
                  active ? "text-[#9fd40b]" : "text-white hover:text-[#9fd40b]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-5">
          {/* Phone CTA */}
          <a
            href="tel:+911222333444"
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#9fd40b] group-hover:bg-white/15 transition">
              <FaPhoneAlt className="text-xs" />
            </span>
            <div className="leading-tight text-left">
              <span className="block text-[9px] font-semibold text-white/60 uppercase tracking-wider">
                Call us
              </span>
              <span className="block text-[13px] sm:text-[14px] font-extrabold text-[#9fd40b]">
                (11) 222-333-444
              </span>
            </div>
          </a>

          {/* SignIn Pill Button (lime green) */}
          {primaryButton && (
            <Link
              href={withTheme(primaryButton.href || "/contact", THEME)}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#9fd40b] px-6 text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] shadow-md hover:bg-[#8fc00a] transition"
            >
              <FaUser className="text-[10px]" />
              {primaryButton.label}
            </Link>
          )}
        </div>

        {/* Mobile Menu Action Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15 transition focus:outline-none"
            aria-label="Open menu"
          >
            <FaBars className="text-base" />
          </button>
        </div>

      </div>

      {/* Slide-out Mobile Panel Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden backdrop-blur-sm">
          <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-[320px] bg-white p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header inside Mobile Drawer */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <Link
                  href={withTheme("/", THEME)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9fd40b] text-[#0a1f44]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0a1f44] fill-current">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </span>
                  <span className="font-sans text-lg font-black text-[#001b3d]">
                    Aqua<span className="text-[#9fd40b]">Fix</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-[#001b3d]"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-base" />
                </button>
              </div>

              {/* Mobile Drawer Menu Links */}
              <nav className="mt-8 flex flex-col gap-3">
                {menu.map((item) => {
                  const active = isItemActive(item, pathname, searchParams);
                  return (
                    <div key={item.label} className="flex flex-col">
                      <Link
                        href={withTheme(item.href, THEME)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={[
                          "rounded-xl px-4 py-3 text-[14.5px] font-extrabold transition",
                          active ? "bg-[#9fd40b]/10 text-[#9fd40b]" : "text-[#001b3d] hover:bg-gray-50",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {item.label}
                      </Link>
                      {item.children && item.children.length > 0 && (
                        <div className="ml-5 mt-1 border-l-2 border-gray-100/80 pl-3 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={withTheme(child.href, THEME)}
                              onClick={() => setMobileMenuOpen(false)}
                              className="rounded-lg py-2 px-3 text-[13px] font-bold text-[#001b3d]/70 hover:bg-gray-50 hover:text-[#9fd40b]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Contact & CTA Footer area inside drawer */}
            <div className="border-t border-gray-100 pt-5 mt-5">
              <a
                href="tel:+919876654321"
                className="flex items-center gap-3.5 rounded-2xl bg-[#9fd40b]/10 border border-[#9fd40b]/15 p-4 mb-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9fd40b] text-[#0a1f44]">
                  <FaPhoneAlt className="text-xs" />
                </span>
                <div className="text-left">
                  <span className="block text-[9px] font-extrabold text-[#9fd40b] uppercase tracking-wider">
                    Call Expert
                  </span>
                  <span className="block text-[14px] font-black text-[#001b3d]">
                    +91 98766 54321
                  </span>
                </div>
              </a>

              {primaryButton && (
                <Link
                  href={withTheme(primaryButton.href || "/contact", THEME)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#9fd40b] text-[14px] font-extrabold text-[#0a1f44] shadow-md shadow-[#9fd40b]/25"
                >
                  <FaUser className="text-[10px]" />
                  {primaryButton.label}
                </Link>
              )}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default function Header({ data }: { data: ResolvedSiteData }) {
  return (
    <Suspense>
      <HeaderContent data={data} />
    </Suspense>
  );
}
