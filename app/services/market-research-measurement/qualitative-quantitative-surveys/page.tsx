import type { Metadata } from "next";
import QualitativeQuantitativeSurveysPageContent from "@/components/services/QualitativeQuantitativeSurveysPageContent";

export const metadata: Metadata = {
  title: "Qualitative & Quantitative Survey Analysis in Dubai",
  description:
    "Expert quantitative and qualitative survey analysis in Dubai. Researchers helps businesses understand customer behavior, insights, and market trends.",
  alternates: {
    canonical:
      "/services/market-research-measurement/qualitative-quantitative-surveys",
  },

  openGraph: {
    title: "Qualitative & Quantitative Survey Analysis in Dubai",
    description:
      "Expert quantitative and qualitative survey analysis in Dubai. Researchers helps businesses understand customer behavior, insights, and market trends.",
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
  return <QualitativeQuantitativeSurveysPageContent />;
}
