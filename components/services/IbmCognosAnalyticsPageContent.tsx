import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IbmCognosAnalyticsPageContent() {
  return (
    <main className="bg-stone-50 pb-20 pt-24 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(28,25,23,0.08)]">
          <div className="border-b border-stone-200 bg-stone-100 px-8 py-6 md:px-12 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-600">IBM Cognos Analytics</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">IBM Cognos Analytics</h1>
          </div>

          <div className="px-8 py-8 md:px-12 md:py-10">
            <p className="max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
              IBM Cognos Analytics is an integrated business intelligence (BI) solution. It offers a wide range of
              features, including reporting, analysis, dashboards, stories, modeling, and event organization to better
              understand the data in your company.
            </p>
            <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
              Everyone in an organization can use IBM Cognos BI to view or create business reports, analyze data, and
              monitor events and metrics so that they can make effective business decisions.
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
                className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-stone-500"
              >
                Back to BI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/calculator-1024x683.jpg"
              alt="Microsoft Power BI"
              className="h-full max-h-[420px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 lg:col-span-7">
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              Cognos Analytic allows users to access the portal from either a desktop or mobile device. Whether
              you&apos;re an analyst, report author, data modeler, or administrator, you can get started yourself by
              uploading local files and creating visualizations in dashboards or stories.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-12">
          <article className="order-2 rounded-2xl border border-stone-200 bg-white p-6 md:p-8 lg:order-1 lg:col-span-7">
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              It runs without any issues. After installing and configuring Cognos Analytics, administrators set up
              security and link data sources. The application is then ready to be explored. It comes with different
              user interfaces and different levels of permission depending on your role in the organization, access
              permissions, customizations, or type of offering.
            </p>
          </article>

          <article className="order-1 rounded-2xl border border-stone-200 bg-white p-6 md:p-8 lg:order-2 lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Business-Intelligence-1024x683.jpg"
              alt="Brand Positioning"
              className="h-full max-h-[420px] w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
