import EmployeeSatisfactionEngagementPageContent from "@/components/services/EmployeeSatisfactionEngagementPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employee Satisfaction Analysis in Dubai | Researchers",
  description:
    "Measure employee engagement and workplace satisfaction with professional employee satisfaction analysis services in Dubai. Improve productivity and retention.",
  alternates: {
    canonical:
      "/services/market-research-measurement/employee-satisfaction-engagement",
  },
  keywords: [],
  openGraph: {
    title: "Employee Satisfaction Analysis in Dubai | Researchers",
    description:
      "Measure employee engagement and workplace satisfaction with professional employee satisfaction analysis services in Dubai. Improve productivity and retention.",
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
  return <EmployeeSatisfactionEngagementPageContent />;
}
