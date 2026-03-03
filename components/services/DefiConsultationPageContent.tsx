import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const defiTracks = [
  {
    title: "Protocol & Market Validation",
    description:
      "We evaluate protocol strength, token behavior, and ecosystem momentum so your DeFi roadmap starts with real market signals.",
  },
  {
    title: "Risk, Security & Compliance",
    description:
      "From smart contract exposure to regulatory boundaries, we map vulnerabilities early and define safer launch pathways.",
  },
  {
    title: "Yield Design & Liquidity Strategy",
    description:
      "We model incentive structures, pool mechanics, and reward sustainability to support long-term participation.",
  },
];

const deliverables = [
  "Tokenomics and incentive structure review",
  "Smart contract and protocol due diligence",
  "Regulatory readiness and compliance guidance",
  "Yield farming and liquidity risk framework",
];

export default function DefiConsultationPageContent() {
  return (
    <main className="pb-16 pt-24 text-slate-900">
      <section className="templateContainer !pt-10">
        <div className="grid gap-10 border-y border-slate-300 py-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Blockchain Services
            </p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">DeFi Consultation</h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              Strategic DeFi advisory for teams building tokenized products, liquidity systems, and
              compliant growth models in an evolving decentralized market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/technology/blockchain"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Back to Blockchain
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-nataliya-vaitkevich-6120214-modified.jpg"
              alt="DeFi Consultation"
              className="h-72 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
          </div>
        </div>
      </section>

      <section className="templateContainer !pt-2">
        <div className="grid gap-8 border-b border-slate-300 pb-10 lg:grid-cols-12">
          <article className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              What We Solve
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl">Sharper Decisions in DeFi</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We turn fast-changing protocol data into clear strategic actions so you can launch and
              scale with less uncertainty.
            </p>
          </article>

          <div className="space-y-4 lg:col-span-8">
            {defiTracks.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-3 border border-slate-300 bg-slate-50 p-5 md:grid-cols-[80px_1fr] md:items-start"
              >
                <p className="text-3xl text-slate-400">0{index + 1}</p>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="templateContainer !pt-2">
        <div className="grid gap-8 lg:grid-cols-12">
          <article className="border border-slate-300 bg-slate-100 p-6 lg:col-span-5 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Advisory Coverage
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl">From token model to launch readiness</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Our DeFi consultants provide end-to-end direction across token economics, liquidity,
              security checks, and compliance workflows to reduce execution risk.
            </p>
          </article>

          <article className="border border-slate-300 p-6 lg:col-span-7 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900 md:text-xl">Core Deliverables</h3>
            <ul className="mt-5 grid gap-3">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-slate-200 pb-3 text-sm text-slate-700 last:border-none last:pb-0"
                >
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
