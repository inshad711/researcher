import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  CheckCircle2,
  BarChart2,
  SearchCheck,
  TrendingUp,
  Lightbulb,
  Database,
  Zap,
  LineChart,
} from "lucide-react";

type FaqItem = { question: string; answer: string };

const analyticsTypes = [
  {
    icon: BarChart2,
    label: "What happened?",
    title: "Descriptive Analytics",
    desc: "Visualizes historical trends and patterns to give you a comprehensive view of past events and current status.",
  },
  {
    icon: SearchCheck,
    label: "Why did it happen?",
    title: "Diagnostic Analytics",
    desc: "Investigates root causes behind events and trends so teams can make proactive, evidence-backed decisions.",
  },
  {
    icon: TrendingUp,
    label: "What is next?",
    title: "Predictive Analytics",
    desc: "Forecasts possible outcomes from historical data using statistical models to support planning.",
  },
  {
    icon: Lightbulb,
    label: "What should be done?",
    title: "Prescriptive Analytics",
    desc: "Recommends best actions from analysis results to improve outcomes and reduce risk.",
  },
];

const whyChooseUs = [
  {
    title: "Expertise in advanced analytics tools",
    desc: "We work with modern analytics tools and techniques to produce practical insights, not just reports.",
  },
  {
    title: "Business enhancement focus",
    desc: "We identify growth opportunities from research data and convert findings into measurable business actions.",
  },
  {
    title: "Operational efficiency improvement",
    desc: "We streamline decision workflows and reduce process redundancy with data-driven recommendations.",
  },
];

const outcomes = [
  { icon: LineChart, label: "Informed decision-making" },
  { icon: TrendingUp, label: "Improved revenue" },
  { icon: Zap, label: "Increased operational efficiency" },
  { icon: Database, label: "Big data exploration" },
];

const faqItems: FaqItem[] = [
  {
    question: "How do data analytics tools impact business decisions?",
    answer:
      "Advanced analytics tools support informed strategic planning by applying multiple analysis methods on business data.",
  },
  {
    question: "How does Researchers.me use big data analytics for business enhancement?",
    answer:
      "We use large-scale data analysis to identify patterns, optimize processes, and uncover opportunities for growth.",
  },
  {
    question: "Can data analytics help in predicting future trends for businesses?",
    answer:
      "Yes. Predictive analytics models probable outcomes and helps organizations prepare proactive strategies.",
  },
  {
    question: "How does diagnostic analytics aid in business decision-making?",
    answer:
      "Diagnostic analytics explains why past outcomes happened, making it easier to solve root causes and improve decisions.",
  },
  {
    question: "What role does prescriptive analytics play in guiding business strategies?",
    answer:
      "Prescriptive analytics recommends specific next actions based on insights, so teams can execute with confidence.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function DataAnalyticsPageContent() {
  return (
    <main className="bg-gradient-to-br from-sky-50 via-cyan-50/60 to-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="data-analytics-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className=" border-slate-200 bg-gradient-to-br from-sky-50 via-cyan-50/60 to-white">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Data Analytics</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Turn raw data into decisions that matter
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Data analytics is a comprehensive approach encompassing both quantitative and qualitative
              methods used to interpret data, extracting meaningful insights that empower informed
              decision-making across every sector.
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
          </article>

          <article className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Data analytics planning"
              className="h-full min-h-[300px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5 lg:order-2">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Data analytics team discussion"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What We Do</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Answer key business questions with data
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Researchers uses the four types of data analytics to answer critical questions by
              examining datasets to uncover trends, correlations, patterns, and actionable insights.
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  q: "What happened?",
                  a: "Descriptive analytics identifies and interprets trends and patterns over a given period.",
                },
                {
                  q: "Why did it happen?",
                  a: "Diagnostic analytics determines why an event occurred by interpreting data causally.",
                },
                {
                  q: "What is going to happen?",
                  a: "Predictive analytics uses statistics to forecast future occurrences.",
                },
                {
                  q: "What needs to be done?",
                  a: "Prescriptive analytics recommends the best course of action.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl border border-sky-100 bg-sky-50/50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">{item.q}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Business Impact</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Leveraging advanced analytics tools for optimization
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Leveraging advanced data analytics tools empowers you to explore large datasets and
              apply diverse data analysis techniques to extract actionable intelligence.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              This enables smarter strategy optimization, operational refinement, and stronger
              decision-making for sustained performance.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Strategy optimization",
                "Operations refinement",
                "Big data exploration",
                "Actionable intelligence",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />
                  <span className="text-sm text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Business data dashboard analysis"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-sky-50/40">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-3xl">Outcomes through analytics</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <article key={o.label} className="rounded-2xl border border-sky-100 bg-sky-50/70 px-5 py-5">
                  <Icon className="h-5 w-5 text-sky-700" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">{o.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="templateContainer">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Methodology</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Types of data analytics</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
              Each type builds on the previous one. Together, they provide a complete view of past
              performance, root causes, probable futures, and best actions.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {analyticsTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="grid gap-0 overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/50 md:grid-cols-[64px_1fr]"
                >
                  <div className="flex items-center justify-center border-b border-sky-100 bg-sky-100/70 px-4 py-4 md:border-b-0 md:border-r">
                    <span className="text-xl font-bold text-sky-700">0{i + 1}</span>
                  </div>
                  <div className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-sky-700" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="templateContainer">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why Researchers.me</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Your dedicated data analytics company</h2>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                At Researchers.me, we combine expertise in advanced analytics tools with deep
                business understanding, delivering insights that translate directly into growth,
                efficiency, and competitive advantage.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Work with us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4 lg:col-span-8">
              {whyChooseUs.map((r, i) => (
                <div
                  key={r.title}
                  className="grid gap-0 overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/50 md:grid-cols-[72px_1fr]"
                >
                  <div className="flex items-center justify-center border-b border-sky-100 bg-sky-100/70 px-4 py-4 md:border-b-0 md:border-r">
                    <span className="text-2xl font-bold text-sky-700">0{i + 1}</span>
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="text-base font-semibold text-slate-900">{r.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200">
        <div className="templateContainer">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">FAQ</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Frequently asked questions</h2>
          </div>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-sky-100 bg-sky-50/40 px-6 py-5 open:border-sky-300 open:bg-sky-100/40"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition group-open:rotate-45 group-open:border-sky-400 group-open:text-sky-700">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="templateContainer">
          <div className="overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-cyan-50 to-white">
            <div className="grid lg:grid-cols-2">
              <div className="px-8 py-12 md:px-12 md:py-16">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Ready to get started</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                  Make data your most powerful business asset
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Through analytics, we help our clients with informed decision-making, improved
                  revenue, and increased operational efficiency across Dubai, UAE, and the Gulf
                  Region.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/analytics"
                    className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  >
                    Explore Analytics Services
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5 border-t border-sky-200 px-8 py-10 md:px-12 lg:border-l lg:border-t-0">
                {[
                  { label: "Method", value: "Descriptive, Diagnostic, Predictive & Prescriptive" },
                  { label: "Scope", value: "Dubai, UAE & Gulf Region" },
                  { label: "Output", value: "Actionable insights & strategic recommendations" },
                  { label: "Approach", value: "Research-driven, data-backed, business-focused" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-sky-200 pb-5 last:border-0 last:pb-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
