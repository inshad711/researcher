import CompetitorAnalysisPageContent from "@/components/services/CompetitorAnalysisPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitor & Market Research Analysis in UAE | Researchers",
  description:
    "Expert competitor and market research analysis in UAE. Identify competitor strategies, market opportunities, and gain actionable insights to strengthen your business strategy.",
  alternates: {
    canonical: "/services/market-research-measurement/competitor-analysis",
  },
  keywords: [],
  openGraph: {
    title: "Competitor & Market Research Analysis in UAE | Researchers",
    description:
      "Expert competitor and market research analysis in UAE. Identify competitor strategies, market opportunities, and gain actionable insights to strengthen your business strategy.",
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
  return <CompetitorAnalysisPageContent />;
}
