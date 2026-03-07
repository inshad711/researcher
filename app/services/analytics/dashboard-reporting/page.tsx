import type { Metadata } from "next";
import DashboardReportingPageContent from "@/components/services/DashboardReportingPageContent";

export const metadata: Metadata = {
  title: "Expert Dashboard Reporting Services in UAE",
  description:
    "Best dashboard reporting services in UAE. Visualize KPIs, monitor business performance, and gain real-time insights through interactive data visualization dashboards.",
  alternates: {
    canonical: "/services/analytics/dashboard-reporting",
  },
  openGraph: {
    title: "Expert Dashboard Reporting Services in UAE",
    description:
      "Best dashboard reporting services in UAE. Visualize KPIs, monitor business performance, and gain real-time insights through interactive data visualization dashboards.",
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
  return <DashboardReportingPageContent />;
}
