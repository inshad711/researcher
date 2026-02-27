import Link from "next/link";
import Script from "next/script";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BarChart2,
  Box,
  CheckCircle2,
  Layers,
  LineChart,
  Microscope,
  Package,
  Tag,
  TrendingUp,
  Wrench,
} from "lucide-react";

type IconItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

const focusAreas = [
  "Product design and component",
  "Manufacturing process",
  "Packaging, and productivity",
  "Utility and usefulness",
  "Durability and efficiency",
  "Product marketing and cost",
  "Unique selling proposition",
];

const essenceItems: IconItem[] = [
  {
    title: "Pricing Research",
    description:
      "Understanding the pricing dynamics is crucial for product success. Pricing research involves assessing costs, competitive pricing, and market demand, ensuring an optimal pricing strategy.",
    icon: Tag,
  },
  {
    title: "Product Testing and Analysis",
    description:
      "Product testing evaluates design, manufacturing, packaging, and utility aspects. This thorough analysis ensures the product meets quality standards and aligns with customer expectations.",
    icon: Microscope,
  },
  {
    title: "Product Market Research",
    description:
      "Market research identifies market needs, consumer preferences, and competitive positioning, guiding effective product marketing strategies.",
    icon: BarChart2,
  },
  {
    title: "Product Performance Assessment",
    description:
      "Performance analysis delves into efficiency, durability, and unique selling propositions. It aids in enhancing the product's value proposition and competitiveness.",
    icon: TrendingUp,
  },
];

const analysisTypes: IconItem[] = [
  {
    title: "Design Analysis",
    description:
      "Assesses the aesthetic appeal, functionality, and user experience of a product. It scrutinizes the design's attractiveness, usability, and alignment with consumer preferences.",
    icon: Layers,
  },
  {
    title: "Manufacturing Process Evaluation",
    description:
      "A comprehensive evaluation of the product's manufacturing journey aimed at streamlining processes, enhancing efficiency, and ensuring quality control from raw materials to the final product.",
    icon: Wrench,
  },
  {
    title: "Packaging Assessment",
    description:
      "Evaluates the design, materials, and functionality of product packaging to optimize protection, convenience, and visual appeal while considering transportation and storage needs.",
    icon: Package,
  },
  {
    title: "Market Positioning and USP Analysis",
    description:
      "Explores how the product stands out among competitors and identifies unique features that resonate with consumers to define a compelling value proposition.",
    icon: LineChart,
  },
];

const differentiators = [
  "Comprehensive analysis from design to market performance",
  "Detailed product study reports with actionable insights",
  "Tailored marketing strategies based on USP identification",
  "Deep domain expertise in UAE, Dubai, and the Gulf Region",
  "Data-driven recommendations aligned with business objectives",
  "End-to-end support from research to strategic implementation",
];

const methodology = [
  "Define the product scope and key dimensions for analysis.",
  "Gather data on design, manufacturing, packaging, and market positioning.",
  "Conduct pricing research and competitive benchmarking.",
  "Assess product performance, durability, and utility metrics.",
  "Deliver comprehensive study reports with prioritized recommendations.",
];

const faqItems: FaqItem[] = [
  {
    question: "How does pricing research benefit product success?",
    answer:
      "Pricing research aids in understanding market dynamics, ensuring an optimal pricing strategy that attracts customers while maximizing profitability.",
  },
  {
    question: "What does product testing encompass in product analysis?",
    answer:
      "Product testing assesses design, manufacturing, packaging, and utility aspects, ensuring the product meets quality standards and aligns with consumer expectations.",
  },
  {
    question: "How can product performance analysis benefit business owners?",
    answer:
      "Product Performance Analysis aids in enhancing efficiency, durability, and unique selling propositions, ensuring a competitive edge in the market.",
  },
  {
    question: "What insights do product study reports offer?",
    answer:
      "Product study reports provide comprehensive insights into design, utility, market positioning, and performance, aiding in informed decision-making for businesses.",
  },
  {
    question: "How does Researchers.me tailor product marketing strategies?",
    answer:
      "We identify unique selling propositions through product analysis and tailor marketing strategies to resonate with target audiences, ensuring effective market penetration.",
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

export default function ProductAnalysisPageContent() {
  return (
    <main className="pt-32 pb-20 text-slate-900">
      <Script id="product-analysis-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 px-6 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.07)] md:px-10 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Business Analysis
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Product Analysis
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Product analysis involves an in-depth process of gathering, defining, and scrutinizing
            data about a product or service. Its primary aim is to provide actionable insights to
            facilitate informed decision-making.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              Design &amp; manufacturing review
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              Pricing &amp; market research
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              Performance &amp; USP assessment
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/business-analysis"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Back to Business Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* What we help you understand + Image */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Employee-engagement-1024x683.jpg"
              alt="Product analysis research"
              className="h-56 w-full rounded-xl object-cover"
            />
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We examine every dimension of your product — from the drawing board to the market shelf
              — so you can act on reliable, structured intelligence.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              What We Help You Understand About Your Product
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              At Researchers, we aim to help our clients understand the following so they can make
              informed decisions.
            </p>
            <ul className="mt-5 space-y-2">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-700" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* The Essence of Product Testing and Research */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            The Essence of Product Testing and Research
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 max-w-3xl">
            Product analysis services play a pivotal role in providing valuable insights for
            businesses. It encompasses examining various facets of a product to aid decision-making.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {essenceItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Product Analysis */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-8 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Types of Product Analysis</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Understanding different types of product analysis helps businesses gather crucial
              insights for strategic decision-making.
            </p>
            <div className="mt-5 space-y-3">
              {analysisTypes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-slate-600" />
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-slate-50 p-6 lg:col-span-4 md:p-8">
            <Box className="h-6 w-6 text-slate-700" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Our Approach</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              At Researchers.me, we specialize in conducting these essential types of product
              analysis, providing comprehensive insights to empower your product development and
              marketing strategies.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Structured, evidence-based methodology</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Tailored scope for each client engagement</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Clear deliverables with actionable findings</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* How We Work */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">How We Conduct Product Analysis</h2>
            <div className="mt-5 space-y-3">
              {methodology.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Why Choose Researchers.me</h3>
            <ul className="mt-4 space-y-3">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                Region
              </p>
              <p className="mt-1 text-sm font-medium text-slate-800">
                Dubai, UAE &amp; the wider Gulf Region
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 px-6 md:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-16 -top-12 h-52 w-52 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                Ready To Start
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-4xl">
                Need a complete analysis of your product?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                Partner with Researchers.me to gain deep product insights — from design and
                manufacturing to market positioning and performance — and turn data into strategic
                decisions.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/business-analysis"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Business Analysis
                </Link>
              </div>
            </div>

            <div className="grid gap-3 md:col-span-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Scope
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Design to market — end-to-end product study
                </p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Output
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Comprehensive report with strategic recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
