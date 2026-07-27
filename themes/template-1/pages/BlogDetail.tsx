"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaComments,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { GalleryItem, ResolvedSiteData, ThemeId } from "@/lib/types";

const THEME = "template-1" as const;
const NAVY = "#0a1f44";
const LIME = "#9fd40b";

type Props = {
  data: ResolvedSiteData;
  theme: ThemeId;
  slug: string;
};

function buildParagraphs(post: GalleryItem): string[] {
  const lead =
    post.body ||
    "Practical plumbing advice from our licensed technicians — written to help you prevent damage, spot issues early, and know when to call a pro.";

  return [
    lead,
    "At AquaFix, we see the same problems every week: small leaks that turn into wall damage, drains that keep clogging, and water heaters that fail without warning. A little awareness goes a long way — and when you do need help, a clear quote and a tidy finish should be the standard, not the exception.",
    "If you are dealing with an active leak, no hot water, or a blocked main line, do not wait. Book a visit and our team will diagnose the issue on-site, explain the fix in plain language, and only start once you approve the quote.",
  ];
}

export default function BlogDetail({ data, theme, slug }: Props) {
  const posts = data.gallery?.galleryItems ?? [];
  const post = posts.find((item) => item.slug === slug);
  const [query, setQuery] = useState("");

  const latest = useMemo(() => {
    const others = posts.filter((item) => item.slug !== slug);
    const q = query.trim().toLowerCase();
    const filtered = q
      ? others.filter((item) => item.title.toLowerCase().includes(q))
      : others;
    return filtered.slice(0, 4);
  }, [posts, slug, query]);

  if (!post) return null;

  const paragraphs = buildParagraphs(post);
  const commentLabel = "03 Comments";

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={data.gallery?.pretitle || "Blog"}
        title={post.title}
        desc={post.date ? `Published ${post.date}` : data.gallery?.desc}
      />

      <section className="bg-white pb-14 pt-8 md:pb-16 md:pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Main article */}
            <article className="min-w-0 lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-[#eef2f7] bg-white shadow-[0_8px_28px_rgba(10,31,68,0.06)]">
                <div className="relative aspect-video w-full bg-[#f3f5f8] sm:aspect-2/1">
                  <MediaImage
                    themeId={data.themeId}
                    src={post.image}
                    alt={post.alt || post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 720px"
                    priority
                  />
                  <span
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-md text-[#0a1f44] shadow-md"
                    style={{ backgroundColor: LIME }}
                    aria-hidden
                  >
                    <FaComments className="text-sm" />
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold text-[#64748b]">
                <span className="inline-flex items-center gap-2">
                  <FaUser className="text-[11px]" style={{ color: NAVY }} aria-hidden />
                  Admin
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaComments className="text-[12px]" style={{ color: NAVY }} aria-hidden />
                  {commentLabel}
                </span>
                {post.date && (
                  <span className="text-[#94a3b8]">{post.date}</span>
                )}
              </div>

              <h1 className="mt-4 text-[1.65rem] font-extrabold leading-tight tracking-tight text-[#0a1f44] sm:text-[1.9rem] md:text-[2.1rem]">
                {post.title}
              </h1>

              <div className="mt-5 space-y-4 text-[14.5px] leading-[1.8] text-[#5b657a]">
                {paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#eef2f7] bg-[#f7f9fc] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[14px] font-extrabold text-[#0a1f44]">
                    Need a plumber for this issue?
                  </p>
                  <p className="mt-1 text-[13px] text-[#64748b]">
                    Book a visit — clear quote, licensed techs, tidy finish.
                  </p>
                </div>
                <Link
                  href={withTheme("/contact", THEME)}
                  className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-extrabold text-[#0a1f44] transition hover:opacity-90"
                  style={{ backgroundColor: LIME }}
                >
                  Book a service
                </Link>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside className="z-10 lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
              <div className="space-y-5">
                <form
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-white shadow-md"
                  style={{ backgroundColor: NAVY }}
                >
                  <label htmlFor="blog-search" className="sr-only">
                    Search posts
                  </label>
                  <input
                    id="blog-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Here"
                    className="min-w-0 flex-1 bg-transparent text-[14px] font-medium text-white placeholder:text-white/55 focus:outline-none"
                  />
                  <FaSearch className="shrink-0 text-sm text-white/90" aria-hidden />
                </form>

                <div className="rounded-2xl border border-[#e8edf4] bg-[#f7f9fc] p-4 sm:p-5">
                  <h2 className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#0a1f44]">
                    Latest Posts
                  </h2>

                  <div className="mt-4 flex flex-col gap-4">
                    {latest.length > 0 ? (
                      latest.map((item) => {
                        const href =
                          item.href ||
                          (item.slug ? `/blog/${item.slug}` : "/blog");
                        return (
                          <Link
                            key={item.slug || item.title}
                            href={withTheme(href, THEME)}
                            className="group flex items-start gap-3"
                          >
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#e8edf4]">
                              <MediaImage
                                themeId={data.themeId}
                                src={item.image}
                                alt={item.alt || item.title}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-105"
                                sizes="64px"
                              />
                            </div>
                            <div className="min-w-0 pt-0.5">
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#64748b]">
                                <FaUser
                                  className="text-[9px]"
                                  style={{ color: NAVY }}
                                  aria-hidden
                                />
                                Admin
                              </span>
                              <p className="mt-1 line-clamp-2 text-[13px] font-bold leading-snug text-[#0a1f44] transition group-hover:text-[#7aab08]">
                                {item.title}
                              </p>
                            </div>
                          </Link>
                        );
                      })
                    ) : (
                      <p className="py-2 text-[13px] text-[#94a3b8]">
                        No posts match your search.
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className="rounded-2xl px-5 py-6 text-white"
                  style={{ backgroundColor: NAVY }}
                >
                  <p className="text-[16px] font-extrabold leading-snug">
                    Got a plumbing question?
                  </p>
                  <p className="mt-2 text-[13px] text-white/65">
                    Talk to our team for a clear quote and same-day help.
                  </p>
                  <Link
                    href={withTheme("/contact", THEME)}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-[12.5px] font-extrabold text-[#0a1f44] transition hover:opacity-90"
                    style={{ backgroundColor: LIME }}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
