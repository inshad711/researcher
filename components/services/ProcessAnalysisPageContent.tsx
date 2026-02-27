import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const assistancePoints = [
  "Identify gaps and understand what is missing in operations.",
  "Outline all available resources. This reveals the business' capacity and availability for the additional work.",
  "Create new processes that align with the current culture and climate.",
  "Reduce redundancies, inefficiencies, and bottlenecks.",
  "Improve employee adoption, make workflows more efficient, and strengthen company culture.",
  "Optimize deployment and release processes: Efficient processes create smoother releases and deployments.",
];

const stages = [
  "Identifying and reviewing the processes you want to analyze",
  "Collect data and review how the process functions against defined metrics.",
  "Analyze processes",
  "Create an opportunity for improvement and make changes.",
];

export default function ProcessAnalysisPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-24 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Business Analysis</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Process Analysis</h1>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Business owners, companies, and organizations depend on processes to get work done. However, most failed
              to review their processes to ensure that they were still adhering to industry best practices and that
              they allowed the employee to focus on and prioritize important tasks without bothering them.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Do you know inefficient business process analyses lead to financial loss, missed timelines, and
              eventually customer churn?
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
                href="/services/business-analysis"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Business Analysis
              </Link>
            </div>
          </div>

          <div className="grid gap-3 md:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Service</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Process Analysis</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Purpose</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Streamline operations for optimal service delivery</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Impact</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Reduce inefficiencies and customer churn risk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-5 md:p-7">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/blockchain-1024x683.jpg"
              alt="Process Analysis"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we help you streamline your process for optimal service delivery.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Business process analysis (BPA) or simply "process analysis" is an approach to analyzing and reviewing
              the processes that govern business operations.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              It examines each stage of a process to identify what is working well, what needs improvement, and how
              the improvement can be implemented.
            </p>
            <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
              Why should you conduct your business process analysis with US?
            </h2>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="order-2 rounded-2xl border border-slate-200 bg-white p-6 lg:order-1 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">We will assist you.</h2>
            <ul className="mt-5 space-y-3">
              {assistancePoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="order-1 rounded-2xl border border-slate-200 bg-white p-5 lg:order-2 lg:col-span-5 md:p-7">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Analytics-1024x400.jpg"
              alt="Process Analysis"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-5 md:p-7">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Data-Processing-1024x917.jpg"
              alt="Benchmarking Marketing"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              We take your business process analysis through the following stages:
            </h2>
            <ul className="mt-5 space-y-3">
              {stages.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
