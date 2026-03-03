import Link from "next/link";
import { ArrowRight } from "lucide-react";

const contentParagraphs = [
  "Tokenomics is a fundamental concept in Web 3.0, it represents the economic and incentive structures built around digital tokens and blockchain-based networks. The professionals at Researchers assist you in designing and evaluating tokens within the context of your specific use cases. We analyze token utility, tokenomics models, and token issuance mechanisms. Our expertise helps you create tokens that align with your strategic goals and promote user engagement and network growth.",
  "We provide insights into the potential impact of tokenomics to ensure your decisions are always data-driven. We analyze best practices, evaluate decentralized governance mechanisms, and provide recommendations to foster vibrant and inclusive communities.",
  "Tokenomics is complex and requires a solid understanding of blockchain technology, economics, and game theory. We provide education and training programs to help you grasp the fundamentals of tokenomics. We offer workshops, webinars, and educational materials to equip you with the knowledge and skills necessary to navigate the intricacies of tokenomics successfully.",
];

const pillars = [
  "Token utility and incentive calibration",
  "Emission, vesting, and supply sustainability",
  "Governance design with measurable participation",
  "Scenario testing under volatile market behavior",
];

export default function Web30TokenomicsPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-32 text-slate-900">
      <section className="templateContainer relative overflow-hidden border-b border-slate-300/80">
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full border border-slate-300/70" />
        <div className="pointer-events-none absolute -left-12 bottom-6 h-24 w-24 rounded-full border border-slate-300/70" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Web 3.0</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Tokenomics</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
          Architect incentive systems that stay fair, stable, and adoption-ready from day one.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services/technology/web-3-0"
            className="inline-flex items-center rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-600"
          >
            Back to Web 3.0
          </Link>
        </div>
      </section>

      <section className="templateContainer !pt-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-300">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-jonathan-borba-14891541-modified-1024x683.jpg"
                alt="Tokenomics strategy workshop"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </figure>

          <article className="lg:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Model, Simulate, Validate</h2>
            <div className="mt-5 space-y-4">
              {contentParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-slate-700 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="templateContainer !pt-4">
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((item, index) => (
            <article key={item} className="rounded-2xl border border-slate-300 px-5 py-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">0{index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900 md:text-lg">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="templateContainer !pt-4">
        <div className="rounded-3xl border border-slate-300 px-6 py-8 md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Outcome</p>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700 md:text-lg">
            We align token mechanics with real user behavior, governance intent, and long-term value retention so your
            ecosystem can scale with fewer structural corrections later.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-600"
          >
            Start Tokenomics Planning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
