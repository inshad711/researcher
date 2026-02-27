import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const integrationBenefits = [
  "Accessible, readily available, and quick linkages between data repositories.",
  "Data integrity and quality.",
  "Seamless system to system knowledge transmission.",
  "Improved cooperation",
  "Complete, real-time business intelligence, analytics, and insights.",
  "Improved productivity and return on investment (ROI).",
];

export default function DataIntegrationPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-24 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Data Integration</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Data Integration</h1>

          <p className="mt-6 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            Data is dispersed across numerous sources and business systems in the business paradigm of today. It makes
            things more difficult for firms. Data needs to be obtainable from a single source perspective in order to
            be meaningful.
          </p>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            The process of combining data from several business systems into a single, unified perspective that is
            kept in a central data warehouse is known as data integration. It facilitates quick access to the
            necessary information.
          </p>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            Data enables businesses to make wise decisions, improve customer experiences, and boost productivity.
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
              src="https://www.researchers.me/wp-content/uploads/2022/11/Data-Preparation-scaled.jpg"
              alt="Qualitative Research"
              className="h-full max-h-[420px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="md:col-span-7">
            <h3 className="text-xl font-semibold md:text-2xl">Benefits of data integration</h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              The gap between data administration and useful applications of the data is filled by data integration.
              Companies need access to current and pertinent information to stay competitive. The following advantages
              are brought about by real-time integration:
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-12 md:p-8">
          <article className="md:col-span-7">
            <ul className="space-y-3">
              {integrationBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                  <span className="text-sm leading-6 text-slate-700 md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="md:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/calculator-1024x683.jpg"
              alt="Microsoft Power BI"
              className="h-full max-h-[500px] w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
