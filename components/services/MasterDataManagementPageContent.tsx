import Link from "next/link";
import { ArrowRight } from "lucide-react";

const mdmBenefits = [
  "Single and trusted source of truth across business units",
  "Improved data quality, consistency, and governance",
  "Faster reporting, analytics, and operational decision-making",
  "Reduced duplication and lower long-term data management costs",
];

const mdmDomains = [
  {
    title: "Customer Master Data",
    desc: "Maintain consistent customer records across sales, support, and marketing systems.",
  },
  {
    title: "Product Master Data",
    desc: "Standardize product hierarchies, attributes, and classifications for reliable operations.",
  },
  {
    title: "Supplier Master Data",
    desc: "Unify supplier information to improve procurement, risk control, and compliance.",
  },
  {
    title: "Location and Reference Data",
    desc: "Share accurate reference datasets across platforms to avoid conflicting business rules.",
  },
];

export default function MasterDataManagementPageContent() {
  return (
    <main className="bg-gradient-to-br from-cyan-50 via-slate-50 to-sky-50 pb-16 pt-28 text-slate-900 md:pt-32">
      <section className="border-b border-slate-200/80">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Master Data Management (MDM)
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Build a trusted foundation for enterprise data
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Master Data Management (MDM) is the technology-enabled discipline, tools, and processes that ensure
              master data is coordinated across the enterprise. It guarantees consistency, stewardship, veracity, and
              semantic alignment of data for internal teams and external business partners.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              MDM includes both creating and maintaining master data, ensuring records remain clean, reliable, and
              scalable as business data grows over time.
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

          <article className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Team reviewing enterprise master data strategy"
              className="h-full min-h-[300px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200/80">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5 lg:order-2">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Master data governance collaboration"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>

          <article className="lg:col-span-7 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why MDM Matters</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
              Align systems, teams, and decisions around trusted data
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Depending on the technology and business model, MDM can cover a single domain or multiple domains. A
              mature setup creates a uniform stewardship experience, a smaller technical footprint, and easier data
              sharing across functions.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mdmBenefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-cyan-100 bg-cyan-50/70 px-4 py-4">
                  <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-cyan-50/40">
        <div className="templateContainer">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">MDM Scope</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Core master data domains we support</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {mdmDomains.map((domain, i) => (
              <article
                key={domain.title}
                className="grid gap-0 overflow-hidden rounded-2xl border border-cyan-100 bg-cyan-50/70 md:grid-cols-[72px_1fr]"
              >
                <div className="flex items-center justify-center border-b border-cyan-100 bg-cyan-100/80 px-4 py-4 md:border-b-0 md:border-r">
                  <span className="text-xl font-bold text-cyan-700">0{i + 1}</span>
                </div>
                <div className="px-6 py-6">
                  <h3 className="text-base font-semibold text-slate-900">{domain.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{domain.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Implementation Outcome</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Drive governance, agility, and ROI together</h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              With the right MDM operating model, enterprises can reduce duplicate records, strengthen compliance, and
              improve interoperability across analytics, CRM, ERP, and operational systems.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              The result is lower total cost of ownership and stronger returns from every data and transformation
              investment.
            </p>
          </article>

          <article className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Dashboard showing clean and unified master data outcomes"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section>
        <div className="templateContainer">
          <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-100 via-sky-50 to-slate-100 px-6 py-10 md:px-10 md:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">Ready to unify your data?</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              Create a scalable master data strategy for long-term growth
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
              We help organizations define governance, clean critical domains, and implement repeatable processes that
              keep master data accurate as the business evolves.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/analytics"
                className="inline-flex items-center rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Explore Analytics Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
