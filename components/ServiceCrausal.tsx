"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";

export type ServiceCarouselItem = {
  id: string;
  title: string;
  href: string;
  image: string;
};

const marketResearchProjects: ServiceCarouselItem[] = [
  {
    id: "mystery-shopping",
    title: "Mystery Shopping",
    href: "/services/market-research-measurement/mystery-shopping",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "customer-experience-happiness",
    title: "Customer Experience and Happiness",
    href: "/services/market-research-measurement/customer-experience-happiness",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "employee-satisfaction-engagement",
    title: "Employee Satisfaction and Engagement",
    href: "/services/market-research-measurement/employee-satisfaction-engagement",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "qualitative-quantitative-surveys",
    title: "Qualitative and Quantitative Surveys",
    href: "/services/market-research-measurement/qualitative-quantitative-surveys",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "brand-positioning-benchmarking",
    title: "Brand Positioning & Benchmarking",
    href: "/services/market-research-measurement/brand-positioning-benchmarking",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "competitor-analysis",
    title: "Competitor Analysis",
    href: "/services/market-research-measurement/competitor-analysis",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "marketing-consulting",
    title: "Marketing Consulting",
    href: "/services/market-research-measurement/marketing-consulting",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=900",
  },
];

function getCardsPerView(width: number) {
  if (width >= 1280) return 4;
  if (width >= 768) return 3;
  return 1;
}

function ResearchCard({ project }: { project: ServiceCarouselItem }) {
  return (
    <Link
      href={project.href}
      className="group block h-full rounded-2xl border border-gray-100 bg-white p-[6px] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative h-56 overflow-hidden rounded-[14px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-4 pt-4">
        <h3 className="font-sans text-base truncate font-medium text-slate-900">
          {project.title}
        </h3>
        <span className="mt-3 text-sm font-medium text-[#0A1D56]">
          View service
        </span>
      </div>
    </Link>
  );
}

export default function ServiceCrausal() {
  return (
    <ServiceCarouselSection
      eyebrow="Academic Research"
      title="Market Research & Measurement"
      description="Explore our market research services with direct access to each page."
      items={marketResearchProjects}
    />
  );
}

type ServiceCarouselSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceCarouselItem[];
};

export function ServiceCarouselSection({
  eyebrow,
  title,
  description,
  items,
}: ServiceCarouselSectionProps) {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      const nextCardsPerView = getCardsPerView(window.innerWidth);
      setCardsPerView(nextCardsPerView);
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(items.length - nextCardsPerView, 0)),
      );
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [items.length]);

  const maxIndex = Math.max(items.length - cardsPerView, 0);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className="bg-gray-50/30 px-4 pt-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#0A1D56]">
              <div className="rounded-full bg-[#0A1D56] p-0.5">
                <Dot size={16} strokeWidth={4} className="text-white" />
              </div>
              <span className="uppercase tracking-wider">{eyebrow}</span>
            </div>
            <h2 className="text-3xl font-medium text-[#101010] md:text-[44px]">
              {title}
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-4 md:items-end">
            <p className="font-sans md:text-right">{description}</p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous services"
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={!canGoPrev}
                className="rounded-full cursor-pointer bg-black p-3 text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                type="button"
                aria-label="Next services"
                onClick={() =>
                  setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
                }
                disabled={!canGoNext}
                className="rounded-full cursor-pointer bg-black p-3 text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden pb-3">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {items.map((project) => (
              <div
                key={project.id}
                className="w-full flex-none px-2 md:w-1/3 xl:w-1/4"
              >
                <ResearchCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
