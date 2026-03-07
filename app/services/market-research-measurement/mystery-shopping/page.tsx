import MysteryShoppingPageContent from "@/components/services/MysteryShoppingPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Mystery Shopping Company in Dubai & UAE",
  description:
    "Measure real customer experience with expert mystery shopping services in UAE. Enhance service quality, staff performance & brand consistency.",
  alternates: {
    canonical: "/services/market-research-measurement/mystery-shopping",
  },
  keywords: [],
  openGraph: {
    title: "Professional Mystery Shopping Company in Dubai & UAE",
    description:
      "Measure real customer experience with expert mystery shopping services in UAE. Enhance service quality, staff performance & brand consistency.",
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
  return <MysteryShoppingPageContent />;
}
