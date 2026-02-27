import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const dashboardBenefits = [
  "KPIs visualization,",
  "Performance monitoring  ",
  "And additionally, the ability to interact with data within the dashboard to evaluate patterns and obtain insights, giving you the chance to act right away and make changes.",
];

const dashboardTypes = ["Analytical", "Strategic", "Operational and", "Tactical"];

export default function DashboardReportingPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-24 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Dashboard Reporting.</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Dashboard Reporting.</h1>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            The key performance indicators (KPIs) of a business are shown graphically in dashboard reporting. It
            describes the practice of using data visualizations to track and report on business performance.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            It helps businesses make more informed decisions by
          </p>

          <ul className="mt-5 space-y-3">
            {dashboardBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span className="text-sm leading-6 text-slate-700 md:text-base">{benefit}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            It enables everyone in a company, regardless of technology skill level, to analyze data in real time
            through an intuitive dashboard.
            <br />
            Different types of charts, tables, graphs, and maps form dashboard reporting.
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
              src="https://www.researchers.me/wp-content/uploads/2022/11/calculator-1024x683.jpg"
              alt="Microsoft Power BI"
              className="h-full max-h-[380px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="md:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Types of dashboard reporting</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Dashboard reporting is classified into the following categories based on the needs of an organization:
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {dashboardTypes.map((type) => (
                <div key={type} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-800 md:text-base">{type}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
