import type { Metadata } from "next";
import DataIntegrationPageContent from "@/components/services/DataIntegrationPageContent";

export const metadata: Metadata = {
  title: "Enterprise Data Integration Solutions in Dubai",
  description:
    "Combine data from multiple systems into one unified view. Our data integration solutions help businesses improve data access, analytics, and operational efficiency.",
  alternates: {
    canonical: "/services/analytics/data-integration",
  },
  keywords: [],
  openGraph: {
    title: "Enterprise Data Integration Solutions in Dubai",
    description:
      "Combine data from multiple systems into one unified view. Our data integration solutions help businesses improve data access, analytics, and operational efficiency.",
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
  return <DataIntegrationPageContent />;
}
