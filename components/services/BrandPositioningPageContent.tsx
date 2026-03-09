"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const strategyItems = [
  {
    title: "Customer Service Positioning",
    description:
      "This strategy focuses on delivering exceptional customer service as a key differentiator for the brand.",
  },
  {
    title: "Price-Based Positioning",
    description:
      "Price positioning emphasizes affordability or premium value, depending on the brand's market strategy.",
  },
  {
    title: "Quality-Based Positioning",
    description:
      "Brands often position themselves based on superior quality, reliability, or product performance.",
  },
  {
    title: "Differentiation Strategy",
    description:
      "Differentiation focuses on unique features, innovation, or brand values that set the company apart from competitors.",
  },
  {
    title: "Social Media Positioning",
    description:
      "This strategy focuses on building brand identity and engagement through digital platforms and online communities.",
  },
  {
    title: "Convergence-Based Positioning",
    description:
      "Convergence positioning integrates multiple brand attributes such as innovation, convenience, and value to create a unique market perception.",
  },
];

const importanceItems = [
  {
    title: "Market Differentiation",
    description:
      "Brand positioning helps businesses stand out in competitive markets by clearly defining what makes their brand unique.",
  },
  {
    title: "Competitive Insights",
    description:
      "Benchmarking allows companies to evaluate how their brand compares to competitors and identify opportunities for improvement.",
  },
  {
    title: "Stronger Consumer Connection",
    description:
      "Understanding consumer perceptions helps businesses create brand messages that resonate with their audience.",
  },
  {
    title: "Data-Driven Strategic Decisions",
    description:
      "Benchmarking research provides reliable insights that support better marketing, pricing, and product strategies.",
  },
];

const researchAreas = [
  {
    title: "Brand Identity Research",
    description:
      "Brand identity surveys help organizations understand how customers perceive their brand personality, values, and visual identity.",
  },
  {
    title: "Brand Awareness Analysis",
    description:
      "Brand awareness surveys measure how familiar consumers are with a brand and how easily they recognize it in the marketplace.",
  },
  {
    title: "Brand Image Analysis",
    description:
      "This research explores the emotions, perceptions, and associations consumers connect with a brand.",
  },
  {
    title: "Brand Equity Analysis",
    description:
      "Brand equity studies evaluate the value and strength of a brand based on customer loyalty, recognition, and perceived quality.",
  },
  {
    title: "Brand Value and Benchmark Analysis",
    description:
      "Brand value analysis measures the financial and strategic value of a brand while benchmarking compares performance with competitors.",
  },
  {
    title: "Brand Perception Research",
    description:
      "Brand perception analysis helps businesses understand whether their brand is viewed positively and how it can improve its reputation.",
  },
];

const advantages = [
  "Deep understanding of the UAE market environment",
  "Customized research strategies for different industries",
  "Comprehensive benchmarking against competitors",
  "Data-driven insights for brand strategy development",
  "Continuous monitoring of brand performance",
];

