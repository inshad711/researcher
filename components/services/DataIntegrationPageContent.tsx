"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type BenefitItem = {
  title: string;
  description: string;
};

type StepItem = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const importancePoints = [
  "Connect data from isolated systems across the organization",
  "Improve visibility across departments and business processes",
  "Support better data-driven decisions with complete datasets",
  "Create a reliable foundation for analytics, reporting, and business intelligence",
];

const integrationSteps: StepItem[] = [
  {
    title: "Extract",
    description:
      "Collect data from different systems, applications, and databases used across the business.",
  },
  {
    title: "Transform",
    description:
      "Standardize and structure the data into a consistent format so it can be combined accurately.",
  },
  {
    title: "Load",
    description:
      "Move the integrated data into a centralized system such as a data warehouse or analytics platform.",
  },
  {
    title: "Access",
    description:
      "Make the unified data available for reporting, analytics, and operational business use.",
  },
];

const benefits: BenefitItem[] = [
  {
    title: "Centralized Data Access",
    description:
      "Data integration enables organizations to access business data from multiple sources through a single centralized system. This improves efficiency and reduces the complexity of managing multiple databases.",
  },
  {
    title: "Improved Data Integrity and Quality",
    description:
      "Integrating data across systems helps ensure that information remains consistent and accurate, improving overall data quality.",
  },
  {
    title: "Seamless System Connectivity",
    description:
      "Data integration allows different business systems to communicate with each other effectively, enabling smooth data exchange across departments.",
  },
  {
    title: "Improved Collaboration",
    description:
      "When data is integrated and accessible across systems, teams can collaborate more effectively and work with the same reliable information.",
  },
  {
    title: "Real-Time Business Intelligence",
    description:
      "Integrated data supports real-time analytics and reporting, enabling organizations to monitor performance and identify trends quickly.",
  },
  {
    title: "Increased Productivity and ROI",
    description:
      "By simplifying data access and improving information accuracy, data integration helps organizations improve productivity and achieve better returns on their data investments.",
  },
];

const whyChooseResearchers = [
  "Integrating data from multiple enterprise systems",
  "Improving data accuracy and consistency",
  "Supporting analytics and business intelligence initiatives",
  "Creating centralized data environments for better reporting",
];

const faqItems: FaqItem[] = [
  {
    question: "What is data integration?",
    answer:
      "Data integration is the process of combining data from multiple systems, databases, and sources into a unified and consistent view. This helps organizations access reliable information for analytics and decision-making.",
  },
  {
    question: "Why is data integration important for businesses?",
    answer:
      "Data integration allows organizations to access data from different systems in one place. This improves reporting accuracy, supports analytics, and helps businesses make informed decisions based on complete datasets.",
  },
  {
    question:
      "What types of systems can be integrated through data integration?",
    answer:
      "Data integration can connect various systems including enterprise applications, databases, CRM platforms, ERP systems, marketing tools, and analytics platforms.",
  },
  {
    question: "How does data integration support business intelligence?",
    answer:
      "Data integration provides a centralized data environment that enables business intelligence tools to analyze complete and consistent datasets. This improves the accuracy of insights generated through analytics.",
  },
  {
    question: "Do you provide data integration services for organizations?",
    answer:
      "Yes. Our team provides data integration services that help organizations combine data from multiple sources, improve data consistency, and support analytics and reporting initiatives.",
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

export default function DataIntegrationPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="data-integration-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DATA INTEGRATION SERVICES IN DUBAI, UAE
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Data Integration Services in Dubai, UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Data in many organizations is stored across different systems,
              databases, and enterprise applications. When information is
              spread across multiple platforms, it becomes difficult for
              businesses to access complete and reliable data.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Data Integration is the process of combining data from multiple
              business systems into a single, unified view, usually stored in a
              central data warehouse. With effective data integration services,
              organizations can connect different data sources and access the
              information they need quickly and efficiently.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              By implementing the right data integration solutions, businesses
              can make better decisions, improve customer experiences, and
              increase overall productivity.
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
              alt="Team reviewing integrated business data across systems"
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
              alt="Business teams connecting enterprise systems for shared reporting"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Data Integration is Important for Businesses
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Modern organizations rely on multiple applications and databases
              to manage different business processes. Without proper data
              integration, these systems operate in isolation, which can lead
              to inconsistent data and limited visibility across departments.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Effective data integration helps businesses connect their systems
              and ensure that data flows smoothly across the organization. This
              improves access to information and enables teams to make better
              data-driven decisions.
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
              Data integration also supports advanced analytics, reporting, and
              business intelligence initiatives by providing a consistent and
              reliable data foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Process
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              How Data Integration Works
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Data integration involves collecting data from multiple sources,
              transforming it into a standardized format, and loading it into a
              centralized system such as a data warehouse or analytics
              platform.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              This process typically includes:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {integrationSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Through structured integration processes, organizations can
              maintain a unified and accurate view of their business data.
            </p>
          </article>

          <div className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Team planning a structured data integration workflow"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Benefits of Data Integration
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-center md:text-base">
            Data integration bridges the gap between data management systems
            and the practical use of data within business operations.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Why Researchers
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Why Choose Researchers for Data Integration Services?
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, we provide structured data integration solutions
            designed to help organizations connect their data systems and
            improve data accessibility.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Our approach focuses on:
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
            integration frameworks support efficient data management and
            reliable business insights.
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
              Answers to common questions about data integration services.
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
              Integrated data systems enable organizations to access accurate
              information, improve analytics capabilities, and support better
              decision-making.
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              Contact our team today to learn how our data integration
              services in Dubai, UAE can help your organization connect
              multiple data systems and create a unified data environment.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Centralized data access
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Stronger analytics readiness
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Better operational visibility
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Start your data integration initiative.
            </h3>
            <p className="mt-3 font-sans text-white">
              Contact our team to connect multiple business systems and create
              a unified data environment for reporting and analytics.
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
