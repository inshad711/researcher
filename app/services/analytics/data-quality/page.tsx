import DataQualityPageContent from "@/components/services/DataQualityPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Data Quality Services in Dubai, UAE",
  description:
    "Best data quality services in Dubai, UAE. Improve data accuracy, consistency, and reliability with advanced data quality management solutions.",
  alternates: {
    canonical: "/services/analytics/data-quality",
  },
  keywords: [],
  openGraph: {
    title: "Top Data Quality Services in Dubai, UAE",
    description:
      "Best data quality services in Dubai, UAE. Improve data accuracy, consistency, and reliability with advanced data quality management solutions.",
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
  return <DataQualityPageContent />;
}
