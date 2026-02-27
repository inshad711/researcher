import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Web30PageContent() {
  return (
    <main className="bg-slate-100 pb-24 pt-24 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.1)] md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              Web 3.0
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">Technology Service</p>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">WEB 3.0</h1>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12 lg:items-stretch">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-5 md:p-7">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/google-deepmind-Uln4sEaUwGE-unsplash-modified-768x576.jpg"
              alt="google-deepmind"
              className="h-full min-h-[260px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold leading-tight md:text-4xl">WEB 3.0</h2>
            <p className="mt-5 text-sm leading-8 text-slate-700 md:text-base">
              With our unwavering commitment to market research, we empower businesses to embrace this digital frontier, identify new possibilities, and navigate the opportunities presented by Web 3.0. Join us as to unleash the future and embark on an exciting journey into the realms of creativity!
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                Digital frontier
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                New possibilities
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                Creative opportunities
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/technology"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Technology Services
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
