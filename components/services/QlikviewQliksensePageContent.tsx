import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const dataPreparationItems = [
  "Visual data preparation",
  "Advanced data preparation",
  "Data integration and connectivity",
  "Data Movement and Streaming",
  "Data Warehouse Automation",
  "Data Transformation",
  "Application Automation",
];

const analyticsItems = [
  "Visualization and Dashboards",
  "Augmented Analytics",
  "Embedded Analytics",
  "Self-service Analytics",
  "Alerting and Action",
];

export default function QlikviewQliksensePageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-36 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Business Intelligence</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Qlikview/Qliksense</h1>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Qlik closes the gaps between data, insights, and action. It turns raw data into informed actions. It
              makes your data and analytics real-time, AI-driven, collaborative, and actionable.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              It revolutionized the way organizations use data with intuitive visual discovery that put business
              intelligence in the hands of more people than ever.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Qlik Sense uses AI to help your users understand and use data more effectively, minimizing cognitive
              bias, amplifying discovery, and elevating data literacy.
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
                href="/services/business-intelligence"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to BI Services
              </Link>
            </div>
          </div>

          <div className="grid gap-3 md:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Augmented Intelligence</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Approach</p>
              <p className="mt-1 text-sm font-medium text-slate-800">AI-driven, collaborative, and actionable analytics</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Outcome</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Real-time insights with better data literacy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-5 md:p-7">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Data-Preparation-scaled.jpg"
              alt="Qualitative Research"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Data preparation</h2>
            <ul className="mt-5 space-y-3">
              {dataPreparationItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="order-2 rounded-2xl border border-slate-200 bg-white p-6 lg:order-1 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Analytics</h2>
            <ul className="mt-5 space-y-3">
              {analyticsItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="order-1 rounded-2xl border border-slate-200 bg-white p-2 lg:order-2 lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Analytics-1024x400.jpg"
              alt="Process Analysis"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
