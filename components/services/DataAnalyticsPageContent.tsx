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
    desc: "Visualizes historical trends and patterns to give you a comprehensive view of past events. This helps you understand your current status accurately and interpret data to identify meaningful patterns.",
  },
  {
    icon: SearchCheck,
    label: "Why did it happen?",
    title: "Diagnostic Analytics",
    desc: "Investigates the 'why' behind specific trends or events. By unraveling causal relationships, it empowers you to understand the underlying factors and make proactive, informed decisions.",
  },
  {
    icon: TrendingUp,
    label: "What's next?",
    title: "Predictive Analytics",
    desc: "Forecasts future outcomes based on historical data, using statistical models to allow you to anticipate future scenarios and craft proactive strategies before issues arise.",
  },
  {
    icon: Lightbulb,
    label: "What needs to be done?",
    title: "Prescriptive Analytics",
    desc: "Recommends optimal strategies based on insights from various data analysis techniques — guiding you towards the best course of action for favorable business outcomes.",
  },
];

const whyChooseUs = [
  {
    title: "Expertise in Advanced Analytics Tools",
    desc: "We boast proficiency in a suite of advanced data analytics tools, employing diverse analysis techniques to ensure meticulous analysis and deliver valuable insights for your decisions.",
  },
  {
    title: "Driving Business Enhancement",
    desc: "Through exhaustive research data analysis, we identify growth opportunities, harness insights to enhance operational efficiency, streamline strategies, and drive revenue growth.",
  },
  {
    title: "Enhancing Operational Efficiency",
    desc: "We optimize your business processes through data-driven strategies — streamlining operations, reducing redundancies, and enhancing overall efficiency within your organization.",
  },
];

const outcomes = [
  { icon: LineChart, label: "Informed decision-making" },
  { icon: TrendingUp, label: "Improved revenue" },
  { icon: Zap,       label: "Increased operational efficiency" },
  { icon: Database,  label: "Big data exploration" },
];

