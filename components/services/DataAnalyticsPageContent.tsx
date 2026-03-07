"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  Plus,
  CheckCircle2,
  BarChart2,
  SearchCheck,
  TrendingUp,
  Lightbulb,
  Database,
  Zap,
  LineChart,
} from "lucide-react";

type AnalyticsType = {
  icon: typeof BarChart2;
  label: string;
  title: string;
  desc: string;
};

type ReasonItem = {
  title: string;
  desc: string;
};

type OutcomeItem = {
  icon: typeof LineChart;
  label: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const challenges = [
  "Understand patterns, trends, and correlations within large datasets",
  "Identify why business outcomes or performance trends changed",
  "Forecast future scenarios using historical data and analytical models",
  "Turn raw data into strategic recommendations and actionable insights",
  "Improve operational efficiency through evidence-based decision-making",
];

const analyticsTypes: AnalyticsType[] = [
  {
    icon: BarChart2,
    label: "What happened?",
    title: "Descriptive Analytics",
    desc: "Descriptive analytics focuses on analyzing historical data to identify patterns and trends. It helps organizations understand past performance and gain clarity about their current business position.",
  },
  {
    icon: SearchCheck,
    label: "Why did it happen?",
    title: "Diagnostic Analytics",
    desc: "Diagnostic analytics examines data in detail to determine the causes behind specific outcomes or events. By identifying relationships and correlations in the data, businesses can better understand the reasons behind performance trends.",
  },
  {
    icon: TrendingUp,
    label: "What is likely to happen?",
    title: "Predictive Analytics",
    desc: "Predictive analytics uses statistical models and historical data to forecast potential future outcomes. This helps organizations anticipate market changes, customer behavior, and business opportunities.",
  },
  {
    icon: Lightbulb,
    label: "What should be done?",
    title: "Prescriptive Analytics",
    desc: "Prescriptive analytics provides recommendations based on insights derived from data analysis. It helps businesses identify the best course of action to improve performance and achieve strategic objectives.",
  },
];

const whyChooseUs: ReasonItem[] = [
  {
    title: "Expertise in advanced data analytics tools",
    desc: "Our team has experience working with advanced data analytics tools and analytical models to interpret complex datasets. We apply structured research methods to ensure accurate insights that support business decisions.",
  },
  {
    title: "Driving business growth through research data analysis",
    desc: "Through detailed research data analysis, we identify trends, opportunities, and performance gaps that can help businesses improve strategies and drive growth.",
  },
  {
    title: "Enhancing operational efficiency",
    desc: "Our analytics approach helps organizations optimize processes, reduce inefficiencies, and improve overall business performance.",
  },
];

const outcomes: OutcomeItem[] = [
  { icon: LineChart, label: "Clearer strategic decision-making" },
  { icon: TrendingUp, label: "Business growth opportunities" },
  { icon: Zap, label: "Improved operational efficiency" },
  { icon: Database, label: "Actionable insights from complex data" },
];

const faqItems: FaqItem[] = [
  {
    question: "What are data analytics services?",
    answer:
      "Data analytics services involve collecting, processing, and analyzing data to identify patterns, trends, and insights that support better business decisions. These services help organizations transform raw data into meaningful information that can guide strategic planning and operational improvements.",
  },
  {
    question: "Why are data analytics important for businesses?",
    answer:
      "Data analytics helps businesses understand customer behavior, market trends, and operational performance. By analyzing business data effectively, organizations can identify opportunities, improve efficiency, and make more informed strategic decisions.",
  },
  {
    question: "What are the four main types of data analytics?",
    answer:
      "Data analytics is commonly divided into four main categories: Descriptive analytics analyzes historical data to understand past performance. Diagnostic analytics explains why certain trends or events occurred. Predictive analytics forecasts possible future outcomes using historical data. Prescriptive analytics recommends actions based on analytical insights.",
  },
  {
    question: "What industries benefit from data analytics services?",
    answer:
      "Data analytics services are widely used across multiple industries including finance, healthcare, retail, technology, manufacturing, and marketing. Organizations in these sectors use data analytics to improve decision-making, optimize operations, and identify growth opportunities.",
  },
  {
    question: "How can your team help with data analytics projects?",
    answer:
      "Our team helps businesses analyze complex datasets using advanced analytics tools and structured research methodologies. We focus on identifying patterns, trends, and insights that support better strategic and operational decision-making.",
  },
  {
    question: "Do you provide customized data analytics solutions?",
    answer:
      "Yes. We provide customized data analytics solutions based on the specific data requirements and objectives of each organization. Our approach focuses on transforming business data into actionable insights that support performance improvement and long-term growth.",
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

export default function DataAnalyticsPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="data-analytics-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DATA ANALYTICS SERVICES
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Data Analytics Services in Dubai, UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Data analytics is a comprehensive approach that combines
              quantitative and qualitative analysis methods to interpret data
              and extract meaningful insights. Businesses use data analytics to
              understand patterns, trends, and correlations within datasets,
              helping them make informed strategic decisions.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Through advanced data analytics services, organizations can
              transform raw data into valuable insights that support business
              growth and operational efficiency. Data visualization tools and
              analytical models help decision-makers interpret complex datasets
              quickly and accurately.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we apply structured research data analysis
              methodologies to examine data sets and uncover insights that can
              improve strategies, optimize operations, and support better
              decision-making across different industries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/analytics"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Analytics Services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Data analytics planning session"
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
              alt="Business dashboard and analytics review"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Advanced Data Analytics Tools for Business Insights
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Modern businesses generate large volumes of data every day. By
              leveraging advanced data analytics tools, organizations can
              analyze extensive datasets and identify actionable insights.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
              {challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our team utilizes advanced data analysis techniques in research
              to process and interpret large datasets. These insights help
              organizations refine strategies, improve operational performance,
              and make more informed decisions that support long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Overview
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              The Four Types of Data Analytics
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we use four key types of data analytics to help
              businesses answer critical questions about their performance and
              future strategy.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Descriptive analytics explains what happened</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Diagnostic analytics explains why it happened</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Predictive and prescriptive analytics guide what comes next</span>
              </li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Each type plays a distinct role in helping organizations
              understand performance, anticipate change, and make better
              strategic decisions.
            </p>
          </article>

          <div className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Team discussing business data analytics"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Types of Data Analytics Applications
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {analyticsTypes.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 px-5 py-5"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-slate-900" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Why Researchers
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Why Choose Researchers for Data Analytics Services?
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {whyChooseUs.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-700 md:text-base"
              >
                <p className="flex items-start gap-2 font-semibold text-slate-900">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{point.title}</span>
                </p>
                <p className="mt-2">{point.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            Data analytics not only provides insights but also supports
            operational improvements. We connect analytical depth with business
            priorities so each insight contributes to measurable improvement.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-white px-6 py-8 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Outcome Focus
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
            Data Analytics for Smarter Business Decisions
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;

              return (
                <div
                  key={outcome.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <p className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{outcome.label}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            Data analytics allows organizations to transform raw data into
            strategic insights that support smarter business decisions.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Contact our team today to learn how our data analytics services in
            Dubai, UAE can help your organization analyze data, identify
            opportunities, and improve business performance.
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
              Answers to common questions about data analytics services.
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
              Partner With Us
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-4xl">
              Ready to transform data into actionable insight?
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              Our team helps organizations analyze data, identify opportunities,
              and improve business performance through structured analytics
              services.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Smarter strategic decisions
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Better operational performance
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Actionable business insights
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Start your data analytics project
            </h3>
            <p className="mt-3 font-sans text-white">
              Contact our team to discuss a customized data analytics solution
              aligned with your organization&apos;s objectives.
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
                Explore Services
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
