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
  Sparkles,
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
  "Product design and component quality",
  "Manufacturing process efficiency",
  "Packaging and productivity balance",
  "Utility and practical usefulness",
  "Durability and performance efficiency",
  "Product marketing and cost structure",
  "Unique selling proposition clarity",
];

const essenceItems: IconItem[] = [
  {
    title: "Pricing Research",
    description:
      "Understand cost realities, competitor positioning, and demand behavior to set a pricing strategy that protects margin and market fit.",
    icon: Tag,
  },
  {
    title: "Product Testing and Analysis",
    description:
      "Evaluate design, production, packaging, and usability dimensions to validate quality and identify practical improvements before scaling.",
    icon: Microscope,
  },
  {
    title: "Product Market Research",
    description:
      "Map customer needs, behavior patterns, and competitive context to shape launch direction and improve market penetration.",
    icon: BarChart2,
  },
  {
    title: "Product Performance Assessment",
    description:
      "Measure durability, efficiency, and value perception to improve your product edge and strengthen long-term competitiveness.",
    icon: TrendingUp,
  },
];

const analysisTypes: IconItem[] = [
  {
    title: "Design Analysis",
    description:
      "Assess aesthetic appeal, usability, and customer interaction quality to ensure your product experience aligns with audience expectations.",
    icon: Layers,
  },
  {
    title: "Manufacturing Process Evaluation",
    description:
      "Review the full production flow from material input to final output to reduce bottlenecks and improve consistency at scale.",
    icon: Wrench,
  },
  {
    title: "Packaging Assessment",
    description:
      "Examine packaging structure, visual communication, protection quality, and logistics practicality across storage and transport.",
    icon: Package,
  },
  {
    title: "Market Positioning and USP Analysis",
    description:
      "Define how your product stands apart in crowded categories and frame a value story that resonates with real buyer priorities.",
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
  "Define product scope and analysis priorities with your team.",
  "Collect data across design, manufacturing, packaging, and positioning.",
  "Run pricing research and competitive benchmarking.",
  "Assess utility, durability, and performance metrics.",
  "Deliver a prioritized report with strategic recommendations.",
];

const faqItems: FaqItem[] = [
  {
    question: "How does pricing research benefit product success?",
    answer:
      "Pricing research clarifies demand behavior, market expectations, and competitive ranges so businesses can set profitable and sustainable pricing models.",
  },
  {
    question: "What does product testing include in your analysis?",
    answer:
      "It includes evaluating design quality, production reliability, packaging performance, and practical product utility against market expectations.",
  },
  {
    question: "How does product performance analysis help business owners?",
    answer:
      "It reveals where efficiency, durability, and value perception can be improved, helping owners strengthen differentiation and reduce avoidable product risk.",
  },
  {
    question: "What do product study reports typically provide?",
    answer:
      "They provide structured insights on design, utility, positioning, and performance with prioritized recommendations to guide product decisions.",
  },
  {
    question: "How does Researchers.me tailor product marketing strategies?",
    answer:
      "We identify true product strengths and customer-relevant USPs, then map them into market strategies that fit your target audience and category context.",
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
    <main className="relative overflow-hidden bg-white pb-24 pt-34 text-slate-900">
   
      <section className="relative">
        <div className="templateContainer">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                <Sparkles className="h-3.5 w-3.5" />
                Business Analysis
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight md:text-6xl">
                Product Analysis
                <span className="mt-1 block text-slate-700">from concept to market impact.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                Product analysis is a structured deep dive into design, production, pricing, and
                market behavior. We transform scattered product data into clear decisions for
                stronger launches, better positioning, and measurable performance gains.
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
                  href="/services/business-analysis"
                  className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
                >
                  Back to Business Analysis
                </Link>
              </div>
            </div>

            <div className="grid gap-3 lg:col-span-4 lg:content-start">
              {[
                { label: "Coverage", value: "Design, manufacturing, packaging, market" },
                { label: "Output", value: "Action-ready product study report" },
                { label: "Region", value: "Dubai, UAE, and Gulf market context" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-slate-300 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-3">
        <div className="templateContainer">
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="lg:col-span-5">
              <img
                src="https://www.researchers.me/wp-content/uploads/2022/11/Employee-engagement-1024x683.jpg"
                alt="Product analysis research"
                className="h-60 w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(15,23,42,0.12)] md:h-72"
              />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We examine every product layer, from early concept decisions to market shelf
                performance, so your team moves on evidence instead of assumptions.
              </p>
            </article>

            <article className="lg:col-span-7">
              <div className="flex items-center gap-2 text-slate-700">
                <Box className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Analysis Focus
                </p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                What we help you understand about your product
              </h2>
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-slate-200 pb-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                    <span className="text-sm font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mt-3">
        <div className="bg-slate-100 py-12">
          <div className="templateContainer">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
              The Core Stack
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
              The essence of product testing and research
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Effective product analysis combines technical testing, market intelligence, and
              strategic interpretation. The result is clearer priorities and faster decision cycles.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {essenceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="border-l border-slate-300 pl-4">
                    <Icon className="h-5 w-5 text-slate-700" />
                    <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-3">
        <div className="templateContainer">
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                Analysis Modules
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                Types of product analysis
              </h2>
              <div className="mt-6 space-y-3">
                {analysisTypes.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 border-b border-slate-200 pb-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-slate-700" />
                          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="lg:col-span-4">
              <h3 className="text-lg font-semibold text-slate-900">How we execute</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Every engagement follows a structured path so insights are practical, prioritized,
                and easy for teams to act on.
              </p>
              <div className="mt-5 space-y-3">
                {methodology.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 border-l-2 border-slate-300 pl-3">
                    <span className="mt-0.5 text-xs font-semibold text-slate-700">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mt-3">
        <div className="templateContainer">
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="lg:col-span-7">
              <h2 className="text-2xl font-semibold leading-tight md:text-4xl">
                Why choose Researchers.me
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-slate-200 pb-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                FAQ
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-5 space-y-3">
                {faqItems.map((faq) => (
                  <details key={faq.question} className="group border-b border-slate-200 pb-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900">
                      {faq.question}
                      <span className="mt-0.5 text-slate-400 transition group-open:rotate-45 group-open:text-slate-700">
                        +
                      </span>
                    </summary>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mt-4">
        <div className="templateContainer">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 p-6 md:p-10">
            <div className="relative grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                  Ready to start
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-900 md:text-4xl">
                  Need a complete analysis of your product?
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
                  Partner with Researchers.me to gain full-cycle product intelligence and turn raw
                  findings into a strategy your team can execute immediately.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/business-analysis"
                    className="inline-flex items-center rounded-full border border-slate-400 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-600"
                  >
                    Explore Business Analysis
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 md:col-span-4">
                <div className="border-l-2 border-slate-400/60 pl-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Scope
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    Design to market end-to-end product study
                  </p>
                </div>
                <div className="border-l-2 border-slate-400/60 pl-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Output
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    Prioritized report with strategic recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
