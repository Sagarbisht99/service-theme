import { redirect } from "next/navigation";
import { resolveTheme } from "@/lib/theme";

type Props = {
  searchParams: Promise<{ theme?: string; category?: string }>;
};

/** Portfolio is a simple gallery now — no per-project detail pages. */
export default async function Page({ searchParams }: Props) {
  const query = await searchParams;
  const theme = resolveTheme(query.theme);
  const params = new URLSearchParams();
  if (query.theme) params.set("theme", theme);
  if (query.category) params.set("category", query.category);
  const qs = params.toString();
  redirect(qs ? `/projects?${qs}` : "/projects");
}
