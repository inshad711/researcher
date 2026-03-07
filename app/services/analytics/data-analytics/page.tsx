import type { Metadata } from "next";
import DataAnalyticsPageContent from "@/components/services/DataAnalyticsPageContent";

export const metadata: Metadata = {
  title: "Best Data Analytics Services in Dubai, UAE",
  description:
    "Expert data analytics services in Dubai, UAE. Transform complex data into actionable insights with advanced analytics and research-driven analysis.",
  alternates: {
    canonical: "/services/analytics/data-analytics",
  },
  keywords: [],
  openGraph: {
    title: "Best Data Analytics Services in Dubai, UAE",
    description:
      "Expert data analytics services in Dubai, UAE. Transform complex data into actionable insights with advanced analytics and research-driven analysis.",
    type: "website",
    images: [
      {
        url: "/logo1.png",
        alt: "Researchers logo",
      },
    ],
  },
};

export default function Page() {
  return <DataAnalyticsPageContent />;
}
