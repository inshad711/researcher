"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type MethodItem = {
  title: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const quantitativeMethods: MethodItem[] = [
  {
    title: "Survey Research",
    description:
      "Structured surveys are used to collect feedback from a large group of respondents.",
  },
  {
    title: "Descriptive Research",
    description:
      "Descriptive research helps businesses understand characteristics and behaviors of a specific market or customer segment.",
  },
  {
    title: "Experimental Research",
    description:
      "Experimental studies help businesses test marketing strategies, product ideas, or service concepts.",
  },
  {
    title: "Correlational Research",
    description:
      "This research method identifies relationships between different variables, such as customer behavior and purchase patterns.",
  },
  {
    title: "Causal-Comparative Research",
    description:
      "Causal-comparative research compares different groups to identify possible cause-and-effect relationships.",
  },
];

const qualitativeMethods: MethodItem[] = [
  {
    title: "Qualitative Surveys",
    description:
      "Open-ended surveys allow respondents to share opinions and experiences in their own words.",
  },
  {
    title: "Focus Groups",
    description:
      "Focus group discussions help explore customer perceptions about products, services, or brand experiences.",
  },
  {
    title: "In-Depth Interviews",
    description:
      "One-on-one interviews provide detailed insights into customer motivations and attitudes.",
  },
  {
    title: "Observational Research",
    description:
      "This method studies customer behavior in real-world environments to understand how people interact with products or services.",
  },
];

const benefits = [
  "Better understanding of customer behavior",
  "Stronger decision-making based on data and insights",
  "Improved products and services",
  "Increased customer satisfaction and loyalty",
  "Stronger brand reputation",
  "Higher customer retention",
];

const processSteps: ProcessStep[] = [
  {
    title: "Step 1 - Understanding Business Objectives",
    description: "We begin by identifying the goals of the research project.",
  },
  {
    title: "Step 2 - Research Design",
    description:
      "Our team selects the most suitable research methods and survey structure.",
  },
  {
    title: "Step 3 - Data Collection",
    description:
      "We collect information through surveys, interviews, focus groups, or observational techniques.",
  },
  {
    title: "Step 4 - Data Analysis",
    description:
      "Both numerical data and qualitative insights are carefully analyzed.",
  },
  {
    title: "Step 5 - Reporting and Insights",
    description:
      "We provide detailed reports with clear findings and practical recommendations.",
  },
];

const whyChoose = [
  "Deep understanding of UAE market dynamics",
  "Customized research strategies",
  "Experienced research professionals",
  "Reliable data collection methods",
  "Actionable insights for business growth",
];

