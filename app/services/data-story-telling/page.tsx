import DataStoryTellingPageContent from "@/components/services/DataStoryTellingPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Storytelling Services Dubai & UAE | Researchers",
  description:
    "Turn complex data into growth. Our Dubai experts provide data visualization & storytelling to help UAE businesses drive smarter decisions and measurable results.",
  alternates: {
    canonical: "/services/data-story-telling",
  },
  keywords: [
    "Data Storytelling Services",
    "Data Story Telling",
  ],
  openGraph: {
    title: "Data Storytelling Services Dubai & UAE | Researchers",
    description:
      "Turn complex data into growth. Our Dubai experts provide data visualization & storytelling to help UAE businesses drive smarter decisions and measurable results.",
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
  return <DataStoryTellingPageContent />;
}
