"use client";

import { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is IBM Cognos Analytics used for?",
    answer:
      "IBM Cognos Analytics is a business intelligence platform used for reporting, dashboards, and data analysis to help organizations make data-driven decisions.",
  },
  {
    question: "Can IBM Cognos Analytics connect to multiple data sources?",
    answer:
      "Yes, IBM Cognos Analytics can connect to various data sources such as databases, data warehouses, and enterprise applications.",
  },
  {
    question: "Is IBM Cognos Analytics suitable for large organizations?",
    answer:
      "Yes, it is widely used by enterprises because it supports large data environments and provides advanced reporting and analytics capabilities.",
  },
  {
    question: "Can users access IBM Cognos Analytics on mobile devices?",
    answer:
      "Yes, Cognos Analytics can be accessed through both desktop and mobile devices, allowing users to view dashboards and reports anytime.",
  },
  {
    question: "Do you provide IBM Cognos Analytics implementation services?",
    answer:
      "Yes, we provide IBM Cognos Analytics implementation, configuration, dashboard development, and reporting solutions for organizations.",
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

export default function IbmCognosAnalyticsPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="ibm-cognos-analytics-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              IBM COGNOS ANALYTICS
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              IBM Cognos Analytics
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              IBM Cognos Analytics is a powerful business intelligence (BI)
              platform that helps organizations analyze data and generate
              meaningful insights. It provides tools for reporting, dashboards,
              data visualization, and analytics that allow businesses to better
              understand their operational and business data.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              IBM Cognos Analytics enables users across an organization to
              create reports, analyze information, and monitor key business
              metrics. With access to accurate data and reports, businesses can
              make informed decisions and improve overall performance.
            </p>
          </div>
          <div className="lg:col-span-5">
            <Image
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="IBM Cognos Analytics"
              width={1200}
              height={800}
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Image
              src="/image/46908.webp"
              alt="IBM Cognos Analytics dashboard and reports"
              width={1200}
              height={800}
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              IBM Cognos Analytics
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
              IBM Cognos Analytics dashboard and reports
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Cognos Analytics can be accessed through both desktop and mobile
              devices, allowing users to work with data from anywhere.
              Analysts, report authors, data modelers, and administrators can
              upload data files, connect to multiple data sources, and create
              dashboards or visualizations to present insights clearly.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              After installation and configuration, administrators can manage
              security settings and connect enterprise data sources. The
              platform provides different access levels and interfaces based on
              user roles, ensuring secure and controlled access to business
              data.
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
              IBM Cognos Analytics dashboard and reports
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
                className="absolute bottom-[-1rem] left-0 w-full"
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
