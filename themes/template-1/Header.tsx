"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  FaBars,
  FaChevronDown,
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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const children = item.children ?? [];
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setOpen(true);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => {
    function clickAway(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", clickAway);
    return () => {
      document.removeEventListener("mousedown", clickAway);
      clearCloseTimer();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={[
          "flex items-center gap-1.5 text-[14px] font-bold tracking-tight transition focus:outline-none",
          active || open ? "text-[#1052E0]" : "text-[#0a1f44] hover:text-[#1052E0]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {item.label}
        <FaChevronDown
          className={[
            "text-[10px] opacity-80 transition-transform duration-200",
            open ? "rotate-180" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />
      </button>

      {/* Invisible bridge so hover doesn't break between trigger and panel */}
      <div
        className={[
          "absolute left-0 top-full z-50 pt-3",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          role="menu"
          className={[
            "w-[260px] origin-top-left rounded-2xl border border-[#e8edf4] bg-white p-2 shadow-[0_16px_40px_rgba(10,31,68,0.14)] ring-1 ring-black/5 transition duration-150",
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-1 scale-95 opacity-0",
          ].join(" ")}
        >
          <div className="flex flex-col gap-0.5">
            {children.map((child) => {
              const childActive = hrefMatches(child.href, pathname, searchParams);
              return (
                <Link
                  key={child.href}
                  href={withTheme(child.href, THEME)}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={[
                    "group flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-[13px] font-bold transition",
                    childActive
                      ? "bg-[#1052E0]/15 text-[#1052E0]"
                      : "text-[#0a1f44]/80 hover:bg-[#f3f6fb] hover:text-[#0a1f44]",
                  ].join(" ")}
                >
                  <span className="leading-snug">{child.label}</span>
                  <span
                    className={[
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] transition",
                      childActive
                        ? "bg-[#1052E0] text-white"
                        : "bg-transparent text-[#94a3b8] group-hover:bg-[#1052E0]/25 group-hover:text-white",
                    ].join(" ")}
                    aria-hidden
                  >
                    ›
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandLogo({ name }: { name: string }) {
  const match = name.match(/^(.*)(Fix)$/i);
  if (!match) return <>{name}</>;
  return (
    <>
      {match[1]}
      <span className="text-[#1052E0]">{match[2]}</span>
    </>
  );
}

function HeaderContent({ data }: { data: ResolvedSiteData }) {
  const { header, footer, template } = data;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menu = header.menu || [];
  const primaryButton = header.buttons?.[0];
  const brand = header.logo || footer.logoImageTitle || template.title;

  return (
    <header className="fixed top-0 left-0 z-40 w-full pt-0">
      <div className="flex h-[66px] w-full items-center justify-between border-b border-[#e8edf4] bg-white px-4 sm:px-6 lg:px-8 shadow-[0_8px_24px_rgba(10,31,68,0.06)]">
        {/* Brand Logo */}
        <Link
          href={withTheme("/", THEME)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <span className="text-[#1052E0]">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
              <path d="M12 2C7 8 4 12 4 16a8 8 0 0 0 16 0c0-4-3-8-8-14z" />
            </svg>
          </span>
          <span className="font-sans text-xl sm:text-2xl font-black tracking-tight text-[#0a1f44]">
            <BrandLogo name={brand} />
          </span>
        </Link>

        {/* Desktop Navigation — full menu from siteData.json */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {menu.map((item) => {
            const active = isItemActive(item, pathname, searchParams);
            return item.children && item.children.length > 0 ? (
              <NavDropdown key={item.label} item={item} active={active} />
            ) : (
              <Link
                key={item.href + item.label}
                href={withTheme(item.href, THEME)}
                className={[
                  "text-[13.5px] lg:text-[14px] font-bold tracking-tight transition",
                  active ? "text-[#1052E0]" : "text-[#0a1f44] hover:text-[#1052E0]",
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
          {primaryButton && (
            <Link
              href={withTheme(primaryButton.href || "/contact", THEME)}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#1052E0] px-6 text-[13px] sm:text-[14px] font-extrabold text-white shadow-md shadow-[#1052E0]/20 hover:bg-[#0d46c2] transition"
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
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef5ff] text-[#0a1f44] hover:bg-[#dbe7f6] transition focus:outline-none"
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
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <Link
                  href={withTheme("/", THEME)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1052E0] text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0a1f44] fill-current">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </span>
                  <span className="font-sans text-lg font-black text-[#0a1f44]">
                    <BrandLogo name={brand} />
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-[#0a1f44]"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-base" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-2">
                {menu.map((item) => {
                  const active = isItemActive(item, pathname, searchParams);
                  const hasChildren = Boolean(item.children?.length);
                  return (
                    <div key={item.label} className="flex flex-col">
                      <Link
                        href={withTheme(item.href, THEME)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={[
                          "rounded-xl px-4 py-3 text-[14.5px] font-extrabold transition",
                          active
                            ? "bg-[#1052E0]/10 text-[#1052E0]"
                            : "text-[#0a1f44] hover:bg-gray-50",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-[#e8edf4] pl-2">
                          {item.children!.map((child) => {
                            const childActive = hrefMatches(
                              child.href,
                              pathname,
                              searchParams
                            );
                            return (
                              <Link
                                key={child.href}
                                href={withTheme(child.href, THEME)}
                                onClick={() => setMobileMenuOpen(false)}
                                className={[
                                  "block rounded-lg px-3 py-2 text-[13px] font-bold transition",
                                  childActive
                                    ? "bg-[#1052E0]/15 text-[#1052E0]"
                                    : "text-[#0a1f44]/70 hover:bg-gray-50 hover:text-[#0a1f44]",
                                ].join(" ")}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            <div className="border-t border-gray-100 pt-5 mt-5">
              {primaryButton && (
                <Link
                  href={withTheme(primaryButton.href || "/contact", THEME)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1052E0] text-[14px] font-extrabold text-white shadow-md shadow-[#1052E0]/25"
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
      <>
        <HeaderContent data={data} />
        {/* Prevent overlap with fixed header */}
        <div className="h-[66px]" aria-hidden />
      </>
    </Suspense>
  );
}
