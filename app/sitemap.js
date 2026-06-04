import { PAGE_TO_PATH } from "@/lib/routes";

const SITE_URL = "https://germanmontenegro.com";

export default function sitemap() {
  const now = new Date();
  return Object.values(PAGE_TO_PATH).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
