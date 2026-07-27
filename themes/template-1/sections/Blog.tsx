"use client";

import Link from "next/link";
import { FaArrowRight, FaTint } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;
const ACCENT = "#1052E0";
const NAVY = "#0a1f44";

export default function Blog({ data }: { data: ResolvedSiteData }) {
  const gallery = data.gallery;
  const posts = (gallery?.galleryItems || []).slice(0, 4);
  if (!posts.length) return null;

  const readMoreLabel =
    gallery?.buttons?.find((b) => /read/i.test(b.label))?.label || "Read More";

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-310 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2.5">
            <FaTint className="text-sm" style={{ color: ACCENT }} aria-hidden />
            <p
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              {gallery?.pretitle || "Latest Blogs"}
            </p>
            <FaTint className="text-sm" style={{ color: ACCENT }} aria-hidden />
          </div>
          <h2
            className="mt-2 text-[1.65rem] font-extrabold tracking-tight sm:text-[2rem]"
            style={{ color: NAVY }}
          >
            {gallery?.title || "Plumbing Tips & Insights"}
          </h2>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => {
            const href =
              post.href || (post.slug ? `/blog/${post.slug}` : "/blog");
            return (
              <article
                key={post.title}
                className="group overflow-hidden rounded-2xl border border-[#eef2f7] bg-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,31,68,0.07)]"
              >
                <div className="relative h-44 w-full overflow-hidden bg-white">
                  <MediaImage
                    themeId={data.themeId}
                    src={post.image}
                    alt={post.alt || post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="px-4 py-4">
                  {post.date && (
                    <p className="text-[12px] text-[#94a3b8]">{post.date}</p>
                  )}
                  <h3
                    className="mt-1.5 line-clamp-2 min-h-10 text-[14px] font-extrabold leading-snug"
                    style={{ color: NAVY }}
                  >
                    {post.title}
                  </h3>
                  <Link
                    href={withTheme(href, THEME)}
                    className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-bold transition hover:gap-2.5"
                    style={{ color: ACCENT }}
                  >
                    {readMoreLabel}
                    <FaArrowRight className="text-[10px]" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
