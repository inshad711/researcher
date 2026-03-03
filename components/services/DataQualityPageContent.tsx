import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const qualityDimensions = [
  "Completeness",
  "Conformity",
  "Reliability",
  "Relevance",
];

const qualityIndicators = [
  {
    title: "Data Profiling",
    desc: "Assess source quality, detect anomalies, and identify missing or inconsistent values.",
  },
  {
    title: "Data Matching",
    desc: "Resolve duplicates and align records across systems for unified entity views.",
  },
  {
    title: "Data Quality Reporting",
    desc: "Track key quality metrics and trends to support governance and corrective action.",
  },
  {
    title: "Master Data Management (MDM)",
    desc: "Create trusted master records shared consistently across departments and platforms.",
  },
  {
    title: "Customer Data Integration (CDI)",
    desc: "Consolidate customer records into accurate profiles for better service and analytics.",
  },
  {
    title: "Product Information Management (PIM)",
    desc: "Standardize product attributes and taxonomy to improve consistency and delivery.",
  },
  {
    title: "Digital Asset Management (DAM)",
    desc: "Organize, govern, and maintain digital assets with reliable metadata and controls.",
  },
];

export default function DataQualityPageContent() {
  return (
    <main className="bg-slate-50 pb-16 pt-28 text-slate-900 md:pt-32">
      <section className="border-b border-slate-200/80">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Data Quality</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Build confidence with trusted, decision-ready data
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              As data becomes a core part of every business operation, the quality of data gathered, stored, and
              consumed directly impacts business outcomes.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              High-quality data is essential for accurate analytics, operational reliability, and confident strategic
              decisions.
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
              alt="Data quality planning"
              className="h-full min-h-[300px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200/80">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5 lg:order-2">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Data quality dimensions workshop"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>

          <article className="lg:col-span-7 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Quality Dimensions</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
              Measure and improve data quality with clear dimensions
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              We use practical data attributes to establish context, monitor quality, and drive continuous improvement
              across your analytics and operations.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {qualityDimensions.map((dimension) => (
                <div key={dimension} className="rounded-2xl border border-slate-200 bg-slate-100/60 px-4 py-4">
                  <p className="text-sm font-medium leading-6 text-slate-700">{dimension}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-100/40">
        <div className="templateContainer">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">KPI Indicators</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Remedies and controls we use to meet data quality KPIs
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {qualityIndicators.map((item, i) => (
              <article
                key={item.title}
                className="grid gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/60 md:grid-cols-[72px_1fr]"
              >
                <div className="flex items-center justify-center border-b border-slate-200 bg-slate-200/70 px-4 py-4 md:border-b-0 md:border-r">
                  <span className="text-xl font-bold text-slate-700">0{i + 1}</span>
                </div>
                <div className="px-6 py-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-700" />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Implementation Outcome</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Reduce risk and improve decisions with reliable data quality
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              With the right data quality framework, organizations reduce reporting errors, improve governance, and
              strengthen confidence in operational and strategic planning.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              The result is faster analytics delivery, stronger compliance, and better return from every data
              investment.
            </p>
          </article>

          <article className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Data quality outcomes dashboard"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
