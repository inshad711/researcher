import IbmCognosAnalyticsPageContent from "@/components/services/IbmCognosAnalyticsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IBM Cognos Analytics Services in Dubai | BI & Reporting Solutions",
  description:
    "Get IBM Cognos Analytics services in Dubai to build powerful dashboards, reports, and business intelligence solutions that help organizations analyze data and make better decisions.",
  alternates: {
    canonical: "/services/business-intelligence/ibm-cognos-analytics",
  },
  keywords: [],
  openGraph: {
    title: "IBM Cognos Analytics Services in Dubai | BI & Reporting Solutions",
    description:
      "Get IBM Cognos Analytics services in Dubai to build powerful dashboards, reports, and business intelligence solutions that help organizations analyze data and make better decisions.",
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
  return <IbmCognosAnalyticsPageContent />;
}
