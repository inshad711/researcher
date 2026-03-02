import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const dashboardBenefits = [
  "KPIs visualization,",
  "Performance monitoring  ",
  "And additionally, the ability to interact with data within the dashboard to evaluate patterns and obtain insights, giving you the chance to act right away and make changes.",
];

const dashboardTypes = [
  {
    title: "Analytical Dashboard",
    description: "Used to explore trends, patterns, and root causes from historical and current data.",
  },
  {
    title: "Strategic Dashboard",
    description: "Tracks long-term goals and executive KPIs to support high-level business decisions.",
  },
  {
    title: "Operational Dashboard",
    description: "Monitors day-to-day activities in real time so teams can act quickly on issues.",
  },
  {
    title: "Tactical Dashboard",
    description: "Helps department managers measure short-term performance against team objectives.",
  },
];

export default function DashboardReportingPageContent() {
  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-12">
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
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
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
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Analytics Services
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-3xl">Types of dashboard reporting</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Dashboard reporting can be grouped into four practical types, each designed for a different decision level
            in the organization.
          </p>

          <ol className="mt-7 grid gap-4 md:grid-cols-2">
            {dashboardTypes.map((type, index) => (
              <li key={type.title} className="rounded-2xl border border-slate-200 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Type {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900 md:text-lg">{type.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{type.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
