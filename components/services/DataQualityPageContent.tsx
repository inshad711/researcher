import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const qualityDimensions = ["Completeness", "Conformity", "Reliability", "Relevance"];

const qualityIndicators = [
  "Data Profiling",
  "Data Matching",
  "Data Quality Reporting",
  "Master Data Management (MDM)",
  "Customer Data Integration (CDI)",
  "Product Information Management (PIM)",
  "Digital Asset Management (DAM)",
];

export default function DataQualityPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-24 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Data quality.</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Data quality.</h1>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            As data becomes a core part of every business operation, the quality of the data gathered, stored, and
            consumed during business processes significantly impacts the overall success of the business.
          </p>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            Data quality is critical to accurate data analysis and a reliable and trusted business decision.
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
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              Back to Analytics Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-12 md:p-8">
          <article className="md:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Business-Analysis-1024x687.jpg"
              alt="Data Quality"
              className="h-full max-h-[380px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="md:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              As researchers, we use data attributes to get the correct context and measure data quality. Data quality
              dimensions to measure and improve data accuracy are
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {qualityDimensions.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <p className="text-sm leading-6 text-slate-700 md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-12 md:p-8">
          <article className="md:col-span-7">
            <h3 className="text-xl font-semibold leading-tight md:text-2xl">
              We employ various remedies to prevent data quality issues and meet data quality key performance
              indicators (KPIs).
            </h3>
            <h2 className="mt-4 text-lg font-semibold leading-tight md:text-2xl">
              The following data quality dimension is used to measure the data quality indicators (KPIs):
            </h2>

            <ul className="mt-5 space-y-3">
              {qualityIndicators.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <span className="text-sm leading-6 text-slate-700 md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="md:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Competitor-Analysis-1024x683.jpg"
              alt="Fulfіllіng Сuѕtоmеrѕ"
              className="h-full max-h-[500px] w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