const faqItems: FaqItem[] = [
  {
    question:
      "What is the difference between quantitative and qualitative research?",
    answer:
      "Quantitative research focuses on numerical data and statistical analysis, while qualitative research explores opinions, motivations, and experiences to understand customer behavior more deeply.",
  },
  {
    question:
      "Why should businesses use both quantitative and qualitative research?",
    answer:
      "Using both methods provides a complete understanding of customer behavior. Quantitative data shows trends, while qualitative insights explain the reasons behind those trends.",
  },
  {
    question:
      "What industries use quantitative and qualitative research in Dubai?",
    answer:
      "Industries such as retail, healthcare, hospitality, finance, technology, and service businesses use both research methods to understand customer behavior and improve business strategies.",
  },
  {
    question: "How long does a survey research project usually take?",
    answer:
      "The timeline depends on the research scope and number of participants, but most projects are completed within a few weeks.",
  },
  {
    question: "How can survey analysis help businesses make better decisions?",
    answer:
      "Survey analysis provides reliable data and insights about customer preferences, expectations, and experiences, helping businesses improve products, services, and marketing strategies.",
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

export default function QualitativeQuantitativeSurveysPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              QUANTITATIVE AND QUALITATIVE SURVEY ANALYSIS IN DUBAI
            </p> */}
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Quantitative and Qualitative Survey Analysis in Dubai
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Understanding your customers and market requires both numbers and
              insights. While numerical data shows trends and patterns, deeper
              conversations and observations reveal the reasons behind those
              trends.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Quantitative and Qualitative Survey Analysis in Dubai helps
              businesses collect structured data and meaningful feedback to make
              better decisions.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we combine quantitative surveys and qualitative
              research techniques to understand customer behavior, expectations,
              and decision-making factors. This combined approach allows
              businesses to gain both statistical clarity and deeper human
              insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Book a consultation today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/service/QuantitativeandQualitativeSurveyAnalysisinDubai.webp"
              alt="Quantitative and qualitative survey analysis in Dubai"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <img
              src="/service/WhatisQuantitativeandQualitativeResea.webp"
              alt="Team discussing survey findings and market trends"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Research Foundation
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              What is Quantitative and Qualitative Research?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Quantitative and qualitative research are two complementary
              methods used to study customer behavior and market trends.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl bg-white px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Quantitative Research
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  Quantitative research focuses on collecting numerical data
                  from a large audience. This data is analyzed statistically to
                  identify patterns, trends, and measurable insights.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  Businesses often use quantitative research to measure customer
                  satisfaction, market demand, and product performance.
                </p>
              </article>
              <article className="rounded-2xl bg-white px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Qualitative Research
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  Qualitative research focuses on understanding opinions,
                  motivations, and attitudes. It helps businesses learn why
                  customers behave in certain ways and what influences their
                  decisions.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  Qualitative insights provide context that supports
                  quantitative data.
                </p>
              </article>
            </div>
            <p className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              When combined, these two research approaches provide a complete
              understanding of the market and target audience.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-[#f8fafc]">
        <div className="templateContainer">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Research Methods
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Quantitative and qualitative methods tailored to the questions you
              need answered
            </h2>
          </div>

          <div className="mt-8 space-y-8">
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Quantitative Methods
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Our Quantitative Research Methods
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                Researchers uses several quantitative research techniques to
                gather reliable statistical data.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {quantitativeMethods.map((method) => (
                  <div
                    key={method.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                  >
                    <h4 className="text-lg font-semibold text-slate-900">
                      {method.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Qualitative Methods
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Our Qualitative Research Methods
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                In addition to numerical analysis, Researchers also conducts
                qualitative research to understand deeper customer perspectives.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {qualitativeMethods.map((method) => (
                  <div
                    key={method.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                  >
                    <h4 className="text-lg font-semibold text-slate-900">
                      {method.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Business Impact
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Benefits of Quantitative and Qualitative Research
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
            Combining both research approaches helps businesses gain a
            well-rounded understanding of their market.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl bg-white px-4 py-4 shadow-sm"
              >
                <p className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{benefit}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            Businesses that combine quantitative data with qualitative insights
            are better equipped to identify opportunities and solve business
            challenges.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Research Process
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Our Research Process
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we follow a structured approach for conducting
              quantitative and qualitative research.
            </p>
            <ol className="mt-6 grid gap-3 md:grid-cols-2">
              {processSteps.map((step) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-slate-200 px-5 py-5"
                >
                  <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/service/OurResearchProcess2.webp"
              alt="Structured survey research process and analysis"
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
            Why Choose Researchers for Survey Analysis in Dubai
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Businesses across Dubai and the UAE rely on Researchers for reliable
            market research insights.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {whyChoose.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-700 md:text-base"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-white px-6 py-8 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Research Services in Dubai
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
            Regional support with reliable data and meaningful insights
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Researchers provides professional quantitative and qualitative
            survey analysis services in Dubai, helping organizations gain deeper
            insights into their customers and markets.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Our research services support businesses across Dubai, the UAE, and
            the wider Gulf region with reliable data and meaningful insights for
            better decision-making.
          </p>
        </div>
      </section>

      <section className=" border-slate-200 bg-white">
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
              What is the difference between quantitative and qualitative
              research? Why should businesses use both quantitative and
              qualitative research?
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

      <section className="templateContainer mb-8 mt-6">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-6 md:p-8 lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Get Expert Survey Insights
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-4xl">
              Get Expert Survey Insights for Your Business
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              Contact our research team today to discuss your survey analysis
              requirements in Dubai and discover how data-driven insights can
              support your business strategy.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Structured quantitative data
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Deeper qualitative insight
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Practical recommendations
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Discuss your survey analysis requirements.
            </h3>
            <p className="mt-3 font-sans text-white">
              Speak with Researchers about quantitative and qualitative survey
              analysis in Dubai and the UAE.
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
                href="/services"
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
