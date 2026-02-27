import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DefiConsultationPageContent() {
  return (
    <main className="pb-20 pt-32 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-stone-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid lg:grid-cols-12">
            <div className="relative lg:col-span-5">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-nataliya-vaitkevich-6120214-modified.jpg"
                alt="pexels-nataliya-vaitkevich"
                className="h-72 w-full object-cover lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-50/40" />
            </div>
            <div className="flex flex-col justify-center px-6 py-10 lg:col-span-7 md:px-10 md:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                Blockchain Services
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">DeFi Consultation</h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Start Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/technology/blockchain"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Back to Blockchain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">DeFi Consultation</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Decentralized Finance (DeFi) has emerged as a disruptive force within the blockchain ecosystem,
            revolutionizing traditional financial systems. We provide insights into the strengths and weaknesses of
            various protocols to ease your stress. We provide insights into tokenomics and the competitive landscape
            to help you make informed decisions regarding DeFi token integration.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            As Researchers, we stay informed about evolving regulations and provide insights to mitigate compliance
            risks, to ensure you operate within regulatory boundaries. We assess the security measures and auditing
            practices of DeFi protocols and smart contracts to identify potential vulnerabilities.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            We also provide guidance on yield farming strategies, helps you assess risk versus reward profiles,
            liquidity pools, and token incentives.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            Don&apos;t hesitate to take a leap, Researchers have you covered!
          </p>
        </div>
      </section>
    </main>
  );
}