const faqItems: FaqItem[] = [
  {
    question: "What is brand positioning research?",
    answer:
      "Brand positioning research analyzes how consumers perceive a brand and identifies factors that influence brand preference and loyalty.",
  },
  {
    question: "What is benchmarking in brand research?",
    answer:
      "Benchmarking compares a brand's performance with competitors and industry standards to identify strengths and improvement areas.",
  },
  {
    question: "Why is brand positioning important for businesses in Dubai?",
    answer:
      "Brand positioning helps businesses differentiate themselves in competitive markets and communicate their value effectively to customers.",
  },
  {
    question: "Can brand research help reposition an existing brand?",
    answer:
      "Yes. Brand positioning research can identify gaps between current brand perception and desired positioning, helping companies refine their strategies.",
  },
  {
    question: "What metrics are used in brand benchmarking studies?",
    answer:
      "Common metrics include brand awareness, brand perception, customer loyalty, product performance, and competitive market share.",
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

export default function BrandPositioningPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script
        id="brand-positioning-benchmarking-faq-schema"
        type="application/ld+json"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Brand Positioning &amp; Benchmark Survey
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Brand Positioning &amp; Benchmark Survey Company in Dubai
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Brand positioning and benchmarking research help businesses
              understand how their brand is perceived in the market and how it
              compares with competitors. In competitive markets like Dubai and
              the UAE, organizations rely on structured research to identify
              their unique value proposition and strengthen their brand
              presence.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Brand positioning focuses on shaping how customers think and feel
              about a brand. It helps businesses define what makes their
              products or services different from competitors and communicate
              that value effectively to their target audience.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Benchmarking, on the other hand, measures brand performance by
              comparing it with industry standards and competitor performance.
              By combining brand positioning research with benchmarking
              analysis, companies gain valuable insights that support stronger
              brand strategies and long-term growth.
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
              src="/service/BrandPositioningBenchmarkSurveyCompanyDubai.webp"
              alt="Brand positioning and benchmarking research team"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Understanding Brand Positioning Research
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              How Businesses Define Distinct Market Value
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Brand positioning research focuses on identifying how customers
              perceive a brand and what factors influence their opinions and
              purchasing decisions. This research helps organizations evaluate
              brand identity, brand messaging, and customer expectations.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Effective brand positioning ensures that a company occupies a
              distinctive place in the minds of consumers. It allows businesses
              to communicate their value clearly and build stronger emotional
              connections with their target audience.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Organizations that invest in brand positioning research are better
              equipped to differentiate themselves, strengthen brand
              recognition, and maintain a consistent brand image across
              different marketing channels.
            </p>
          </article>
          <article className="border-t border-slate-200 pt-6 lg:col-span-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What is Benchmarking in Brand Research?
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Measuring Performance Against the Market
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Benchmarking research evaluates how a brand performs in comparison
              with competitors and industry standards. It helps companies
              understand their current market position and identify
              opportunities for improvement.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Benchmarking focuses on analyzing key factors such as product
              performance, brand perception, customer satisfaction, and overall
              market competitiveness.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              This research approach provides valuable data that helps
              businesses refine their strategies, improve customer experiences,
              and strengthen their competitive advantage.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200">
        <div className="templateContainer">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Brand Positioning Strategies Used in Research
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Strategic Approaches Covered in Studies
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {strategyItems.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-slate-200 pt-5"
                >
                  <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <article className="mt-12 border-t border-slate-200 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Importance of Brand Positioning and Benchmarking
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Why This Research Matters in the UAE
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              In the rapidly evolving business environment of the UAE, effective
              brand positioning and benchmarking are critical for sustainable
              growth.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {importanceItems.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-slate-200 pt-5"
                >
                  <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <article className="mt-12 border-t border-slate-200 pt-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Brand Research Areas Covered in Surveys
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                Research Coverage Across Core Brand Metrics
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {researchAreas.map((item) => (
                  <article
                    key={item.title}
                    className="border-t border-slate-200 pt-5"
                  >
                    <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-6">
            <img
              src="/service/StrongerRelevanceCompetitiveMarket.webp"
              alt="Dubai brand research discussion"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Businesses in Dubai Use Brand Positioning Research
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Stronger Relevance in a Competitive Market
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Dubai&rsquo;s diverse and competitive market requires companies to
              clearly define their brand identity and differentiate themselves
              from competitors.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Brand positioning research helps organizations understand customer
              expectations, analyze brand perception, and develop marketing
              strategies that resonate with their target audience.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Benchmarking analysis also allows companies to evaluate their
              performance against competitors and identify opportunities for
              innovation and improvement.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Organizations that rely on structured brand research are better
              positioned to build strong brands and maintain long-term market
              relevance.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Choose Our Brand Positioning Survey Services in Dubai
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Research Support Built for Better Decisions
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Businesses choose professional brand positioning and benchmarking
              research because it provides reliable data and strategic insights
              that support better decision-making.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {advantages.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              This research-driven approach helps organizations strengthen brand
              visibility, improve market positioning, and create sustainable
              competitive advantages.
            </p>
          </article>
          <article className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 text-white md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Call to Action
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                Evaluate Brand Perception with Actionable Research
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
                If you are planning to evaluate your brand perception or
                benchmark your performance against competitors in Dubai,
                professional research support can help you gain accurate and
                actionable insights.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
                Contact our research team today to discuss your brand
                positioning and benchmarking survey requirements.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Contact Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
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
                className="absolute -bottom-4 left-0 w-full"
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
              What is brand positioning research? What is benchmarking in brand
              research? Why is brand positioning important for businesses in
              Dubai?
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
