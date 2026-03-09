"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const benefits = [
  "Understanding industry standards and market expectations",
  "Discovering untapped niche markets and opportunities",
  "Achieving product and service differentiation",
  "Meeting customer needs more effectively than competitors",
  "Strengthening brand positioning in competitive markets",
  "Measuring business growth and performance over time",
];

const framework = [
  {
    title: "Identifying Key Competitors",
    text: "The first step involves identifying direct and indirect competitors operating in the same market or industry.",
  },
  {
    title: "Analyzing Competitor Business Models",
    text: "Understanding competitor business structures, revenue models, and product offerings helps reveal how they position themselves in the market.",
  },
  {
    title: "Evaluating Value Propositions and Marketing Strategies",
    text: "Research examines how competitors communicate their brand value, engage customers, and promote their products or services.",
  },
  {
    title: "Customer Journey and Engagement Analysis",
    text: "Analyzing competitor customer journeys helps businesses understand how customers interact with brands throughout the purchasing process.",
  },
  {
    title: "SWOT Analysis",
    text: "A detailed SWOT analysis evaluates competitor strengths, weaknesses, opportunities, and threats to uncover strategic insights.",
  },
];

const importancePoints = [
  {
    title: "Strategic Decision Making",
    text: "Understanding competitor actions helps businesses align their own marketing and product strategies for maximum impact.",
  },
  {
    title: "Identifying Opportunities and Risks",
    text: "Competitive analysis reveals emerging market opportunities while highlighting potential threats from new entrants or disruptive competitors.",
  },
  {
    title: "Stronger Market Positioning",
    text: "Knowing where competitors stand allows businesses to position themselves more effectively and target unmet customer needs.",
  },
  {
    title: "Adapting to Market Changes",
    text: "The UAE business environment evolves rapidly, and competitor insights help companies respond quickly to changing market dynamics.",
  },
];

const chooseUsPoints = [
  "Local Market Expertise",
  "Comprehensive Market Analysis",
  "Customized Research Approach",
  "Actionable Strategic Insights",
  "Proven Research Experience",
];

