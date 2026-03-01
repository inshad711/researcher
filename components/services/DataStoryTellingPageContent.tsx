import Link from "next/link";
import Script from "next/script";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Lightbulb,
  LineChart,
  MessageSquareText,
  Presentation,
  Target,
} from "lucide-react";

type StoryType = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

const coreComponents: StoryType[] = [
  {
    title: "Narrative Structure",
    description:
      "We define a clear storyline that connects metrics to business context, decisions, and expected outcomes.",
    icon: MessageSquareText,
  },
  {
    title: "Visual Communication",
    description:
      "Charts, dashboards, and infographics are designed for clarity, not decoration, so stakeholders can interpret results quickly.",
    icon: Presentation,
  },
  {
    title: "Evidence-Based Insights",
    description:
      "Every recommendation is backed by validated data and transparent assumptions to support confident action.",
    icon: BarChart3,
  },
];

const storytellingTypes: StoryType[] = [
  {
    title: "Descriptive Storytelling",
    description: "Explains historical performance and trends to establish context and baseline understanding.",
    icon: LineChart,
  },
  {
    title: "Predictive Storytelling",
    description: "Uses statistical and analytical models to project likely outcomes and emerging patterns.",
    icon: Target,
  },
  {
    title: "Prescriptive Storytelling",
    description: "Translates analysis into specific actions, priorities, and decision paths for leadership teams.",
    icon: Lightbulb,
  },
];

const deliverySteps = [
  "Market and audience research to align narrative direction.",
  "Data validation and contextual analysis for decision reliability.",
  "Design of visual assets tailored to stakeholder needs.",
  "Narrative development linking insight to business impact.",
  "Collaborative review with client teams and decision-makers.",
  "Implementation support for reports, presentations, and dashboards.",
  "Continuous optimization based on performance feedback.",
];

const differentiators = [
  "Cross-functional team covering analytics, strategy, and visualization",
  "Experience with startups and enterprise delivery models",
  "Regional market awareness with compliance-conscious execution",
  "Decision-focused outputs built for leadership communication",
];

const faqItems: FaqItem[] = [
  {
    question: "What is data storytelling in a business context?",
    answer:
      "It is the practice of combining data, narrative, and visuals to explain performance, clarify decisions, and align stakeholders.",
  },
  {
    question: "How does it improve business outcomes?",
    answer:
      "It improves decision speed and quality by making insights easier to interpret, prioritize, and act on across teams.",
  },
  {
    question: "Is this suitable for both startups and established organizations?",
    answer:
      "Yes. We tailor scope, depth, and reporting formats to organizational maturity, available data, and strategic objectives.",
  },
  {
    question: "What makes Researchers different?",
    answer:
      "We combine analysis rigor with practical communication design, ensuring the final output is both technically sound and executive-ready.",
  },
  {
    question: "When can we expect measurable impact?",
    answer:
      "Most teams see early impact within the first few months, depending on data readiness and implementation cadence.",
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

export default function DataStoryTellingPageContent() {
  return (
    <main className="bg-slate-50 pt-36 pb-20 text-slate-900">
      <Script id="data-storytelling-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">Data Story Telling</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
              Turn analytics into decisions people can trust
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
              We help teams convert complex datasets into clear business narratives through structured storytelling,
              precise visual communication, and evidence-backed recommendations.
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
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Services
              </Link>
            </div>
          </div>

          <div className="grid gap-3 md:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Deliverable</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Decision-ready reporting</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Outcome</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Executive communication clarity</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Value</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Actionable priorities and next steps</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Why Data Storytelling Matters</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Most organizations have data but struggle to communicate what it means. Data storytelling bridges that gap
              by connecting analysis to decisions, priorities, and execution.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              We use infographics, charts, and narrative framing to make insights understandable across technical and
              non-technical audiences.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-2">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/02/rese-11.jpg"
              alt="Data storytelling collaboration"
              className="h-56 w-full rounded-xl object-cover"
            />
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our deliverables are designed for boardrooms, management reviews, and operational teams that need clarity
              under time pressure.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Core Components</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {coreComponents.map((component) => {
              const Icon = component.icon;
              return (
                <article key={component.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <Icon className="h-5 w-5 text-cyan-700" />
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{component.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{component.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Types of Data Storytelling</h2>
            <div className="mt-5 space-y-3">
              {storytellingTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-cyan-50 p-6 lg:col-span-5 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">Why Choose Researchers</h3>
            <ul className="mt-4 space-y-3">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Delivery Approach</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {deliverySteps.map((step, index) => (
              <div key={step} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">{faq.question}</summary>
                <p className="mt-2 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">Ready To Start</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-4xl">
              Build your next data story with clarity and impact
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
              We combine narrative strategy, visualization design, and data rigor to help teams communicate insights that drive decisions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="grid gap-3 md:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Decision-first storytelling</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Output</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Board-ready narrative assets</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
