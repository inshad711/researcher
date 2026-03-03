import type { MetadataRoute } from "next";

const SITE_URL = "https://www.researchers.me";

type BlogPost = {
  slug?: string;
  modified?: string;
  date?: string;
};

const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/case-studies",
  "/clients",
  "/contact",
  "/services",
  "/services/analytics",
  "/services/analytics/dashboard-reporting",
  "/services/analytics/data-analytics",
  "/services/analytics/data-integration",
  "/services/analytics/data-quality",
  "/services/analytics/master-data-management",
  "/services/business-analysis",
  "/services/business-analysis/process-analysis",
  "/services/business-analysis/product-analysis",
  "/services/business-intelligence",
  "/services/business-intelligence/ibm-cognos-analytics",
  "/services/business-intelligence/microsoft-power-bi",
  "/services/business-intelligence/qlikview-qliksense",
  "/services/business-intelligence/tableau",
  "/services/data-story-telling",
  "/services/feasibility-studies",
  "/services/loyalty",
  "/services/loyalty/designing-implementation-loyalty-rewards-program",
  "/services/market-research-measurement",
  "/services/market-research-measurement/brand-positioning-benchmarking",
  "/services/market-research-measurement/competitor-analysis",
  "/services/market-research-measurement/customer-experience-happiness",
  "/services/market-research-measurement/employee-satisfaction-engagement",
  "/services/market-research-measurement/marketing-consulting",
  "/services/market-research-measurement/mystery-shopping",
  "/services/market-research-measurement/qualitative-quantitative-surveys",
  "/services/technology",
  "/services/technology/artificial-intelligence",
  "/services/technology/artificial-intelligence/business-consultation-implementation",
  "/services/technology/blockchain",
  "/services/technology/blockchain/asset-tokenization",
  "/services/technology/blockchain/blockchain-infra-consulting",
  "/services/technology/blockchain/defi-consultation",
  "/services/technology/blockchain/on-chain-ecosystem-consulting",
  "/services/technology/digital-transformation",
  "/services/technology/digital-transformation/strategy-consultation",
  "/services/technology/digital-transformation/ui-ux",
  "/services/technology/web-3-0",
  "/services/technology/web-3-0/ideation",
  "/services/technology/web-3-0/market-making",
  "/services/technology/web-3-0/strategy-consultation",
  "/services/technology/web-3-0/tokenomics",
];

async function getBlogPostEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await fetch("https://bck.siyahfy.com/wp-json/custom/v1/posts", {
      next: { revalidate: 60 },
    });

    if (!response.ok) return [];

    const json = await response.json();
    const posts: BlogPost[] = Array.isArray(json?.data) ? json.data : [];

    return posts
      .filter((post) => typeof post?.slug === "string" && post.slug.length > 0)
      .map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.modified ?? post.date ?? new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogEntries = await getBlogPostEntries();

  return [...staticEntries, ...blogEntries];
}
