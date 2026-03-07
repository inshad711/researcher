"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type InfoCard = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const masterDataExamples = [
  "Customer information",
  "Product data",
  "Supplier and vendor records",
  "Employee data",
  "Financial and operational data",
];

const keyComponents: InfoCard[] = [
  {
    title: "Data Governance",
    description:
      "Data governance defines the policies, standards, and processes that control how master data is created, maintained, and used within an organization.",
  },
  {
    title: "Data Quality Management",
    description:
      "Data quality management ensures that master data remains accurate, complete, and consistent across systems by removing duplicates and correcting errors.",
  },
  {
    title: "Data Integration",
    description:
      "MDM integrates data from multiple business applications and systems, ensuring that information remains synchronized across the enterprise.",
  },
  {
    title: "Data Stewardship",
    description:
      "Data stewardship ensures that designated individuals or teams are responsible for maintaining the accuracy and integrity of master data.",
  },
];

const mdmTypes: InfoCard[] = [
  {
    title: "Single-Domain MDM",
    description:
      "Single-domain MDM focuses on managing a single category of master data, such as customer data or product information. This approach is often used to improve data quality within a specific business function.",
  },
  {
    title: "Multi-Domain MDM",
    description:
      "Multi-domain MDM manages multiple types of master data simultaneously, including customers, products, suppliers, and other core business entities for a more unified enterprise data environment.",
  },
  {
    title: "Hybrid MDM",
    description:
      "Hybrid MDM combines centralized and distributed data management approaches, allowing organizations to manage master data efficiently across complex IT environments.",
  },
];

const businessBenefits = [
  "Improved data consistency across systems and departments",
  "Better decision-making with accurate and properly structured data",
  "Reduced data redundancy through cleaner, deduplicated records",
  "Enhanced operational efficiency for teams and business processes",
  "Stronger regulatory compliance and audit readiness",
];

const whyChooseResearchers = [
  "Establishing reliable master data frameworks",
  "Improving data governance and data quality",
  "Integrating data across multiple platforms",
  "Supporting analytics and reporting initiatives",
];

const faqItems: FaqItem[] = [
  {
    question: "What problems does Master Data Management solve?",
    answer:
      "Master Data Management helps solve common data problems such as duplicate records, inconsistent information across systems, and poor data quality. By centralizing and standardizing data, organizations can maintain a single reliable source of truth.",
  },
  {
    question:
      "What is the difference between Master Data Management and data integration?",
    answer:
      "Data integration focuses on combining data from multiple systems, while Master Data Management ensures that the core business data remains consistent, accurate, and properly governed across those systems.",
  },
  {
    question:
      "Which business areas benefit most from Master Data Management?",
    answer:
      "Departments that rely heavily on accurate data benefit the most from MDM, including sales, marketing, finance, supply chain, and customer management. Consistent master data helps these teams make better operational and strategic decisions.",
  },
  {
    question: "How does Master Data Management support data governance?",
    answer:
      "Master Data Management establishes clear data governance processes by defining rules for data creation, validation, and maintenance. This ensures that data remains accurate, secure, and properly managed across the organization.",
  },
  {
    question: "Can Master Data Management improve reporting accuracy?",
    answer:
      "Yes. When master data is standardized and consistent across systems, reports and analytics become more reliable. This allows organizations to generate accurate insights and make data-driven decisions.",
  },
  {
    question:
      "How can businesses implement Master Data Management successfully?",
    answer:
      "Successful MDM implementation requires defining data governance policies, integrating data sources, and using appropriate tools to maintain consistent master data. Our team helps organizations design and implement structured MDM frameworks that support long-term data management.",
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

export default function MasterDataManagementPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="mdm-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              MASTER DATA MANAGEMENT SERVICES IN DUBAI, UAE
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Build a single, reliable source of truth for your core business
              data.
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Master Data Management (MDM) is a technology-enabled discipline
              that focuses on managing and maintaining critical business data
              across an organization. It combines processes, tools, and
              governance frameworks to keep master data accurate, consistent,
              and accessible across multiple systems and departments.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              In modern organizations, data is often spread across different
              applications, databases, and operational platforms. Without a
              structured framework, inconsistencies, duplication, and data
              quality issues follow. MDM helps businesses create a dependable
              foundation for operations, reporting, and strategic planning.
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
              alt="Team reviewing enterprise master data management strategy"
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
              alt="Business teams working with unified data systems"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              What is Master Data in MDM?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Master data refers to the core business information shared across
              multiple systems and processes within an organization. Managing
              these data assets effectively is essential for operational
              efficiency and maintaining data accuracy across business systems.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
              {masterDataExamples.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Master Data Management ensures these core datasets remain
              consistent, validated, and properly governed throughout the
              organization.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Foundation
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Key Components of Master Data Management
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Effective Master Data Management involves clear ownership,
              standardization, and integration so information remains reliable
              as it moves across the business.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {keyComponents.map((component) => (
                <article
                  key={component.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {component.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    {component.description}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <div className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Master data governance collaboration session"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Types of Master Data Management
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {mdmTypes.map((type) => (
              <article
                key={type.title}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {type.description}
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
              Benefits of Master Data Management for Businesses
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Implementing an effective Master Data Management strategy gives
              organizations cleaner operations and a stronger base for growth,
              analytics, and compliance.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {businessBenefits.map((benefit) => (
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
              alt="Analysts standardizing enterprise records and reporting data"
              className="h-full min-h-[340px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Growth Enablement
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            How Master Data Management Supports Business Growth
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            Organizations generate large volumes of data every day. Without a
            proper management framework, that data quickly becomes fragmented
            and difficult to trust.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Master Data Management helps businesses create a centralized and
            standardized data environment, allowing teams across departments to
            access reliable information. This improves collaboration, supports
            analytics initiatives, and enables organizations to respond more
            effectively to market changes and operational challenges.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            By implementing structured MDM frameworks, businesses can unlock
            the full value of their data assets and support long-term growth
            strategies.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-white px-6 py-8 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Why Researchers
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
            Why Choose Researchers for Master Data Management Services?
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, we help organizations design and implement
            structured Master Data Management solutions that improve data
            quality and maintain consistency across enterprise systems.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {whyChooseResearchers.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700 md:text-base"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            Our team works closely with organizations to ensure their master
            data remains accurate, standardized, and accessible for business
            operations and strategic decision-making.
          </p>
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
              Specific answers for common Master Data Management questions.
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
              Effective data management is essential for accurate operations and
              strategic planning.
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              If your organization depends on reliable business data, we can
              help you build an MDM framework that stays clean, governed, and
              scalable over time.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Unified enterprise records
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Stronger reporting accuracy
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Governance-ready data operations
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Start your MDM initiative.
            </h3>
            <p className="mt-3 font-sans text-white">
              Contact our team today to learn how our Master Data Management
              services in Dubai, UAE can support your business.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Researchers
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
