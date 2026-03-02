import FeasibilityStudiesPageContent from "@/components/services/FeasibilityStudiesPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feasibility Study in Dubai, UAE | Reduce Risk Before You Invest",
  description:
    "Planning a business in Dubai? Our feasibility studies deliver market validation, financial clarity, and risk insights to help you invest with confidence.",
  alternates: {
    canonical: "/services/feasibility-studies",
  },
  keywords: [
    "Feasibility Study in Dubai / UAE",
  ],
  openGraph: {
    title: "Feasibility Study in Dubai, UAE | Reduce Risk Before You Invest",
    description:
      "Planning a business in Dubai? Our feasibility studies deliver market validation, financial clarity, and risk insights to help you invest with confidence.",
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
  return <FeasibilityStudiesPageContent />;
}
