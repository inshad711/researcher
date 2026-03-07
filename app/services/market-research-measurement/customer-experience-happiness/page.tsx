import CustomerExperienceHappinessPageContent from "@/components/services/CustomerExperienceHappinessPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Satisfaction Services in UAE | Researchers",
  description:
    "Improve customer experience with professional customer satisfaction research services in UAE. Gain insights, feedback, and actionable strategies.",
  alternates: {
    canonical:
      "/services/market-research-measurement/customer-experience-happiness",
  },
  keywords: [],
  openGraph: {
    title: "Customer Satisfaction Services in UAE | Researchers",
    description:
      "Improve customer experience with professional customer satisfaction research services in UAE. Gain insights, feedback, and actionable strategies.",
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
  return <CustomerExperienceHappinessPageContent />;
}
