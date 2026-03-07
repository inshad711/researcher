import MasterDataManagementPageContent from "@/components/services/MasterDataManagementPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Data Management Services in Dubai, UAE",
  description:
    "Looking for Master Data Management services in UAE? Maintain accurate, consistent, and well-governed business data with advanced MDM solutions.",
  alternates: {
    canonical: "/services/analytics/master-data-management",
  },
  keywords: [],
  openGraph: {
    title: "Master Data Management Services in Dubai, UAE",
    description:
      "Looking for Master Data Management services in UAE? Maintain accurate, consistent, and well-governed business data with advanced MDM solutions.",
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
  return <MasterDataManagementPageContent />;
}