const faqItems: FaqItem[] = [
  {
    question: "How do data analytics tools impact business decisions?",
    answer: "Advanced data analytics tools enable informed decisions and strategic planning by leveraging diverse data analysis techniques in research.",
  },
  {
    question: "How does Researchers.me employ big data analytics for business enhancement?",
    answer: "Leveraging big data analytics, Researchers.me conducts comprehensive research data analysis, driving operational efficiency and fostering revenue growth.",
  },
  {
    question: "Can data analytics help in predicting future trends for businesses?",
    answer: "Absolutely. Predictive analytics in data analytics services forecasts future occurrences, aiding businesses in proactive strategies and anticipating market trends.",
  },
  {
    question: "How does diagnostic analytics aid in business decision-making?",
    answer: "Diagnostic analytics unravels the 'why' behind past events, offering valuable insights that contribute to proactive decision-making and addressing root causes.",
  },
  {
    question: "What role does prescriptive analytics play in guiding business strategies?",
    answer: "Prescriptive analytics recommends actionable strategies based on data insights, guiding businesses towards optimal courses of action for favorable outcomes.",
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
    <main className="bg-white text-slate-900">
      <Script id="data-analytics-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* ── HERO ── */}
      <section className="border-b border-slate-100 bg-linear-to-br from-cyan-50 via-white to-sky-50 px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full border border-cyan-200 bg-cyan-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Data Analytics
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
            Turn raw data into<br />
            <span className="text-cyan-600">decisions that matter.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Data analytics is a comprehensive approach encompassing both quantitative and qualitative
            methods used to interpret data — extracting meaningful insights that empower informed
            decision-making across every sector.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/analytics"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              Back to Services
            </Link>
          </div>

          {/* stat strip */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
            {outcomes.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.label} className="flex items-center gap-3 bg-white px-6 py-5">
                  <Icon className="h-5 w-5 shrink-0 text-cyan-600" />
                  <p className="text-sm font-medium text-slate-800">{o.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT IS DATA ANALYTICS — editorial split ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* image */}
            <div className="relative">
              <img
                src="https://www.researchers.me/wp-content/uploads/2022/11/Mystery-shopping-1024x683.jpg"
                alt="Diagnostic Analytics"
                className="h-105 w-full rounded-3xl object-cover lg:h-120"
              />
              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:-right-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Core purpose</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 max-w-45 leading-snug">
                  Extract meaningful insights from your data
                </p>
              </div>
            </div>

            {/* text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">What we do</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Answer the three W's about your business
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Researchers uses the four types of data analytics to help you answer the most
                critical questions your business faces — examining data sets to uncover trends,
                correlations, patterns, and actionable information.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { q: "What happened?",          a: "Descriptive analytics identifies and interprets trends and patterns over a given period." },
                  { q: "Why did it happen?",       a: "Diagnostic analytics determines why an event occurred by interpreting data causally." },
                  { q: "What is going to happen?", a: "Predictive analytics uses statistics to forecast future occurrences." },
                  { q: "What needs to be done?",   a: "Prescriptive analytics recommends the best course of action to take." },
                ].map((item) => (
                  <div key={item.q} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold text-cyan-700">{item.q}</p>
                    <p className="mt-0.5 text-sm leading-6 text-slate-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANCED TOOLS — full-width banner ── */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">Big data</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Leveraging advanced analytics tools for business optimization
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Leveraging advanced data analytics tools empowers you to dive into the world of big
                data analytics. These tools enable you to explore extensive datasets, applying
                diverse data analysis techniques to extract actionable intelligence.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This wealth of information aids in optimizing your strategies, refining operations,
                and fostering strategic decision-making for enhanced business performance.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Strategy optimization", "Operations refinement", "Big data exploration", "Actionable intelligence"].map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600" />
                    <span className="text-sm text-slate-700">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* outcome callout */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Through analytics, we help clients with</p>
              <div className="mt-6 space-y-5">
                {[
                  { icon: Lightbulb, title: "Informed decision-making",      desc: "Data-backed decisions that remove guesswork and align teams with evidence." },
                  { icon: TrendingUp, title: "Improved revenue",             desc: "Growth opportunities identified through deep research data analysis." },
                  { icon: Zap,       title: "Increased operational efficiency", desc: "Streamlined processes and reduced redundancies across your organization." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                        <Icon className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR TYPES — cards ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">Methodology</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Types of data analytics
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Each type builds on the previous — together they give you a complete picture of your
              business performance, causes, future, and best next steps.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {analyticsTypes.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="grid gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-[64px_1fr] transition hover:border-cyan-200 hover:shadow-sm"
                >
                  {/* number sidebar */}
                  <div className="flex items-center justify-center border-b border-slate-100 bg-cyan-50 px-4 py-4 md:border-b-0 md:border-r">
                    <span className="text-xl font-bold text-cyan-300">0{i + 1}</span>
                  </div>
                  {/* content */}
                  <div className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-cyan-600" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">{item.label}</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">Why Researchers.me</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Your dedicated data analytics company
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                At Researchers.me, we combine expertise in advanced analytics tools with deep
                business understanding — delivering insights that translate directly into growth,
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
                <div key={r.title} className="grid gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-[72px_1fr]">
                  <div className="flex items-center justify-center border-b border-slate-100 bg-slate-50 px-4 py-4 md:border-b-0 md:border-r">
                    <span className="text-2xl font-bold text-slate-200">0{i + 1}</span>
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="text-base font-semibold text-slate-900">{r.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 open:border-cyan-200 open:bg-cyan-50/40"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition group-open:rotate-45 group-open:border-cyan-300 group-open:text-cyan-600">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-200 bg-linear-to-br from-cyan-50 via-sky-50 to-white">
          <div className="grid lg:grid-cols-2">
            <div className="px-8 py-12 md:px-12 md:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600">
                Ready to get started
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                Make data your most powerful business asset
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Through analytics, we help our clients with informed decision-making, improved
                revenue, and increased operational efficiency — across Dubai, UAE, and the Gulf Region.
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
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Explore Analytics Services
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 border-t border-cyan-200 px-8 py-10 md:px-12 lg:border-l lg:border-t-0">
              {[
                { label: "Method",   value: "Descriptive, Diagnostic, Predictive & Prescriptive" },
                { label: "Scope",    value: "Dubai, UAE & Gulf Region" },
                { label: "Output",   value: "Actionable insights & strategic recommendations" },
                { label: "Approach", value: "Research-driven, data-backed, business-focused" },
              ].map((item) => (
                <div key={item.label} className="border-b border-cyan-100 pb-5 last:border-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
