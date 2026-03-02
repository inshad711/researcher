import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const positioningBenefits = [
  "Create a unique and memorable place in the market.",
  "Improve customer trust and long-term brand loyalty.",
  "Differentiate clearly from competitors.",
  "Support stronger pricing and value communication.",
  "Guide smarter marketing and product decisions.",
  "Increase consistency across all brand touchpoints.",
];

const strategies = [
  "Customer Service Positioning",
  "Convergence-Based Strategy",
  "Price-Based Positioning",
  "Quality-Based Positioning",
  "Differentiation Strategy",
  "Social Media Positioning",
];

const researchSteps = [
  {
    title: "Define Your Brand Identity",
    description:
      "Brand identity studies reveal how your audience perceives your values, personality, and promise.",
  },
  {
    title: "Measure Brand Awareness",
    description:
      "Awareness research identifies your visibility in the UAE market and helps improve recall in target segments.",
  },
  {
    title: "Analyze Image and Equity",
    description:
      "Image and equity analysis explains consumer sentiment and the market value your brand currently holds.",
  },
  {
    title: "Benchmark Against Competitors",
    description:
      "Benchmarking compares your performance with industry leaders and direct competitors to expose gaps and opportunities.",
  },
  {
    title: "Refine Market Perception",
    description:
      "Perception tracking supports practical action plans to strengthen positive associations and correct misconceptions.",
  },
];

const whyChooseUs = [
  "Deep understanding of UAE market behavior and culture",
  "Tailored positioning frameworks for each business model",
  "Comprehensive competitive and benchmark analysis",
  "Data-driven recommendations with measurable outcomes",
  "Continuous monitoring to keep your brand relevant",
  "Proven expertise in Dubai and GCC market projects",
];

const faqItems: FaqItem[] = [
  {
    question: "Why is brand positioning important in the UAE market?",
    answer:
      "Brand positioning shapes how customers remember and compare your brand. In a competitive UAE market, clear positioning improves visibility, relevance, and preference.",
  },
  {
    question: "Can Researchers.me help reposition an existing brand?",
    answer:
      "Yes. We analyze current perception, market shifts, and competitor movements, then design a practical repositioning plan with measurable goals.",
  },
  {
    question: "How does benchmarking support positioning strategy?",
    answer:
      "Benchmarking shows how your brand performs versus competitors and industry standards, helping you prioritize high-impact improvements.",
  },
  {
    question: "What data is used for brand positioning and benchmarking?",
    answer:
      "We combine quantitative and qualitative inputs including awareness metrics, sentiment signals, customer feedback, and competitive intelligence.",
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
  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="brand-positioning-benchmarking-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Brand Positioning and Benchmarking
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Brand Positioning & Benchmarking Services in Dubai, UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              We help organizations define a clear market position, benchmark against competitors,
              and build a stronger brand perception across key customer segments.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our approach combines market research, consumer insight, and data-backed strategy so
              your brand can compete with confidence and grow with direction.
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
                href="/services/market-research-measurement"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Services
              </Link>
            </div>
          </article>

          <article className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Brand strategy and benchmarking team"
              className="h-full min-h-[300px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5 lg:order-2">
            <img
              src="/image/46908.webp"
              alt="Brand positioning workshop discussion"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Business Value
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Why Brand Positioning Matters for Growth
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {positioningBenefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Positioning Strategies
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Core Strategies We Apply</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strategies.map((item, index) => (
              <article key={item} className="rounded-2xl border border-slate-200 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Strategy {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Research Framework
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Five-Step Method for Positioning and Benchmarking
            </h2>
            <ol className="mt-6 space-y-3">
              {researchSteps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-slate-200 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900 md:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{step.description}</p>
                </li>
              ))}
            </ol>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Brand research and benchmarking process"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-5">
            <img
              src="/image/ef920cc1-46a3-4604-9dd1-3ea562976bd9.jpg"
              alt="Brand consulting and strategic planning"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Researchers.me
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Why Choose Us for Brand Positioning in Dubai
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">FAQ</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="templateContainer">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-10 text-white md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Ready to Start</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Build a Clear Market Position with Data-Backed Benchmarking
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
              Partner with our research team to understand your current position, benchmark smartly,
              and create a stronger brand strategy for sustainable growth.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/market-research-measurement"
                className="inline-flex items-center rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
