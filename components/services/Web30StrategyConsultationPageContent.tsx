import Link from "next/link";
import { ArrowRight } from "lucide-react";

const contentParagraphs = [
  "Web 3.0 represents a paradigm shift in the digital landscape, introducing decentralized networks, blockchain technology, and user empowerment. We understand the significance of Web 3.0 and its transformative potential for your brand. Our expertise allows us to provide valuable strategy and consultation services tailored to Web 3.0, to assist you in navigating this new frontier.",
  "We analyze the current digital infrastructure of your business, its technological capabilities, and organizational culture. We assess market trends, user behaviours, and emerging use cases to help you explore innovative business models and reimagine value creation in the Web 3.0 era.",
  "We evaluate partnership opportunities and strategic alliances. Our experts also assist you in develop dApps that leverage the capabilities of blockchain and decentralized networks. We assess user needs, analyze technical requirements, and provide guidance throughout the development lifecycle, ensuring the successful implementation of impactful dApps.",
  "Book your appointment already!",
];

export default function Web30StrategyConsultationPageContent() {
  return (
    <main className="bg-slate-100 pb-20 pt-32 text-slate-900">
      <section>
        <div className="templateContainer relative overflow-hidden border-y border-slate-300/80">
          <div className="pointer-events-none absolute -left-24 top-0 h-52 w-52 rounded-full bg-slate-300/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-slate-400/20 blur-3xl" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Web 3.0</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Web 3.0 Strategy &amp; Consultation
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
            Build practical blockchain and decentralized product strategy with focused planning, market fit
            clarity, and an execution roadmap your team can deliver.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/technology/web-3-0"
              className="inline-flex items-center rounded-full border border-slate-400 bg-transparent px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-600"
            >
              Back to Web 3.0
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="templateContainer grid gap-8 border-b border-slate-300/80 lg:grid-cols-12 lg:items-start">
          <article className="relative overflow-hidden border border-slate-300/80 lg:col-span-5">
            <div className="absolute left-3 top-3 z-10 border border-slate-200/70 bg-slate-900/75 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-100">
              Decentralized Future
            </div>
            <div className="relative h-full min-h-[340px]">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/06/tezos-w_v34lSJ7ew-unsplash-modified-768x512.jpg"
                alt="tezos"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
          </article>

          <article className="lg:col-span-7">
            <h2 className="border-l-2 border-slate-400 pl-4 text-2xl font-semibold leading-tight md:text-3xl">
              Strategic direction for real Web3 outcomes
            </h2>
            <div className="mt-6 space-y-4">
              {contentParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="border-l border-slate-300/80 pl-4 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <span className="mr-2 font-semibold text-slate-500">{String(index + 1).padStart(2, "0")}.</span>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
