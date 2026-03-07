import TableauPageContent from "@/components/services/TableauPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tableau Services in Dubai | Tableau Data Visualization & BI Solutions",
  description:
    "Professional Tableau services in Dubai for interactive dashboards, powerful data visualization, and BI solutions that turn complex data into clear, actionable insights.",
  alternates: {
    canonical: "/services/business-intelligence/tableau",
  },
  keywords: [],
  openGraph: {
    title:
      "Tableau Services in Dubai | Tableau Data Visualization & BI Solutions",
    description:
      "Professional Tableau services in Dubai for interactive dashboards, powerful data visualization, and BI solutions that turn complex data into clear, actionable insights.",
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
  return <TableauPageContent />;
}
