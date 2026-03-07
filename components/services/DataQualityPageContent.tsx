"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type TechniqueItem = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const importancePoints = [
  "Improve the accuracy of analytics and reporting",
  "Support reliable business decisions",
  "Reduce data inconsistencies and duplication",
  "Maintain trust in enterprise data systems",
];

const qualityDimensions = [
  {
    title: "Completeness",
    description:
      "Completeness refers to whether all required data fields and information are available within a dataset. Missing data can reduce the effectiveness of analytics and reporting processes.",
  },
  {
    title: "Conformity",
    description:
      "Conformity ensures that data follows standardized formats and defined rules. This allows data from different sources to be integrated and interpreted consistently.",
  },
  {
    title: "Reliability",
    description:
      "Reliable data is accurate and trustworthy. It ensures that business decisions are based on dependable information.",
  },
  {
    title: "Relevance",
    description:
      "Relevance ensures that the data collected and analyzed is meaningful and useful for business objectives and decision-making processes.",
  },
];

const techniques: TechniqueItem[] = [
  {
    title: "Data Profiling",
    description:
      "Data profiling involves analyzing datasets to understand their structure, quality, and potential inconsistencies. This helps identify data issues before they affect analytics processes.",
  },
  {
    title: "Data Matching",
    description:
      "Data matching compares datasets to identify duplicate or related records. This technique is commonly used to maintain consistent customer or product information across systems.",
  },
  {
    title: "Data Quality Reporting",
    description:
      "Data quality reporting provides insights into the current state of data quality within an organization. It helps monitor key performance indicators related to data accuracy and consistency.",
  },
  {
    title: "Master Data Management (MDM)",
    description:
      "Master Data Management ensures that critical business data remains consistent and synchronized across enterprise systems.",
  },
  {
    title: "Customer Data Integration (CDI)",
    description:
      "Customer Data Integration focuses on consolidating customer data from multiple sources to create a unified customer profile.",
  },
  {
    title: "Product Information Management (PIM)",
    description:
      "Product Information Management helps maintain accurate and consistent product data across different business platforms.",
  },
  {
    title: "Digital Asset Management (DAM)",
    description:
      "Digital Asset Management organizes and manages digital files such as images, documents, and media assets to ensure consistent data accessibility.",
  },
];

const whyChooseResearchers = [
  "Identifying data inconsistencies and quality issues",
  "Implementing data validation and monitoring processes",
  "Improving data accuracy and reliability",
  "Supporting analytics and reporting initiatives",
];

const benefits = [
  "Reliable insights for strategic decisions",
  "Fewer reporting errors and duplicated records",
  "Higher trust in enterprise datasets",
  "Better operational efficiency across teams",
];

const faqItems: FaqItem[] = [
  {
    question: "What is data quality in data management?",
    answer:
      "Data quality refers to the accuracy, completeness, reliability, and relevance of data used within an organization. High-quality data ensures that analytics, reporting, and business decisions are based on reliable information.",
  },
  {
    question: "Why is data quality important for businesses?",
    answer:
      "Data quality is important because inaccurate or incomplete data can lead to incorrect insights and poor decision-making. Maintaining high data quality helps organizations improve analytics accuracy and operational efficiency.",
  },
  {
    question: "What are the main dimensions of data quality?",
    answer:
      "The key dimensions of data quality typically include completeness, conformity, reliability, and relevance. These factors help measure and maintain the accuracy and usefulness of business data.",
  },
  {
    question: "How can businesses improve data quality?",
    answer:
      "Businesses can improve data quality by implementing data validation processes, monitoring data quality KPIs, performing data profiling, and maintaining consistent master data management practices.",
  },
  {
    question: "Do you provide data quality management services?",
    answer:
      "Yes. Our team provides data quality services that help organizations identify data issues, improve data accuracy, and maintain reliable datasets for analytics and business decision-making.",
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

export default function DataQualityPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="data-quality-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DATA QUALITY SERVICES IN DUBAI, UAE
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Data Quality Services in Dubai, UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              As data becomes a core part of modern business operations, the
              quality of the data gathered, stored, and used during business
              processes has a significant impact on overall business success.
              Organizations rely on accurate and reliable data to support
              analytics, reporting, and strategic decision-making.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Data quality services focus on ensuring that business data
              remains accurate, consistent, complete, and reliable across
              systems. Poor data quality can lead to incorrect insights,
              inefficient operations, and flawed decision-making processes.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we help organizations improve and maintain high
              data quality standards by applying structured data management
              practices and data validation techniques.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/analytics"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Explore Analytics Services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Team reviewing data quality and analytics performance"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Business team evaluating data quality metrics"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Data Quality is Important for Businesses
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              High-quality data is essential for organizations that rely on
              data-driven insights to guide their operations and strategies.
              When data is incomplete, inconsistent, or inaccurate, it can
              negatively impact analytics results and business performance.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Effective data quality management helps organizations:
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
              {importancePoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              By ensuring high data quality standards, organizations can
              maximize the value of their data assets.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Key Dimensions
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Key Data Quality Dimensions
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              To measure and improve data quality, organizations rely on
              several important data quality dimensions.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {qualityDimensions.map((dimension) => (
                <article
                  key={dimension.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {dimension.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    {dimension.description}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <div className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Workshop on data standards and quality dimensions"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Data Quality Management Techniques
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-center md:text-base">
            Organizations use several techniques to evaluate and improve the
            quality of their data.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {techniques.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              How Data Quality Supports Better Business Decisions
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              High-quality data enables organizations to generate reliable
              insights and improve business decision-making. When data is
              accurate, consistent, and well-structured, businesses can trust
              the results of their analytics and reporting systems.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Data quality also improves operational efficiency by reducing
              errors, eliminating duplicate records, and ensuring that
              employees work with reliable information.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <p className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{benefit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/ef920cc1-46a3-4604-9dd1-3ea562976bd9.jpg"
              alt="Analysts improving reporting accuracy with trusted data"
              className="h-full min-h-[340px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Why Researchers
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Why Choose Researchers for Data Quality Services?
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, we help organizations improve their data quality by
            applying structured data governance and quality management
            practices.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {whyChooseResearchers.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-700 md:text-base"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            Our team works closely with organizations to ensure that their data
            remains reliable, consistent, and ready for business analysis.
          </p>
        </div>
      </section>

      <section className="border-slate-200 bg-white">
        <div className="templateContainer grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="self-start lg:col-span-4 lg:sticky lg:top-32">
            <div className="relative mb-6 inline-block">
              <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-slate-900 md:text-3xl">
                Frequently Asked Questions
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
              Answers to common questions about data quality management.
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

      <section className="templateContainer mt-6 mb-8">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-6 md:p-8 lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Call To Action
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-4xl">
              Reliable data is essential for organizations that rely on
              analytics and data-driven decision-making.
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              Contact our team today to learn how our data quality services in
              Dubai, UAE can help your organization maintain accurate,
              consistent, and reliable business data.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Stronger analytics accuracy
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                More reliable reporting
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Better business decisions
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Start your data quality initiative.
            </h3>
            <p className="mt-3 font-sans text-white">
              Contact our team to improve data accuracy, consistency, and
              reliability across your organization.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/analytics"
                className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-300"
              >
                View Analytics Services
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
