"use client";

import { useState } from "react";
import Script from "next/script";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is Tableau used for?",
    answer:
      "Tableau is a data visualization and business intelligence platform used to create interactive dashboards, reports, and data visualizations for better analysis and decision-making.",
  },
  {
    question: "Can Tableau connect to different data sources?",
    answer:
      "Yes, Tableau can connect to multiple data sources such as databases, spreadsheets, cloud platforms, and enterprise systems.",
  },
  {
    question: "Is Tableau suitable for non-technical users?",
    answer:
      "Yes, Tableau offers a user-friendly drag-and-drop interface that allows business users to analyze data and build dashboards without advanced technical skills.",
  },
  {
    question: "What types of dashboards can be created in Tableau?",
    answer:
      "Tableau allows users to create interactive dashboards for sales analysis, financial reporting, operational monitoring, and business performance tracking.",
  },
  {
    question: "Do you provide Tableau implementation services?",
    answer:
      "Yes, we provide Tableau implementation, dashboard development, data integration, and ongoing support services for organizations.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function TableauPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="tableau-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              TABLEAU
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Tableau
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Tableau is a leading business intelligence and data visualization
              platform that helps organizations analyze data and turn it into
              meaningful insights. It enables businesses to explore complex
              datasets and present information through interactive dashboards
              and visual reports.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Tableau provides a user-friendly interface that allows business
              users, analysts, and decision-makers to easily explore and manage
              data. With simple drag-and-drop functionality, users can quickly
              create visualizations and share insights across teams to support
              better business decisions.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Tableau business intelligence dashboards"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Tableau data integration and analytics"
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Tableau
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
              Tableau business intelligence dashboards
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              The Tableau platform can connect to multiple data sources,
              including databases, cloud applications, and enterprise systems.
              This allows organizations to combine data from different sources
              and gain a complete view of their business performance.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Tableau supports advanced analytics features such as machine
              learning, statistical analysis, natural language queries, and
              smart data preparation. These capabilities help both technical
              users and business users discover insights faster and improve
              data-driven decision-making across the organization.
            </p>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
              Tableau data integration and analytics
            </p>
          </div>
        </div>
      </section>

      <section className="border-slate-200 bg-white">
        <div className="templateContainer grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="self-start lg:col-span-4 lg:sticky lg:top-32">
            <div className="relative mb-6 inline-block">
              <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-slate-900 md:text-3xl">
                Frequently Ask Questions
              </h2>
              <svg
                className="absolute left-0 -bottom-4 w-full"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15 Q150 0 298 15"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="max-w-sm font-sans text-slate-700">
              Expert answers to common Tableau questions.
            </h3>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-300">
              {faqItems.map((item, index) => (
                <div key={item.question} className="py-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors hover:text-blue-600 focus:outline-none"
                  >
                    <span className="pr-8 text-lg font-light text-black md:text-xl">
                      {item.question}
                    </span>
                    <Plus
                      className={`h-6 w-6 shrink-0 transform text-black transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index
                        ? "max-h-96 pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-sans text-sm leading-7 text-slate-700 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
