import BrandPositioningPageContent from "@/components/services/BrandPositioningPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Positioning & Benchmark Survey Company in Dubai",
  description:
    "Professional brand positioning and benchmarking survey services in Dubai. Analyze brand perception, measure market performance, and gain competitive insights.",
  alternates: {
    canonical:
      "/services/market-research-measurement/brand-positioning-benchmarking",
  },
  keywords: [],
  openGraph: {
    title: "Brand Positioning & Benchmark Survey Company in Dubai",
    description:
      "Professional brand positioning and benchmarking survey services in Dubai. Analyze brand perception, measure market performance, and gain competitive insights.",
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
  return <BrandPositioningPageContent />;
}