const faqItems: FaqItem[] = [
  {
    question: "What is competitor market research analysis?",
    answer:
      "Competitor market research analysis evaluates competing brands in the market to understand their strategies, strengths, weaknesses, and market positioning.",
  },
  {
    question: "Why is competitor analysis important for businesses?",
    answer:
      "Competitor analysis helps businesses understand market trends, identify opportunities, and develop strategies that differentiate their brand from competitors.",
  },
  {
    question: "How often should competitor analysis be conducted?",
    answer:
      "Competitor analysis should be conducted regularly, especially when entering new markets, launching products, or adapting marketing strategies.",
  },
  {
    question: "Can competitor analysis help identify new market opportunities?",
    answer:
      "Yes. Competitive research can reveal gaps in the market and unmet customer needs that businesses can target.",
  },
  {
    question: "Is competitor analysis useful for startups?",
    answer:
      "Yes. Startups benefit greatly from competitor analysis because it helps them understand market dynamics and develop stronger positioning strategies.",
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

export default function CompetitorAnalysisPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="pb-0 pt-24 text-slate-900 md:pt-28">
      <Script id="competitor-analysis-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Competitor Analysis
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Competitor &amp; Market Research Analysis in UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Competitor and market research analysis helps businesses
              understand the competitive landscape, industry trends, and
              customer expectations. In dynamic markets like the UAE,
              organizations rely on competitive intelligence to evaluate how
              their brand performs compared to others in the same industry.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              A competitor analysis study examines similar brands in the market
              to understand their products, branding strategies, marketing
              approaches, pricing models, and customer engagement tactics. This
              research enables businesses to identify opportunities, refine
              their positioning, and develop strategies that provide a stronger
              competitive advantage.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Understanding competitors is essential for business owners,
              marketers, startups, and product developers who want to make
              informed strategic decisions and achieve sustainable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Contact Research Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/market-research-measurement"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Services
              </Link>
            </div>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/service/CompetitorMarketResearchAnalysisinUAE.webp"
              alt="Competitor and market research analysis in UAE"
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </article>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-5 ">
            <img
              src="/service/BenefitsofCompetitiveMarketResearch.webp"
              alt="Competitive market research discussion"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </article>
          <article className="lg:col-span-7 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Benefits
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Benefits of Competitive Market Research
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Competitive analysis provides valuable insights that help
              businesses strengthen their market position and improve
              decision-making.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Through structured research, businesses can better understand
              competitor strengths, identify gaps in the market, and develop
              strategies that create a unique value proposition.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section>
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Framework
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Our Competitor Analysis Framework
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            A structured framework ensures that competitor analysis delivers
            meaningful and actionable insights. The research process typically
            focuses on evaluating the competitive environment from multiple
            perspectives.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {framework.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-300 px-5 py-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="templateContainer">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              UAE Market
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">
              Why Competitor Marketing Analysis is Important in the UAE
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              The UAE market is highly competitive and continuously evolving.
              Businesses must constantly monitor competitor strategies and
              industry trends to remain competitive.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Competitor marketing analysis provides the insights needed to
              adapt quickly to market changes and make strategic decisions based
              on real market data.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {importancePoints.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-slate-200 bg-white px-6 py-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-5">
            <img
              src="/service/CompetitiveProductAnalysisforStartupsandSmallBusinesses.webp"
              alt="Competitive product analysis for startups and small businesses"
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Startups and SMEs
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Competitive Product Analysis for Startups and Small Businesses
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              For startups and small businesses, competitor research plays an
              especially important role in understanding market opportunities
              and identifying potential risks.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              A targeted competitive product analysis helps emerging companies
              evaluate established competitors and understand how their
              offerings compare in terms of value, pricing, features, and
              customer experience.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              This research enables startups to refine their strategies, improve
              product positioning, and respond effectively to market
              disruptions.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Surveys
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Gathering Insights through Competitive Analysis Surveys
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Competitive analysis surveys help businesses collect direct
              feedback from customers about how they perceive different brands
              in the market. These surveys provide insights into brand
              perception, product preferences, and customer expectations.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Survey-based competitor analysis helps organizations understand
              how their brand compares to competitors from the customer&apos;s
              perspective. These insights can be used to refine marketing
              strategies, improve products, and strengthen brand positioning.
            </p>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/service/GatheringInsightsthroughCompetitiveAnalysisSurveys.webp"
              alt="Competitive analysis surveys and customer insights"
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </article>
        </div>
      </section>

      <section>
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Why Businesses Choose Our Competitor Analysis Services in the UAE
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Organizations often rely on professional research services to gain
            deeper insights into their competitive landscape and industry
            dynamics.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chooseUsPoints.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-slate-300 px-5 py-5"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                      {item}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {item === "Local Market Expertise" &&
                        "Deep understanding of the UAE market and regional business environment ensures accurate and relevant research insights."}
                      {item === "Comprehensive Market Analysis" &&
                        "Research goes beyond surface-level observations and examines consumer behavior, market trends, and competitor strategies."}
                      {item === "Customized Research Approach" &&
                        "Each analysis is tailored to the specific goals and industry of the business."}
                      {item === "Actionable Strategic Insights" &&
                        "Research findings are translated into practical recommendations that help businesses strengthen their competitive position."}
                      {item === "Proven Research Experience" &&
                        "Extensive experience conducting market research and competitor analysis across multiple industries in the UAE."}
                    </p>
                  </div>
                </div>
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
              Expert answers to common competitor analysis and market research
              questions.
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
              Ready to evaluate your market position with confidence?
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              If you are looking to evaluate competitor strategies or analyze
              your market position in the UAE, professional research support can
              provide valuable insights.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Clear competitor benchmarking
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Actionable market intelligence
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                UAE-focused strategic insights
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Start your competitor analysis project.
            </h3>
            <p className="mt-3 font-sans text-white">
              Contact our research team today to discuss your competitor
              analysis requirements and discover how market intelligence can
              support your business growth.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Researchers.me
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
