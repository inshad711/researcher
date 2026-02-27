import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TableauPageContent() {
  return (
    <main className="relative overflow-hidden bg-[#f6f7f9] pb-24 pt-24 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(30,41,59,0.05),transparent_35%)]" />

      <section className="relative px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[1.75rem] border border-slate-200/90 bg-white/95 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              Business Intelligence
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">TABLEAU</h1>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Tableau helps people and organizations become more data-driven. Tableau is the market-leading choice for
              modern business intelligence. It helps people and organizations become more data-driven.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              It has a user-friendly interface that makes it easier for business owners to explore and manage data and
              share beneficial insights about their businesses.
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

          <div className="grid gap-3 md:col-span-4 md:content-start">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Positioning</p>
              <p className="mt-2 text-sm font-medium text-slate-800">Market-leading modern BI platform</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Experience</p>
              <p className="mt-2 text-sm font-medium text-slate-800">Drag-and-drop visual analysis workflow</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Capability</p>
              <p className="mt-2 text-sm font-medium text-slate-800">Accessible augmented analytics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Qualitative-Survey-1024x627.jpg"
              alt="Qualitative Survey"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 lg:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">TABLEAU</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              As the market-leading choice for modern business intelligence, the Tableau platform is known for taking
              any kind of data from almost any system and turning it into actionable insights with speed and ease.
            </p>
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-700" />
                <span>It's as simple as dragging and dropping.</span>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="relative mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-12">
          <article className="order-2 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 lg:order-1 lg:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Advanced Insight Discovery</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Tableau enables limitless visual data exploration without interrupting the flow of analysis.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              It is characterized by augmented analytics innovations that help anyone-from data scientists to business
              users-uncover insights faster with accessible machine learning, statistics, natural language, and smart
              data preparation.
            </p>
          </article>

          <article className="order-1 rounded-2xl border border-slate-200 bg-white p-5 md:p-7 lg:order-2 lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Dashboard-Reporting-1024x683.jpg"
              alt="Tableau"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
