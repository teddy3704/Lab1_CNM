const fallbackSiteUrl = "http://localhost:3000";

function resolveSiteUrl() {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL;

  if (!candidate) {
    return fallbackSiteUrl;
  }

  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteConfig = {
  title: "CTK46 - Lab 01",
  description:
    "Editorial landing page gioi thieu sinh vien Phan Van Tien, ket hop Next.js 16, React 19 va Server Actions cho bai thuc hanh CTK46.",
  author: "Phan Van Tien",
  siteUrl: resolveSiteUrl(),
  keywords: [
    "CTK46",
    "Next.js",
    "React",
    "TypeScript",
    "Lab 01",
    "Server Actions",
    "Phan Van Tien",
  ],
};