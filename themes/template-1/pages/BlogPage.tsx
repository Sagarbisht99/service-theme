"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const NAVY = "#0a1f44";

export default function BlogPage({ data, theme }: Props) {
  const gallery = data.gallery;
  const posts = gallery?.galleryItems ?? [];

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={gallery?.pretitle || "Blog"}
        title={gallery?.title || "Plumbing Tips & Insights"}
        desc={gallery?.desc}
      />

      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {posts.map((post) => {
              const href =
                post.href || (post.slug ? `/blog/${post.slug}` : "/blog");

              return (
                <Link
                  key={post.slug || post.title}
                  href={withTheme(href, theme)}
                  className="group overflow-hidden rounded-md bg-white shadow-[0_4px_18px_rgba(10,31,68,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,31,68,0.12)]"
                >
                  <div className="relative aspect-16/11 w-full overflow-hidden bg-[#f3f5f8]">
                    <MediaImage
                      themeId={data.themeId}
                      src={post.image}
                      alt={post.alt || post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    />
                  </div>

                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    {post.date && (
                      <p className="text-[12px] font-medium text-[#94a3b8]">
                        {post.date}
                      </p>
                    )}
                    <h2
                      className="mt-1.5 line-clamp-2 text-[14px] font-extrabold leading-snug sm:text-[15px]"
                      style={{ color: NAVY }}
                    >
                      {post.title}
                    </h2>
                    {post.body && (
                      <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-[#8b93a7]">
                        {post.body}
                      </p>
                    )}
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#0a1f44] transition group-hover:gap-2.5 group-hover:text-[#7aab08]">
                      Read more
                      <FaArrowRight className="text-[10px]" aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {posts.length === 0 && (
            <p className="py-16 text-center text-[14px] text-[#64748b]">
              No blog posts available yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
