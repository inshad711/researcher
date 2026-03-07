"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  Plus,
  BarChart3,
  MonitorUp,
  BrainCircuit,
  LayoutDashboard,
} from "lucide-react";

type BenefitItem = {
  icon: typeof BarChart3;
  title: string;
  description: string;
};

type DashboardType = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const benefits: BenefitItem[] = [
  {
    icon: BarChart3,
    title: "KPI Visualization",
    description:
      "A well-designed KPI dashboard reporting system presents important business metrics through clear charts, graphs, and visual indicators. This allows companies to quickly understand performance levels and track progress toward strategic goals.",
  },
  {
    icon: MonitorUp,
    title: "Real-Time Performance Monitoring",
    description:
      "With real time dashboard reporting, businesses can monitor operations continuously and identify potential issues before they impact performance. Real-time visibility helps teams take immediate action and maintain operational efficiency.",
  },
  {
    icon: BrainCircuit,
    title: "Improved Decision-Making",
    description:
      "Business dashboard reporting enables organizations to make data-driven decisions by providing structured insights into operational and strategic performance.",
  },
  {
    icon: LayoutDashboard,
    title: "Easy Data Accessibility",
    description:
      "Through interactive data visualization dashboards, employees across departments can access and interpret important business data easily, even without advanced technical skills.",
  },
];

const dashboardTypes: DashboardType[] = [
  {
    title: "Analytical Dashboards",
    description:
      "Analytical dashboards help organizations explore large datasets and uncover insights. These performance dashboard reporting tools are commonly used to analyze trends, patterns, and historical data.",
  },
  {
    title: "Strategic Dashboards",
    description:
      "Strategic dashboards focus on high-level KPIs and long-term business performance. They help leadership teams evaluate business growth and overall organizational strategy.",
  },
  {
    title: "Operational Dashboards",
    description:
      "Operational dashboards monitor day-to-day activities and provide real-time updates. These dashboards are useful for tracking productivity, operational performance, and process efficiency.",
  },
  {
    title: "Tactical Dashboards",
    description:
      "Tactical dashboards support department-level decision-making by tracking specific metrics related to short-term business objectives and operational targets.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is dashboard reporting?",
    answer:
      "Dashboard reporting is the process of presenting business data visually through charts, graphs, tables, and maps. It allows organizations to track key performance indicators (KPIs), monitor performance, and understand trends through a centralized data dashboard.",
  },
  {
    question: "Why is dashboard reporting important for businesses?",
    answer:
      "Dashboard reporting helps businesses convert complex datasets into clear visual insights. By monitoring KPIs and performance metrics in one place, organizations can identify trends, measure progress, and make more informed business decisions.",
  },
  {
    question: "Can you create customized dashboard reporting solutions?",
    answer:
      "Yes. Our team develops customized dashboard reporting solutions based on business objectives and reporting requirements. We help organizations design dashboards that visualize KPIs, performance metrics, and operational data in a clear and structured way.",
  },
  {
    question: "What kind of data can be included in a dashboard report?",
    answer:
      "Dashboard reports can include various types of business data such as sales performance, operational metrics, marketing analytics, financial indicators, and customer insights. These data points are presented through charts, graphs, and other visual elements for easier interpretation.",
  },
  {
    question: "Do you provide dashboard reporting for business performance analysis?",
    answer:
      "Yes, we provide dashboard reporting services that help businesses monitor performance and analyze key metrics in real time. Our dashboards are designed to transform raw data into meaningful insights that support better decision-making.",
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

export default function DashboardReportingPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="dashboard-reporting-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DASHBOARD REPORTING SERVICES IN DUBAI, UAE
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Dashboard Reporting Services in Dubai, UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Dashboard reporting services present key business data in a visual format, allowing
              organizations to monitor performance and understand important trends at a glance.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Through advanced data visualization dashboards, businesses can track key performance
              indicators (KPIs) and evaluate operational performance in a structured way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Contact our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Dashboard reporting services in Dubai, UAE"
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
              alt="Interactive dashboard reporting insights"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Dashboard Reporting Services in Dubai, UAE
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Modern organizations rely on dashboard reporting services to convert complex datasets
              into clear visual insights. Instead of analyzing raw spreadsheets or large volumes of
              data, decision-makers can quickly interpret business performance through interactive
              dashboards that display information using charts, graphs, tables, and maps.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Interactive KPI dashboard reporting allows businesses to explore data, filter results,
              and identify patterns that support more effective decision-making.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              These dashboards provide real-time insights that help organizations respond quickly to
              changing business conditions and market dynamics.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Key Benefits
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Key Benefits of Dashboard Reporting
            </h2>
            <div className="mt-5 space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-slate-900" />
                      <h3 className="text-base font-semibold text-slate-900">{benefit.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>

          <div className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Business team reviewing KPI dashboard reporting"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Types of Dashboard Reporting
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-center md:text-base">
            Dashboard reporting can be categorized into different types depending on the specific
            objectives of a business.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {dashboardTypes.map((type) => (
              <article key={type.title} className="rounded-2xl bg-white px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{type.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {type.description}
                </p>
              </article>
            ))}
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
              Expert Answers to Your Dashboard Reporting Queries.
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
                      openFaqIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">CTA</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-4xl">
              Dashboard reporting services in Dubai, UAE
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              Contact our team today to learn how our dashboard reporting services in Dubai, UAE
              can help your organization track KPIs, improve performance monitoring, and make more
              informed business decisions.
            </p>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">CTA</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">Contact our team today</h3>
            <p className="mt-3 font-sans text-white">
              Contact our team today to learn how our dashboard reporting services in Dubai, UAE
              can help your organization track KPIs, improve performance monitoring, and make more
              informed business decisions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact our team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/analytics"
                className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-300"
              >
                Explore Analytics Services
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
