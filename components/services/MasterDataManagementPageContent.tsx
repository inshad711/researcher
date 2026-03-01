import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MasterDataManagementPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-36 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200 bg-white py-8 px-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
            Master Data Management (MDM)
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Master Data Management (MDM)</h1>

          <p className="mt-6 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            Master Data Management (MDM) is the technology-enabled discipline, tools, and processes that ensure master
            data is coordinated across the enterprise. It guarantees the consistency, veracity, stewardship, and
            semantic consistency of data for the company as a whole as well as for business partners.
          </p>

          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            MDM includes both creating and maintaining master data. It is a tool and process to keep the master data
            clean and consistent as it gets updated and expands over time.
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
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-slate-200 bg-white p-2 md:grid-cols-12">
          <article className="md:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Mystery-shopping-1024x683.jpg"
              alt="Diagnostic Analytics"
              className="h-full max-h-[380px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="md:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              Depending on the technology used, MDM may cover a single domain or multiple domains.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              A uniform data stewardship experience, a small technical footprint, the flexibility to share reference
              data across domains, a cheaper total cost of ownership, and a stronger return on investment are all
              advantages of MDM.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
