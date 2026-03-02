import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const advantages = [
  "Understanding industry standards",
  "Discovering untapped niche markets",
  "Product and service differentiation",
  "Fulfilling customers' desires better than competitors",
  "Distinguishing your brand",
  "Measuring your growth",
];

const framework = [
  "Discover who your competitors are.",
  "Describe your competitors' business structures.",
  "Evaluate value propositions and marketing efforts.",
  "Analyze customer journey and audience engagement.",
  "Conduct a SWOT analysis for key competitors.",
];

const strategyPoints = [
  {
    title: "Strategic Decision-Making",
    text: "Competitor analysis gives practical visibility into market moves so businesses can align pricing, messaging, and product direction with confidence.",
  },
  {
    title: "Identifying Opportunities and Threats",
    text: "A structured view of competitors reveals white-space opportunities and early warning signals so your team can act before market shifts become risks.",
  },
  {
    title: "Sharper Market Positioning",
    text: "Knowing where competitors are strong or weak helps define a clearer value proposition and position your offer around unmet customer expectations.",
  },
  {
    title: "Adaptation to Market Changes",
    text: "Continuous monitoring supports quick response to trend changes, campaign shifts, and new entrants in dynamic markets like the UAE and GCC.",
  },
];

const chooseUsPoints = [
  "Strong understanding of UAE and GCC business dynamics",
  "Deep, multi-source competitive intelligence approach",
  "Customized frameworks for startups and established companies",
  "Actionable outputs, not just descriptive reports",
  "Proven research execution across multiple industries",
  "Clear recommendations aligned with business goals",
];

const faqItems: FaqItem[] = [
  {
    question: "How frequently should competitor analysis be conducted?",
    answer:
      "Frequency depends on market speed, but quarterly reviews are usually effective. In fast-changing categories, monthly tracking can be more suitable.",
  },
  {
    question: "Is competitor analysis useful for small businesses and startups?",
    answer:
      "Yes. It helps smaller businesses identify niche opportunities, avoid expensive trial-and-error, and prioritize high-impact competitive moves.",
  },
  {
    question: "How do you ensure competitor analysis data is accurate?",
    answer:
      "We triangulate findings using multiple sources and apply validation checks so the output reflects realistic competitor behavior and market conditions.",
  },
  {
    question: "Can competitor analysis help identify market gaps?",
    answer:
      "Yes. Gap identification is one of the main outcomes. It highlights underserved needs, under-communicated value areas, and possible differentiation routes.",
  },
  {
    question: "Is competitor analysis a one-time project?",
    answer:
      "No. It works best as an ongoing process that supports strategy updates and helps teams stay ahead of competitor and customer shifts.",
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
  return (
    <main className="pb-0 pt-24 text-slate-900 md:pt-28">
      <Script id="competitor-analysis-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Competitor Analysis
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Competitor and Market Research Analysis in UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Competitor and market analysis helps businesses understand competing offers, messaging,
              pricing, and customer engagement models in their category.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              This insight supports better strategic decisions for business owners, marketers,
              startups, and product teams that need stronger market positioning.
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
              alt="Competitor analysis and market research team"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5 lg:order-2">
            <img
              src="/image/46908.webp"
              alt="Business strategy and competitor benchmarking discussion"
              className="h-full min-h-[300px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Business Value
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Advantages of Competitive Analysis
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
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
            Evaluation Framework
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Steps We Use to Evaluate Competitors
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {framework.map((step, index) => (
              <article key={step} className="rounded-2xl border border-slate-300 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Strategic Importance
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Why Competitor Strategy Analysis Matters in UAE
            </h2>
            <div className="mt-6 space-y-3">
              {strategyPoints.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-slate-300 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Point {index + 1}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900 md:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Team reviewing market and competitor performance"
              className="h-full min-h-[340px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-5">
            <img
              src="/image/ef920cc1-46a3-4604-9dd1-3ea562976bd9.jpg"
              alt="Competitive intelligence consulting session"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Researchers.me
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Why Choose Us for Competitor Analysis
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {chooseUsPoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-b border-slate-300">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">FAQ</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions on Competitor Analysis
          </h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-300 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
